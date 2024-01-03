import React from 'react';
import DrawerWrapper from '../Utils/MiniComponents/DrawerWrapper';
import { Button, Grid, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { PrimarySelect } from '../Utils/FormInputs/PrimarySelect';
import { PrimaryInput } from '../Utils/FormInputs/PrimaryInput';
import { PrimaryDate } from '../Utils/FormInputs/PrimaryDate';
import dayjs from 'dayjs';
import ButtonComponent from '../Utils/MiniComponents/ButtonComponent';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { HealthService, ImmunizationModel } from '~/services';
import { PrimaryTextArea } from '../Utils/FormInputs/PrimaryTextArea';

const schema = yup.object().shape({
  //   infantId: yup.string().required(),
  immunizationType: yup.string().required(),
  dateAdministered: yup.string().required(),
});

export const AddImmunizationRecord = ({
  onClose,
  isOpen,
  infants,
  clinicalTeams,
  data,
  setData,
  isEdit,
  id,
}: {
  onClose: any;
  isOpen: any;
  infants?: any;
  data?: any;
  setData?: any;
  clinicalTeams: any;
  isEdit?: any;
  id?: any;
}) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ImmunizationModel>({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: {
      id: data?.id,
      infantId: data?.infantId,
      immunizationType: data?.immunizationType,
      dateAdministered: data?.comment,
    },
  });
  const closeModal = () => {
    reset({
      id: '',
      infantId: '',
      immunizationType: '',
      dateAdministered: '',
    });
    setData();
    onClose();
  };
  const onSubmit = async (data: any) => {
    id ? (data.infantId = id) : (data.infantId = data.infantId);
    try {
      const res = isEdit
        ? await HealthService.postApiHealthImmunizationUpdateImmunizationRecord(
            {
              requestBody: data,
            }
          )
        : await HealthService.postApiHealthImmunizationAddImmunizationRecord({
            requestBody: data,
          });
      if (res.success) {
        toast.success('Success');
        closeModal();
        router.refresh();
        return;
      }
      toast.error(res?.message as string);
    } catch (error: any) {
      toast.error(error?.body?.message || error?.message);
    }
  };
  return (
    <DrawerWrapper
      onClose={onClose}
      isOpen={isOpen}
      title={isEdit ? 'Edit Record' : 'Add new Record'}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing="1.5rem">
          {!id && (
            <PrimarySelect<ImmunizationModel>
              label="Infant"
              name="infantId"
              error={errors.infantId}
              register={register}
              options={
                <>
                  {infants?.map((x: any) => (
                    <option value={x.id}>{x?.firstName}</option>
                  ))}
                </>
              }
            />
          )}

          <Grid
            templateColumns={['1fr', 'repeat(2, 1fr)']}
            gap="1.5rem"
            w="full"
          >
            <PrimaryDate<ImmunizationModel>
              label="Date Administered"
              name="dateAdministered"
              error={errors.dateAdministered}
              control={control}
              placeholder={dayjs(watch('dateAdministered')).format(
                'DD/MM/YYYY'
              )}
            />
            <PrimarySelect<ImmunizationModel>
              label="Immunization Type"
              name="immunizationType"
              error={errors.immunizationType}
              register={register}
              options={
                <>
                  {['Vaccine', 'Injection']?.map((x: any) => (
                    <option value={x}>{x}</option>
                  ))}
                </>
              }
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
              onClick={() => closeModal()}
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
    </DrawerWrapper>
  );
};
