'use client';
import { Box, Button, Flex, Grid, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { PrimaryInput } from '../Utils/FormInputs/PrimaryInput';
import { InfantModel, UserService } from '~/services';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { PrimarySelect } from '../Utils/FormInputs/PrimarySelect';
import { PrimaryDate } from '../Utils/FormInputs/PrimaryDate';
import dayjs from 'dayjs';
import ButtonComponent from '../Utils/MiniComponents/ButtonComponent';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  dateOfBirth: yup.string().required(),
  gender: yup.string().required(),
  lengthOfBirth: yup.number().required(),
  modeOfDelivery: yup.string().required(),
  gestationWeek: yup.number().required(),
  guardianFirstName: yup.string().required(),
  guardianLastName: yup.string().required(),
  phone: yup.string().required(),
  guardianDateOfBirth: yup.string().required(),
  role: yup.string().required(),
  address: yup.string().required(),
  alternatePhoneNumber: yup.string().required(),
  city: yup.string().required(),
  guardianType: yup.string().required(),
  nextOfKinName: yup.string().required(),
  nextOfKinAddress: yup.string().required(),
  nextOfKinPhoneNumber: yup.string().required(),
  nextOfKinEmail: yup.string().required(),
});

export const AddBirthRecord = ({
  data,
  isEdit,
}: {
  data?: any;
  isEdit?: boolean;
}) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<InfantModel>({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: {
      id: data?.id,
      email: data?.guardian?.email,
      firstName: data?.firstName,
      lastName: data?.lastName,
      dateOfBirth: data?.dateOfBirth,
      gender: data?.gender,
      lengthOfBirth: data?.lengthOfBirth,
      modeOfDelivery: data?.modeOfDelivery,
      gestationWeek: data?.gestationWeek,
      guardianFirstName: data?.guardian?.firstName,
      guardianLastName: data?.guardian?.lastName,
      phone: data?.guardian?.phone,
      guardianDateOfBirth: data?.guardian?.dateOfBirth,
      role: data?.guardian?.role,
      address: data?.guardian?.address,
      alternatePhoneNumber: data?.guardian?.alternatePhoneNumber,
      city: data?.guardian?.city,
      guardianType: data?.guardian?.guardianType,
      nextOfKinName: data?.guardian?.nextOfKinName,
      nextOfKinAddress: data?.guardian?.nextOfKinAddress,
      nextOfKinPhoneNumber: data?.guardian?.nextOfKinPhoneNumber,
      nextOfKinEmail: data?.guardian?.nextOfKinEmail,
    },
  });

  const onSubmit = async (value: any) => {
    try {
      const res = isEdit
        ? await UserService.postApiUserUpdateInfant({
            requestBody: { ...value, guardianId: data?.guardianId },
          })
        : await UserService.postApiUserAddInfant({ requestBody: value });
      if (res.success) {
        toast.success('Success');
        router.push(isEdit ? `/infant-records/${data?.id}` : '/infant-records');
        return;
      }
      toast.error(res?.message as string);
    } catch (error: any) {
      toast.error(error?.message || error?.body?.message);
    }
  };
  return (
    <Box>
      <Flex bgColor="white" borderRadius="8px" p="1rem" mb="1.5rem">
        <Text>
          <b>Note: </b>
          Please fill in the information correctly to avoid mistakes and errors
          during registration of an infant. Click the cancel button at any time
          to cancel registration
        </Text>
      </Flex>

      <Box p="1rem" bgColor="white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack gap="1.5rem" align="flex-start" w="full">
            <Text fontWeight={600} fontSize="1.15rem">
              Infant Basic Information
            </Text>
            <Grid
              templateColumns={['1fr', 'repeat(2, 1fr)']}
              gap="1.5rem"
              w="full"
            >
              <PrimaryInput<InfantModel>
                label="First Name"
                name="firstName"
                error={errors.firstName}
                register={register}
              />
              <PrimaryInput<InfantModel>
                label="Last Name"
                name="lastName"
                error={errors.lastName}
                register={register}
              />
            </Grid>
            <Grid
              templateColumns={['1fr', 'repeat(3, 1fr)']}
              gap="1.5rem"
              w="full"
            >
              <PrimaryDate<InfantModel>
                label="Date of Birth"
                name="dateOfBirth"
                error={errors.dateOfBirth}
                control={control}
                placeholder={dayjs(watch('dateOfBirth')).format('DD/MM/YYYY')}
              />
              <PrimarySelect<InfantModel>
                label="Gender"
                name="gender"
                error={errors.gender}
                register={register}
                options={
                  <>
                    {['Male', 'Female'].map((x) => (
                      <option value={x}>{x}</option>
                    ))}
                  </>
                }
              />
              <PrimaryInput<InfantModel>
                label="Length of Birth"
                name="lengthOfBirth"
                error={errors.lengthOfBirth}
                register={register}
                type="number"
              />
              <PrimarySelect<InfantModel>
                label="Mode of Delivery"
                name="modeOfDelivery"
                error={errors.modeOfDelivery}
                register={register}
                options={
                  <>
                    {[
                      'Vaginal Birth',
                      'Natural Birth',
                      'Cesarean Section',
                      'Vaginal Birth after C-Section',
                    ].map((x) => (
                      <option value={x}>{x}</option>
                    ))}
                  </>
                }
              />
              <PrimaryInput<InfantModel>
                label="Gestation Week"
                name="gestationWeek"
                error={errors.gestationWeek}
                register={register}
                type="number"
              />
            </Grid>
            <Text fontWeight={600} fontSize="1.15rem">
              Guardian Information
            </Text>
            <Grid
              templateColumns={['1fr', 'repeat(3, 1fr)']}
              gap="1.5rem"
              w="full"
            >
              <PrimaryInput<InfantModel>
                label="Guardian First Name"
                name="guardianFirstName"
                error={errors.guardianFirstName}
                register={register}
              />
              <PrimaryInput<InfantModel>
                label="Guardian Last Name"
                name="guardianLastName"
                error={errors.guardianLastName}
                register={register}
              />
              <PrimaryInput<InfantModel>
                label="Email"
                name="email"
                error={errors.email}
                register={register}
                type="email"
              />
              <PrimaryInput<InfantModel>
                label="Phone"
                name="phone"
                error={errors.phone}
                register={register}
              />
              <PrimaryDate<InfantModel>
                label="Guardian Date of Birth"
                name="guardianDateOfBirth"
                error={errors.guardianDateOfBirth}
                control={control}
                placeholder={dayjs(watch('guardianDateOfBirth')).format(
                  'DD/MM/YYYY'
                )}
              />
              <PrimaryInput<InfantModel>
                label="Address"
                name="address"
                error={errors.address}
                register={register}
              />
              <PrimaryInput<InfantModel>
                label="Alternate Phone"
                name="alternatePhoneNumber"
                error={errors.alternatePhoneNumber}
                register={register}
              />
              <PrimaryInput<InfantModel>
                label="City"
                name="city"
                error={errors.city}
                register={register}
              />
              <PrimarySelect<InfantModel>
                label="Guardian Type"
                name="guardianType"
                error={errors.guardianType}
                register={register}
                options={
                  <>
                    {['Parent', 'Relative', 'Adopted Parent'].map((x) => (
                      <option value={x}>{x}</option>
                    ))}
                  </>
                }
              />
              <PrimarySelect<InfantModel>
                label="Role"
                name="role"
                error={errors.role}
                register={register}
                options={
                  <>
                    {['Super Admin', 'Clinical Team', 'Guardian'].map((x) => (
                      <option value={x}>{x}</option>
                    ))}
                  </>
                }
              />
            </Grid>
            <Text fontWeight={600} fontSize="1.15rem" mb="0">
              Next of Kin Information
            </Text>
            <Grid
              templateColumns={['1fr', 'repeat(2, 1fr)']}
              gap="1.5rem"
              w="full"
            >
              <PrimaryInput<InfantModel>
                label="Name"
                name="nextOfKinName"
                error={errors.nextOfKinName}
                register={register}
              />

              <PrimaryInput<InfantModel>
                label="Email"
                name="nextOfKinEmail"
                error={errors.nextOfKinEmail}
                register={register}
                type="email"
              />
              <PrimaryInput<InfantModel>
                label="Phone"
                name="nextOfKinPhoneNumber"
                error={errors.nextOfKinPhoneNumber}
                register={register}
              />
              <PrimaryInput<InfantModel>
                label="Address"
                name="nextOfKinAddress"
                error={errors.nextOfKinAddress}
                register={register}
              />
            </Grid>
            <Grid
              templateColumns={['1fr', 'repeat(2, 1fr)']}
              gap="1.5rem"
              w="full"
              my="2rem"
            >
              <Button
                w="full"
                height="3.2rem"
                variant="outline"
                border="2px solid"
                borderRadius="0"
                borderColor="red.600"
                color="red.600"
                onClick={() => router.push('/infant-records')}
                _hover={{
                  bgColor: 'red.600',
                  color: 'white',
                }}
              >
                Cancel
              </Button>
              <ButtonComponent
                content={isEdit ? 'Edit Record' : 'Add Record'}
                isValid={isValid}
                loading={isSubmitting}
                type="submit"
                w="full"
              />
            </Grid>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};
