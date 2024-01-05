'use client';

import {
  Box,
  Text,
  Grid,
  Stack,
  Image,
  Flex,
  Divider,
  Circle,
  VStack,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { PrimaryInput } from '../FormInputs/PrimaryInput';
import ButtonComponent from '../MiniComponents/ButtonComponent';
import { MainHeader } from '../MiniComponents/MainHeader';
import { MainSubTitle } from '../MiniComponents/MainSubTitle';
import { UserService } from '~/services';

interface InitiateResetModel {
  email: string | undefined;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<InitiateResetModel>({
    resolver: yupResolver(schema),
    mode: 'all',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (data: InitiateResetModel) => {
    try {
      const result = await UserService.postApiUserForgotPassword({
        email: data.email,
      });
      if (result.success) {
        toast.success(result.message as string);
        setShowSuccess(true);
        return;
      }
      toast.error(result.message as string);
      return;
    } catch (err: any) {
      toast.error(err.message || err.body.message);
    }
  };

  return (
    <Box w="90%" mx="auto" minH="80vh" mt="1.5rem" overflow="hidden" pb="5">
      <Grid templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']} gap={5}>
        <Flex
          w={['90%', '100%', '40vw']}
          h={['100%', '100%', '90vh']}
          justifyContent="center"
          display={['none', 'flex']}
          alignItems="center"
          textAlign="center"
          mx="1.3rem"
          borderRadius="8px"
          bgColor="brand.100"
          p="1rem"
        >
          <Image
            src="/assets/imga.jpg"
            h="full"
            w="full"
            my={['1rem', '2rem !important', '5rem']}
            objectFit="cover"
          />
        </Flex>

        <Stack
          alignItems="center !important"
          justifyContent="center"
          spacing={2}
          mt="5rem"
          w="full"
        >
          <Circle size="3rem" mx="auto" mb="1rem">
            <Image src="/assets/logo.png" w="full" h="auto" />
          </Circle>
          {showSuccess ? (
            <Box borderRadius="10px" bgColor="#F8F6F5" p="1rem">
              <Text
                fontSize="1rem"
                w="70%"
                fontWeight="500"
                textAlign="center"
                mx="auto"
              >
                Password reset initiated, please check your email for further
                instructions.
              </Text>
            </Box>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '90%' }}>
              <Stack gap={3}>
                <VStack spacing="0px">
                  <MainHeader
                    text={'Reset Password'}
                    align={['center', 'left']}
                    size="30px"
                    lh="normal"
                  />
                  <MainSubTitle
                    text={
                      'Enter your registered email and we will send you a reset link so you can create a new password.'
                    }
                    align={['center', 'left']}
                    size="14px"
                    lh="normal"
                  />
                </VStack>
                <PrimaryInput<InitiateResetModel>
                  label="Email"
                  name="email"
                  error={errors.email}
                  defaultValue=""
                  register={register}
                />
                <ButtonComponent
                  content="Submit"
                  isValid={isValid}
                  loading={isSubmitting}
                  type="submit"
                  w="full"
                />
              </Stack>
            </form>
          )}

          <Divider mb="1rem !important" mt="1rem !important" />
          <Flex>
            <Text fontSize=".8rem" fontWeight="bold" color="brand.100">
              <Link href="/login"> Back to login</Link>
            </Text>
          </Flex>
        </Stack>
      </Grid>
    </Box>
  );
};

export default ResetPassword;
