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
import { HealthService, MedicalVisitModel } from '~/services';
import { PrimaryTextArea } from '../Utils/FormInputs/PrimaryTextArea';

const schema = yup.object().shape({
  //   infantId: yup.string().required(),
  complaint: yup.string().required(),
  date: yup.string().required(),
  clinicalTeamId: yup.string().required(),
  diagnosis: yup.string().required(),
  physicianExamination: yup.string().required(),
  medication: yup.string().required(),
  heartRate: yup.number().required(),
  respiratoryRate: yup.number().required(),
  bloodPressure: yup.number().required(),
  temperature: yup.number().required(),
  oxygenSaturation: yup.number().required(),
});

export const AddMedicalRecord = ({
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
  } = useForm<MedicalVisitModel>({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: {
      id: data?.id,
      infantId: data?.infantId,
      complaint: data?.complaint,
      date: data?.date,
      clinicalTeamId: data?.clinicalTeamId,
      diagnosis: data?.diagnosis,
      physicianExamination: data?.physicianExamination,
      medication: data?.medication,
      heartRate: data?.heartRate,
      respiratoryRate: data?.respiratoryRate,
      bloodPressure: data?.bloodPressure,
      temperature: data?.temperature,
      oxygenSaturation: data?.oxygenSaturation,
    },
  });
  const closeModal = () => {
    reset({
      id: '',
      infantId: '',
      complaint: '',
      date: '',
      clinicalTeamId: '',
      diagnosis: '',
      physicianExamination: '',
      medication: '',
      heartRate: '' as any,
      respiratoryRate: '' as any,
      bloodPressure: '' as any,
      temperature: '' as any,
      oxygenSaturation: '' as any,
    });
    setData();
    onClose();
  };
  const onSubmit = async (data: any) => {
    id ? (data.infantId = id) : (data.infantId = data.infantId);
    try {
      const res = isEdit
        ? await HealthService.postApiHealthConsultationUpdateVisitationDetail({
            requestBody: data,
          })
        : await HealthService.postApiHealthConsultationAddVisitationDetail({
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
      title={isEdit ? 'Edit Medical Record' : 'Add Medical Record'}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing="1.5rem">
          {!id && (
            <PrimarySelect<MedicalVisitModel>
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
          <PrimaryTextArea<MedicalVisitModel>
            label="Complaint"
            name="complaint"
            error={errors.complaint}
            register={register}
          />
          <Grid
            templateColumns={['1fr', 'repeat(2, 1fr)']}
            gap="1.5rem"
            w="full"
          >
            <PrimaryDate<MedicalVisitModel>
              label="Date of Visitation"
              name="date"
              error={errors.date}
              control={control}
              placeholder={dayjs(watch('date')).format('DD/MM/YYYY')}
            />
            <PrimarySelect<MedicalVisitModel>
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
            <PrimaryInput<MedicalVisitModel>
              label="Diagnosis"
              name="diagnosis"
              error={errors.diagnosis}
              register={register}
            />
            <PrimaryInput<MedicalVisitModel>
              label="physician Examination"
              name="physicianExamination"
              error={errors.physicianExamination}
              register={register}
            />
            <PrimaryInput<MedicalVisitModel>
              label="medication"
              name="medication"
              error={errors.medication}
              register={register}
            />
            <PrimaryInput<MedicalVisitModel>
              label="Heart Rate"
              name="heartRate"
              error={errors.heartRate}
              register={register}
            />
            <PrimaryInput<MedicalVisitModel>
              label="Respiratory Rate"
              name="respiratoryRate"
              error={errors.respiratoryRate}
              register={register}
            />
            <PrimaryInput<MedicalVisitModel>
              label="Blood Pressure"
              name="bloodPressure"
              error={errors.bloodPressure}
              register={register}
            />
            <PrimaryInput<MedicalVisitModel>
              label="Temperature"
              name="temperature"
              error={errors.temperature}
              register={register}
            />
            <PrimaryInput<MedicalVisitModel>
              label="Oxygen Saturation"
              name="oxygenSaturation"
              error={errors.oxygenSaturation}
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
