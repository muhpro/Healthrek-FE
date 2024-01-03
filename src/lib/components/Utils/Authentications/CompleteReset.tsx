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
import React, { useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { InitiateResetModel, PasswordReset, UserService } from '~/services';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { PrimaryInput } from '../FormInputs/PrimaryInput';
import ButtonComponent from '../MiniComponents/ButtonComponent';
import { MainHeader } from '../MiniComponents/MainHeader';
import { MainSubTitle } from '../MiniComponents/MainSubTitle';

const schema = yup.object().shape({
  newPassword: yup.string().min(8).max(16).required(),
});

const CompleteReset = ({ code }: { code: string }) => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<PasswordReset>({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: {
      code,
    },
  });
  const [showPassword, setShowPassword] = useState(true);
  const changePasswordField = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: PasswordReset) => {
    try {
      const result = await UserService.completeReset({ requestBody: data });
      if (result.status) {
        setSuccess(true);
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
          h={['100%', '100%', '60vh']}
          justifyContent="center"
          display={['none', 'flex']}
          alignItems="center"
          textAlign="center"
          mx="1.3rem"
          borderRadius="8px"
        >
          <Image
            src="/assets/adminb.jpg"
            my={['1rem', '2rem !important', '5rem']}
            objectFit="contain"
          />
        </Flex>

        <Stack
          alignItems="center !important"
          justifyContent="center"
          spacing={2}
          mt="5rem"
          w="full"
        >
          <Circle size="3rem" mx="auto">
            <Image src="/assets/lock.png" w="full" h="auto" />
          </Circle>
          {success ? (
            <Box borderRadius="10px" bgColor="#F8F6F5" p="1rem">
              <Text
                fontSize="1rem"
                w="70%"
                fontWeight="500"
                textAlign="center"
                mx="auto"
              >
                Password reset Completed, you can now login with new credentials
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
                      'Enter a new password you can always remember to login anytime.'
                    }
                    align={['center', 'left']}
                    size="14px"
                    lh="normal"
                  />
                </VStack>
                <PrimaryInput<PasswordReset>
                  label="New Password"
                  name="newPassword"
                  error={errors.newPassword}
                  defaultValue=""
                  register={register}
                />
                <ButtonComponent
                  content="Submit"
                  isValid={isValid}
                  loading={isSubmitting}
                  type="submit"
                  w='full'
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

export default CompleteReset;
