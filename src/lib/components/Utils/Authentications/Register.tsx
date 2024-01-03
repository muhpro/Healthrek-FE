'use client';

import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { PrimaryInput } from '../FormInputs/PrimaryInput';
import ButtonComponent from '../MiniComponents/ButtonComponent';
import { RegisterModel, UserService } from '~/services';
import toast from 'react-hot-toast';

const mobile = /^([0]{1})[0-9]{10}$/;
const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Passwords must match'),
});

const Register = () => {
  const [passwordType, setPasswordType] = useState<boolean>(true);
  const [cPasswordType, setCPasswordType] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterModel>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (data: RegisterModel) => {
    try {
      const result = await UserService.create({ requestBody: data });
      if (result.status) {
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
    <Box width="90%" mx="auto" mt={['1.875rem', '2.3rem']}>
      <Flex width="100%" direction={['column', 'column', 'row']}>
        <Box w="100%" border="2px hidden red" pr={[0, 0, '1.25rem']}>
          <Heading
            sx={{
              '::first-letter': {
                textTransform: 'uppercase',
              },
            }}
            lineHeight={1.5}
            mb={['1.8rem', '2.4rem']}
            fontSize={['1.6rem', '1.875rem', '2.3rem']}
            w={['100%', '60%', '100%']}
          >
            Welcome to Ownland, Happy Investing!
          </Heading>

          <Box
            display={['none', 'block']}
            w="100%"
            h={[0, '18rem', '25rem']}
            // bg="brand.100"
          >
            <Image
              src="assets/admind.jpg"
              alt="an image to display"
              w="100%"
              h="100%"
              objectFit="contain"
            />
          </Box>
        </Box>
        <Box
          w={['100%', '80%', '100%']}
          border="2px hidden blue"
          pl={[0, 0, '2.5rem']}
          mt={[0, '20px', 0]}
          margin="auto"
        >
          {showSuccess ? (
            <Box borderRadius="10px" bgColor="#F8F6F5" p="1rem">
              <Text
                fontSize="1rem"
                w="70%"
                fontWeight="500"
                textAlign="center"
                mx="auto"
              >
                Account created successfully, please check your email inbox to
                verify your account
              </Text>
            </Box>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <PrimaryInput<RegisterModel>
                label="first name"
                name="firstName"
                error={errors.firstName}
                placeholder="Type in your first name"
                defaultValue=""
                register={register}
              />
              <PrimaryInput<RegisterModel>
                label="surname "
                name="lastName"
                error={errors.lastName}
                placeholder="Type in your surname"
                defaultValue=""
                register={register}
              />
              <PrimaryInput<RegisterModel>
                label="email"
                name="email"
                error={errors.email}
                placeholder="Enter your email"
                defaultValue=""
                register={register}
              />
              {/* <PrimaryInput<RegisterModel>
                label="mobile number"
                name="phoneNumber"
                // error={errors.phoneNumber}
                placeholder="Enter your mobile number"
                defaultValue=""
                register={register}
              /> */}
              <PrimaryInput<RegisterModel>
                label="Create a Password"
                name="password"
                error={errors.password}
                placeholder="* * * *"
                defaultValue=""
                register={register}
                changePasswordType={() => setPasswordType((prev) => !prev)}
                passwordVisible={passwordType}
                type={passwordType ? 'password' : 'text'}
                icon
              />
              <PrimaryInput<RegisterModel>
                label="Repeat your Password"
                name="confirmPassword"
                error={errors.confirmPassword}
                placeholder="* * * *"
                defaultValue=""
                register={register}
                changePasswordType={() => setCPasswordType((prev) => !prev)}
                passwordVisible={cPasswordType}
                type={cPasswordType ? 'password' : 'text'}
                icon
              />
              <Box my="2rem">
                <ButtonComponent
                  content="sign up"
                  isValid={isValid}
                  loading={isSubmitting}
                  type="submit"
                  w='full'
                />
              </Box>
            </form>
          )}

          <Box w="100%" padding="10px 0 10px" fontSize=".9rem">
            <Text w="100%" textAlign="center" fontWeight="500">
              Already have an account?
              <NextLink href="/login" passHref>
                <Text as="span" color="brand.100" fontWeight="bold">
                  Login.
                </Text>
              </NextLink>
            </Text>
          </Box>

          <Divider borderColor="brand.50" />

          <Flex
            w="100%"
            align="center"
            mb="1rem"
            mt=".5rem"
            justify="center"
            fontSize=".7rem"
          >
            <Text textAlign="center" padding="10px 0">
              By creating an account you agree to our &nbsp;
            </Text>
            <NextLink href="#" passHref>
              <Text color="brand.100" cursor="pointer">
                terms &amp; conditions
              </Text>
            </NextLink>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Register;
