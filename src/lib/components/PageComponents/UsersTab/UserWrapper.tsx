'use client';
import { Box, HStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import UserSideBar from './UserSideBar';
import UserContent from './UserContent';

export const UserWrapper = ({
  allUsers,
  userId,
  children,
  currentTab,
  singleUser,
  searchable,
  tabs,
  route,
}: any) => {
  const [openBar, setOpenBar] = useState(true);
  return (
    <HStack
      spacing="1rem"
      h="auto"
      alignItems="flex-start"
      flexDir={['column', 'row']}
    >
      <UserSideBar
        allUsers={allUsers}
        userId={userId}
        searchable={searchable}
        setOpenBar={setOpenBar}
        openBar={openBar}
      />
      <Box w={['full', '80%']} bgColor="white" p="1.5rem" minH="90vh">
        <UserContent
          userProfile={singleUser}
          currentTab={currentTab}
          tabs={tabs}
          route={route}
        />
        {children}
      </Box>
    </HStack>
  );
};
