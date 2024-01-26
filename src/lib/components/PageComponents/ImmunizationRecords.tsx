import {
  Flex,
  TableContainer,
  Table,
  Thead,
  Tr,
  Tbody,
  Td,
  HStack,
  Box,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdEye } from 'react-icons/io';
import { MdDelete, MdEdit } from 'react-icons/md';
import { TableHead, TableData } from '../Bits/TableItems';
import ButtonComponent from '../Utils/MiniComponents/ButtonComponent';
import DeleteModal from '../Utils/MiniComponents/DeleteModal';
import SearchComponent from '../Utils/SearchComponent';
import { HealthService } from '~/services';
import { AddImmunizationRecord } from './AddImmunizationRecord';

const ImmunizationRecords = ({
  records,
  infants,
  vaccines,
  teams,
  id,
  isGuardian,
}: {
  records: any;
  infants: any;
  teams: any;
  id: any;
  vaccines: any;
  isGuardian: any;
}) => {
  console.log({ records });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: open, onOpen: opens, onClose: close } = useDisclosure();
  const { isOpen: opend, onOpen: opened, onClose: closed } = useDisclosure();
  const [data, setData] = useState<any>();
  const [isEdit, setIsEdit] = useState(false);
  const triggerDelete = (value: any) => {
    setData(value);
    onOpen();
  };
  const viewForm = (value: any) => {
    setData(value);
    opened();
  };
  const editForm = (value: any) => {
    onClose();
    setData(value);
    setIsEdit(true);
    opens();
  };
  const thead = ['Infant Name', 'Immunization Type', 'Date Administered'];
  const theadNoGuard = isGuardian ? thead : [...thead, 'Action'];

  return (
    <Box>
      <Flex justify="flex-start">
        {!isGuardian && (
          <ButtonComponent
            content="Add New Record"
            type="button"
            w={['full', 'fit-content']}
            onClick={() => {
              setIsEdit(false);
              opens();
            }}
            h="2.6rem"
            bg="black"
          />
        )}
      </Flex>

      <Box w="full" bgColor="white" borderRadius="6px" mt="1rem">
        {/* <Box py="1rem">
              <SearchComponent w="full" borderColor="gray.300" />
            </Box> */}
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                {theadNoGuard.map((x: string, i: any) => (
                  <TableHead title={x} key={i} />
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {records?.map((x: any) => (
                <Tr>
                  <TableData name={x?.infant?.fullName} />
                  <TableData
                    name={
                      vaccines.find((y: any) => y.id == x?.immunizationType)
                        ?.name
                    }
                  />
                  <TableData
                    name={dayjs(x?.dateAdministered).format('DD/MM/YYYY')}
                  />
                  {!isGuardian && (
                    <Td>
                      <HStack gap="1rem">
                        <IconButton
                          aria-label="Edit user"
                          icon={<MdEdit />}
                          cursor="pointer"
                          colorScheme="blue"
                          size="sm"
                          isRound={false}
                          onClick={() => editForm(x)}
                        />
                        <IconButton
                          aria-label="Delete user"
                          icon={<MdDelete />}
                          cursor="pointer"
                          colorScheme="red"
                          size="sm"
                          isRound={false}
                          onClick={() => triggerDelete(x)}
                        />
                      </HStack>
                    </Td>
                  )}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        {/* <Pagination data={undefined} /> */}
      </Box>
      {isOpen && (
        <DeleteModal
          isOpen={isOpen}
          onClose={onClose}
          id={data?.id}
          api={HealthService.postApiHealthGrowthDelete}
        />
      )}
      {open && (
        <AddImmunizationRecord
          isOpen={open}
          onClose={close}
          clinicalTeams={teams}
          data={data}
          setData={setData}
          isEdit={isEdit}
          id={id}
          vaccines={vaccines}
        />
      )}
    </Box>
  );
};

export default ImmunizationRecords;
