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
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { PrimaryInput } from '../FormInputs/PrimaryInput';
import ButtonComponent from '../MiniComponents/ButtonComponent';
import { LoginModel, OpenAPI, UserService } from '~/services';
import { useCookies } from 'next-client-cookies';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginModel>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(true);
  const changePasswordField = () => {
    setShowPassword(!showPassword);
  };

  const Cookies = useCookies();

  const onSubmit = async (data: LoginModel) => {
    try {
      const result = await UserService.postApiUserLogin({ requestBody: data });
      if (result.success) {
        toast.success('Login Successful');
        Cookies.set('token', result.data?.token as string);
        Cookies.set('admin', JSON.stringify(result.data));
        OpenAPI.TOKEN = result.data?.token as string;
        router.push(
          result?.data?.role == 'Super Admin' ? '/dashboard' : 'infant-records'
        );
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
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: '90%' }}>
            <Stack gap={3}>
              <Box height="3rem" mx="auto">
                <Image src="/assets/logo.png" h="full" w="auto" />
              </Box>
              <PrimaryInput<LoginModel>
                label="Email"
                name="email"
                error={errors.email}
                defaultValue=""
                register={register}
              />
              <PrimaryInput<LoginModel>
                label="Password"
                name="password"
                defaultValue=""
                register={register}
                error={errors.password}
                changePasswordType={changePasswordField}
                passwordVisible={showPassword}
                type={showPassword ? 'password' : 'text'}
                icon
              />
              <Box mt="1rem">
                <ButtonComponent
                  content="Login"
                  isValid={isValid}
                  loading={isSubmitting}
                  type="submit"
                  w="full"
                />
              </Box>
            </Stack>
          </form>
          <Divider mb="1rem !important" mt="1rem !important" />
          <Flex display="none">
            <Text fontSize=".8rem" fontWeight="500">
              Don't have an account? &nbsp;
            </Text>
            <Text fontSize=".8rem" fontWeight="bold" color="brand.100">
              <Link href="/register"> Sign Up</Link>
            </Text>
          </Flex>
          <Text color="brand.100" fontWeight="bold">
            <Link href="/password/reset"> Forgot password</Link>
          </Text>
        </Stack>
      </Grid>
    </Box>
  );
};

export default Login;
