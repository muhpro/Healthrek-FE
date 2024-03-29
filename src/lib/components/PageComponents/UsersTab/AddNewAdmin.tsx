'use client';
import { Button, Grid, Text, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { PrimaryInput } from '../../Utils/FormInputs/PrimaryInput';
import toast from 'react-hot-toast';
import { ClinicalTeamModel, UserService } from '~/services';
import { PrimarySelect } from '../../Utils/FormInputs/PrimarySelect';
import { useState } from 'react';
const schema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
});

function AddNewAdmin() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(true);
  const changePasswordField = () => {
    setShowPassword(!showPassword);
  };
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ClinicalTeamModel>({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: {
      clinicalTeamType: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      phone: '',
      role: '',
    },
  });

  const onSubmit = async (data: ClinicalTeamModel) => {
    try {
      const result = await UserService.postApiUserAddClinicalTeam({
        requestBody: data,
      });
      console.log({ result });
      if (result.success) {
        toast.success(result.message as string);
        reset();
        router.refresh();
        return;
      }
      toast.error(result.message as string);
      return;
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message || error?.body?.message);
    }
  };

  return (
    <VStack
      maxH="80vh"
      overflowY="auto"
      px={5}
      w="full"
      align="flex-start"
      mt="2rem"
    >
      {/* <Text
        color="black"
        fontSize="1.1rem"
        textAlign="left"
        fontWeight="semibold"
        px={5}
      >
        Add User
      </Text> */}
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <VStack spacing="1rem" alignItems="flex-start" w="100%">
          <Grid templateColumns={['1fr', 'repeat(2,1fr)']} gap="1rem" w="full">
            <PrimaryInput<ClinicalTeamModel>
              register={register}
              name="firstName"
              error={errors.firstName}
              defaultValue=""
              type="text"
              label="First name"
              placeholder="First Name"
            />
            <PrimaryInput<ClinicalTeamModel>
              register={register}
              name="lastName"
              error={errors.lastName}
              defaultValue=""
              type="text"
              label="Surname"
              placeholder="Surname"
            />
            <PrimaryInput<ClinicalTeamModel>
              register={register}
              name="email"
              error={errors.email}
              defaultValue=""
              type="text"
              label="Email"
              placeholder="Email"
            />
            <PrimaryInput<ClinicalTeamModel>
              register={register}
              name="phone"
              error={errors.phone}
              defaultValue=""
              type="text"
              label="Phone"
              placeholder="Phone"
            />
            <PrimaryInput<ClinicalTeamModel>
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
            <PrimarySelect<ClinicalTeamModel>
              label="Role"
              name="role"
              error={errors.role}
              register={register}
              placeholder="Doctor"
              options={
                <>
                  {['Nurse', 'Midwife', 'Guardian', 'Super Admin'].map((x) => (
                    <option value={x}>{x}</option>
                  ))}
                </>
              }
            />
            {/* <PrimarySelect<ClinicalTeamModel>
              label="Clinical Team"
              name="clinicalTeamType"
              error={errors.clinicalTeamType}
              register={register}
              placeholder="Doctor"
              options={
                <>
                  {['Doctor', 'Nurse'].map((x) => (
                    <option value={x}>{x}</option>
                  ))}
                </>
              }
            /> */}
            <Button
              w="full"
              mt="1.5rem"
              height="3rem"
              type="submit"
              isLoading={isSubmitting}
              borderRadius="4px"
              bgColor="brand.100"
              color="white"
              _hover={{
                bgColor: 'transparent',
                color: 'brand.100',
                border: '2px solid black',
              }}
            >
              Add
            </Button>
          </Grid>
        </VStack>
      </form>
    </VStack>
  );
}
export default AddNewAdmin;
