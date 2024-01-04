'use client';
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import ButtonComponent from '../Utils/MiniComponents/ButtonComponent';
import { TableData, TableHead } from '../Bits/TableItems';
import dayjs from 'dayjs';
import { MdDelete, MdEdit } from 'react-icons/md';
import DeleteModal from '../Utils/MiniComponents/DeleteModal';
import SearchComponent from '../Utils/SearchComponent';
import Pagination from '../Utils/MiniComponents/Pagination';
import { IoMdEye } from 'react-icons/io';

export const BirthRecords = ({ records }: { records: any }) => {
  const thead = [
    'First Name',
    'Last Name',
    'Gender',
    'DOB',
    'Mode of Delivery',
    'Gestation Week',
    'Action',
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState<any>();
  const triggerDelete = (value: any) => {
    setData(value);
    onOpen();
  };
  console.log({ records });

  return (
    <Box>
      <Flex>
        <Link passHref href="/infant-records/add-infant-record">
          <ButtonComponent
            content="Add New Record"
            type="button"
            w={['full', 'fit-content']}
          />
        </Link>
      </Flex>

      <Box w="full" p="1rem" bgColor="white" borderRadius="6px" mt="1.5rem">
        <Box py="1rem">
          <SearchComponent w="full" borderColor="gray.300" />
        </Box>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                {thead.map((x: string, i: any) => (
                  <TableHead title={x} key={i} />
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {records?.map((x: any) => (
                <Tr>
                  <TableData name={x?.firstName} />
                  <TableData name={x?.lastName} />
                  <TableData name={x?.gender} />
                  <TableData
                    name={dayjs(x?.dateOfBirth).format('DD/MM/YYYY')}
                  />
                  <TableData name={x?.modeOfDelivery} />
                  <TableData name={x?.gestationWeek} />
                  {/* <TableData name={x?.guardian?.city} /> */}
                  <Td>
                    <HStack gap="1rem" ml="-1rem">
                      <Link passHref href={`/infant-records/${x.id}`}>
                        <IconButton
                          aria-label="View user"
                          icon={<IoMdEye />}
                          cursor="pointer"
                          colorScheme="blackAlpha"
                          size="sm"
                          isRound={false}
                        />
                      </Link>
                      <Link
                        passHref
                        href={`/infant-records/${x.id}/edit-infant-record`}
                      >
                        <IconButton
                          aria-label="Edit user"
                          icon={<MdEdit />}
                          cursor="pointer"
                          colorScheme="brand"
                          size="sm"
                          isRound={false}
                          // onClick={() => triggerDelete(x)}
                        />
                      </Link>
                    </HStack>
                  </Td>
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
          api={null}
        />
      )}
    </Box>
  );
};
