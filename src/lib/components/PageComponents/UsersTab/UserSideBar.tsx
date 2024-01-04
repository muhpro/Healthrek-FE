import { Box, Flex, Select, Text } from '@chakra-ui/react';
import React from 'react';
import Pagination from '../../Utils/MiniComponents/Pagination';
import useQueryParams from '../../Utils/CustomHooks/useQueryParams';
import { useRouter } from 'next/navigation';
import SearchComponent from '../../Utils/SearchComponent';

function UserSideBar({ userId, allUsers, searchable }: any) {
  const result = allUsers;
  const router = useRouter();
  const { queryParams, setQueryParams } = useQueryParams();
  function filterRole(value: any) {
    setQueryParams({ role: value });
  }
  return (
    <Box w="20%">
      <Box bgColor="white" h="90vh" position="relative">
        <Text fontSize=".8rem" fontWeight={600} p=".5rem .5rem 0">
          Filter User By Role
        </Text>
        <Select
          onChange={(e) => filterRole(e.target.value)}
          borderRadius="0"
          fontSize=".8rem"
        >
          {[
            { name: 'All', value: '' },
            { name: 'Super Admin', value: 'Super Admin' },
            { name: 'Clinical Team', value: 'Clinical Team' },
            { name: 'Guardian', value: 'Guardian' },
          ].map((x) => (
            <option value={x.value}>{x.name}</option>
          ))}
        </Select>
        {searchable && <SearchComponent border={false} w="full" />}
        <Box h="70vh">
          {result?.map((user: any, i: number) => {
            return (
              <Box
                onClick={() => {
                  router.push(`/users/${user.id}/profile?` + queryParams);
                }}
                key={user.id}
              >
                <Flex
                  borderTop="1px solid rgba(36,68,115,0.3)"
                  h="40px"
                  role="group"
                  cursor="pointer"
                  alignItems="center"
                  transition="all .2s ease"
                  _hover={{ bgColor: 'brand.100' }}
                  bgColor={user.id == userId ? 'brand.100' : 'unset'}
                >
                  <Text
                    color={user.id == userId ? 'white' : 'black'}
                    fontSize="14px"
                    textTransform="capitalize"
                    fontWeight="600"
                    pl="1.2rem"
                    _groupHover={{ color: 'white' }}
                  >
                    {user?.fullName}
                  </Text>
                </Flex>
              </Box>
            );
          })}
        </Box>
        {/* <Pagination data={allUsers} /> */}
      </Box>
    </Box>
  );
}

export default UserSideBar;
