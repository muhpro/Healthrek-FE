import {
  Box,
  Flex,
  Grid,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Text,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';
import ButtonComponent from '../Utils/MiniComponents/ButtonComponent';
import { InfoWrapper } from '../Utils/MiniComponents/InfoWrapper';
import dayjs from 'dayjs';

export const ViewMedicalModal = ({
  isOpen,
  onClose,
  data,
  editForm,
}: {
  isOpen: any;
  onClose: any;
  data: any;
  editForm: any;
}) => {
  return (
    <Modal
      motionPreset="slideInBottom"
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent
        py={5}
        borderRadius="10px"
        w={['88%', '50%']}
        overflow="hidden"
        maxH="100vh"
        maxW="100%"
        mt="0"
        mb="0"
        boxShadow="0 2px 13px 0 rgba(0,0,0,0.17)"
      >
        <ModalHeader>
          <Flex justify="space-between" align="center">
            <Text
              color="black"
              fontSize="1.1rem"
              textAlign="left"
              fontWeight="semibold"
              px={5}
            >
              View Record
            </Text>
            <ButtonComponent
              content="Edit Record"
              type="button"
              w={['full', 'fit-content']}
              onClick={() => {
                onClose();
                editForm(data);
              }}
              h="2.6rem"
            />
          </Flex>
        </ModalHeader>
        {/* <ModalCloseButton /> */}
        <ModalBody>
          <Box w="full" px="1.5rem">
            <Grid
              templateColumns={['1fr', 'repeat(3, 1fr)']}
              gap="1.5rem"
              w="full"
            >
              <InfoWrapper
                title="Clinical Team"
                value={data?.clinicalTeam.fullName}
              />
              <InfoWrapper
                title="Physician Examination"
                value={data?.physicianExamination}
              />
              <InfoWrapper title="Medication" value={data?.medication} />
              <InfoWrapper title="Heart Rate" value={data?.heartRate} />
              <InfoWrapper title="Diagnosis" value={data?.diagnosis} />
              <InfoWrapper
                title="Date"
                value={dayjs(data?.date).format('DD/MM/YYYY')}
              />
              <InfoWrapper title="Complaints" value={data?.complaint} />
              <InfoWrapper
                title="Respiratory Rate"
                value={data?.respiratoryRate}
              />
              <InfoWrapper title="Blood Pressure" value={data?.bloodPressure} />
              <InfoWrapper title="Temperature" value={data?.temperature} />
              <InfoWrapper
                title="Oxygen Saturation"
                value={data?.oxygenSaturation}
              />
            </Grid>
            <Box mt="2rem">
              <ButtonComponent
                content="Close"
                type="button"
                w={['full', 'full']}
                onClick={() => onClose()}
              />
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
