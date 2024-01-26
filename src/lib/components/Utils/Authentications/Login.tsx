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
  useDisclosure,
} from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { PrimaryInput } from '../FormInputs/PrimaryInput';
import ButtonComponent from '../MiniComponents/ButtonComponent';
import {
  EmailVerificationModel,
  LoginModel,
  OpenAPI,
  UserService,
} from '~/services';
import { useCookies } from 'next-client-cookies';
import { OtpInput } from '../FormInputs/OtpInput';
import ResetPasswordModal from '../MiniComponents/ResetPasswordModal';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const otpCount = 6;
const otpSchema = yup.object().shape({
  code: yup
    .string()
    .required()
    .length(otpCount, `Your verification code is ${otpCount} digits`),
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
  const {
    register: registers,
    handleSubmit: handleSubmits,
    control,
    formState: { errors: isError, isValid: valid, isSubmitting: submitting },
  } = useForm<EmailVerificationModel>({
    resolver: yupResolver(otpSchema),
    mode: 'all',
  });

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const changePasswordField = () => {
    setShowPassword(!showPassword);
  };

  const Cookies = useCookies();

  const [showVerify, setShowVerify] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userDetails, setUserDetails] = useState<any>();

  const onSubmit = async (data: LoginModel) => {
    try {
      const result = await UserService.postApiUserLogin({ requestBody: data });
      if (result.success) {
        if (result?.data?.isActive) {
          toast.success('Login Successful');
          Cookies.set('token', result.data?.token as string);
          Cookies.set('admin', JSON.stringify(result.data));
          OpenAPI.TOKEN = result.data?.token as string;
          router.push(
            result?.data?.role == 'Super Admin'
              ? '/dashboard'
              : result?.data?.role == 'Guardian'
              ? `/infant-records/${result.data?.infantId}`
              : 'infant-records'
          );
        } else {
          setUserDetails(result.data);
          setShowVerify(true);
        }
        return;
      }
      toast.error(result.message as string);
      return;
    } catch (err: any) {
      toast.error(err?.body?.message || err?.message);
    }
  };
  const onSubmits = async (data: EmailVerificationModel) => {
    data.codeRefrence = userDetails?.reference;
    data.userId = userDetails?.userId;
    try {
      const result = await UserService.postApiUserConfirmEmail({
        requestBody: data,
      });
      if (result.success) {
        toast.success('Verification Successful');
        // onOpen();
        setShowVerify(false);
        return;
      }
      toast.error(result.message as string);
      return;
    } catch (err: any) {
      toast.error(err?.body?.message || err?.message);
    }
  };

  useEffect(() => {
    handleSubmits(onSubmits)();
  }, [valid]);

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
          {showVerify ? (
            <>
              <VStack align="center" mb="1rem">
                <Text fontSize="1.4rem" fontWeight={600}>
                  Verify your account
                </Text>
                <Text fontSize=".9rem">
                  OTP Verification has been sent to your email
                </Text>
                <Box p=".2rem .5rem" bgColor="white" display="none">
                  <Text fontSize=".9rem" color="red">
                    Please Do not Close/Reload this page until the Verification
                    is complete
                  </Text>
                </Box>
              </VStack>
              <form
                onSubmit={handleSubmits(onSubmits)}
                style={{ width: '90%' }}
              >
                <OtpInput<EmailVerificationModel>
                  name="code"
                  error={isError.code}
                  control={control}
                  otpCount={otpCount}
                />
                <Box mt="1rem">
                  <ButtonComponent
                    content="Verify"
                    isValid={valid}
                    loading={submitting}
                    isDisabled={!valid}
                    type="submit"
                    w="full"
                  />
                </Box>
              </form>
            </>
          ) : (
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
          )}
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
      {isOpen && <ResetPasswordModal isOpen={isOpen} onClose={onClose} />}
    </Box>
  );
};

export default Login;
