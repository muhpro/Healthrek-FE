'use client';
import {
  Box,
  Flex,
  Grid,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { InfoWrapper } from '../Utils/MiniComponents/InfoWrapper';
import { CustomTab } from '../Utils/MiniComponents/CustomTab';
import MedicalRecords from './MedicalRecords';
import dayjs from 'dayjs';
import Link from 'next/link';
import ButtonComponent from '../Utils/MiniComponents/ButtonComponent';
import GrowthRecords from './GrowthRecords';
import ImmunizationRecords from './ImmunizationRecords';

export const ViewBirthRecord = ({
  records,
  id,
}: {
  records: any;
  id: string;
}) => {
  const userInfo = records?.userRecord;
  const userGuardian = records?.userRecord?.guardian;
  return (
    <Box>
      <Flex
        bgColor="white"
        borderRadius="8px"
        p="1rem"
        justifyContent="space-between"
        align="center"
      >
        <InfoWrapper title="First Name" value={userInfo?.firstName} />
        <InfoWrapper title="Last Name" value={userInfo?.lastName} />
        <InfoWrapper title="Gender" value={userInfo?.gender} />
        <Link passHref href={`/infant-records/${id}/edit-infant-record`}>
          <ButtonComponent
            content="Edit Record"
            type="button"
            w={['80%', 'fit-content']}
          />
        </Link>
      </Flex>
      <Flex w="full" gap="1.5rem" mt="1.5rem">
        <VStack w="25%" align="flex-start" gap="1.5rem">
          <Box bgColor="white" borderRadius="8px" p="1rem" w="full">
            <VStack align="flex-start" gap="1rem" w="full">
              <Text fontWeight={600} fontSize="1.1rem">
                Basic Information
              </Text>
              <InfoWrapper
                title="Date of Birth"
                value={dayjs(userInfo?.dateOfBirth).format('DD/MM/YYYY')}
              />
              <InfoWrapper
                title="Length of Birth"
                value={userInfo?.lengthOfBirth}
              />
              <InfoWrapper
                title="Mode of Delivery"
                value={userInfo?.modeOfDelivery}
              />
              <InfoWrapper
                title="Gestation Week"
                value={userInfo?.gestationWeek}
              />
              <InfoWrapper title="Registra role" value={userGuardian?.role} />
            </VStack>
          </Box>
          <Box bgColor="white" borderRadius="8px" p="1rem" w="full">
            <VStack align="flex-start" gap="1rem" w="full">
              <Text fontWeight={600} fontSize="1.1rem">
                Guardian Information
              </Text>
              <InfoWrapper title="First Name" value={userGuardian?.firstName} />
              <InfoWrapper title="Last Name" value={userGuardian?.lastName} />
              <InfoWrapper title="Email" value={userGuardian?.email} />
              <InfoWrapper title="Phone Number" value={userGuardian?.phone} />
              <InfoWrapper
                title="Alternate Phone Number"
                value={userGuardian?.alternatePhoneNumber}
              />
              <InfoWrapper
                title="Date of Birth"
                value={dayjs(userGuardian?.dateOfBirth).format('DD/MM/YYYY')}
              />
              <InfoWrapper title="Address" value={userGuardian?.address} />
              <InfoWrapper title="City" value={userGuardian?.city} />
              <InfoWrapper
                title="Guardian Type"
                value={userGuardian?.guardianType}
              />
            </VStack>
          </Box>
          <Box bgColor="white" borderRadius="8px" p="1rem" w="full">
            <VStack align="flex-start" gap="1rem" w="full">
              <Text fontWeight={600} fontSize="1.1rem">
                Next of Kin
              </Text>
              <InfoWrapper title="Name" value={userGuardian?.nextOfKinName} />
              <InfoWrapper title="Email" value={userGuardian?.nextOfKinEmail} />
              <InfoWrapper
                title="Phone Number"
                value={userGuardian?.nextOfKinPhoneNumber}
              />
              <InfoWrapper
                title="Address"
                value={userGuardian?.nextOfKinAddress}
              />
            </VStack>
          </Box>
        </VStack>
        <Box w="75%">
          <Tabs bgColor="white" borderRadius="8px" p="1rem" w="full">
            <TabList>
              <CustomTab>Medical Records</CustomTab>
              <CustomTab>Growth Records</CustomTab>
              <CustomTab>Immunization Records</CustomTab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <MedicalRecords
                  records={records?.medicals}
                  infants={records?.allInfants}
                  teams={records?.allTeams}
                  id={id}
                />
              </TabPanel>
              <TabPanel>
                <GrowthRecords
                  records={records?.growths}
                  infants={records?.allInfants}
                  teams={records?.allTeams}
                  id={id}
                />
              </TabPanel>
              <TabPanel>
                <ImmunizationRecords
                  records={records?.immunization}
                  infants={records?.allInfants}
                  teams={records?.allTeams}
                  id={id}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Box>
  );
};
