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
import { HealthService, GrowthModel } from '~/services';
import { PrimaryTextArea } from '../Utils/FormInputs/PrimaryTextArea';

const schema = yup.object().shape({
  //   infantId: yup.string().required(),
  comment: yup.string().required(),
  date: yup.string().required(),
  clinicalTeamId: yup.string().required(),
  weight: yup.string().required(),
  headCircumference: yup.string().required(),
  height: yup.string().required(),
});

export const AddGrowthRecord = ({
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
  } = useForm<GrowthModel>({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: {
      infantId: data?.infantId,
      clinicalTeamId: data?.clinicalTeamId,
      weight: data?.weight,
      date: data?.date,
      height: data?.height,
      headCircumference: data?.headCircumference,
      comment: data?.comment,
    },
  });
  const closeModal = () => {
    reset({
      id: '',
      infantId: '',
      comment: '',
      date: '',
      clinicalTeamId: '',
      weight: '' as any,
      height: '' as any,
      headCircumference: '' as any,
    });
    setData();
    onClose();
  };
  const onSubmit = async (data: any) => {
    id ? (data.infantId = id) : (data.infantId = data.infantId);
    try {
      const res = isEdit
        ? await HealthService.postApiHealthGrowthUpdate({
            requestBody: data,
          })
        : await HealthService.postApiHealthGrowthAddGrowthRecord({
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
      title={isEdit ? 'Edit Growth Record' : 'Add Growth Record'}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing="1.5rem">
          {!id && (
            <PrimarySelect<GrowthModel>
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
            <PrimaryDate<GrowthModel>
              label="Date of Visitation"
              name="date"
              error={errors.date}
              control={control}
              placeholder={dayjs(watch('date')).format('DD/MM/YYYY')}
            />
            <PrimarySelect<GrowthModel>
              label="Clinical Team"
              name="clinicalTeamId"
              error={errors.clinicalTeamId}
              register={register}
              options={
                <>
                  {clinicalTeams?.map((x: any) => (
                    <option value={x.id}>{x?.firstName}</option>
                  ))}
                </>
              }
            />
            <PrimaryInput<GrowthModel>
              label="Weight"
              name="weight"
              error={errors.weight}
              register={register}
            />
            <PrimaryInput<GrowthModel>
              label="Height"
              name="height"
              error={errors.height}
              register={register}
            />
            <PrimaryInput<GrowthModel>
              label="Head Circumference"
              name="headCircumference"
              error={errors.headCircumference}
              register={register}
            />
            <PrimaryTextArea<GrowthModel>
              label="Comment"
              name="comment"
              error={errors.comment}
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
