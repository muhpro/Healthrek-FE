'use client';
import { Box, Flex, Image, VStack, Text, Circle, Icon } from '@chakra-ui/react';
import { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import AdminMenu from './AdminMenu';
import Logout from './Logout';
import { MdDashboard } from 'react-icons/md';
import { FaChild, FaRegPaste, FaUsers } from 'react-icons/fa6';
import { useCookies } from 'next-client-cookies';

function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const cookies = useCookies();
  const adminCookies = cookies.get('admin') as string;
  const admin = adminCookies && JSON.parse(adminCookies);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const [opened, setOpened] = useState(true);
  const openMobileMenu = () => {
    setOpened(!opened);
  };
  // console.log({ admin });
  return (
    <Box
      w={['80%', '16%']}
      pos="fixed"
      h="full"
      bgColor="brand.100"
      zIndex={'102'}
      borderRadius="8px 4px 22px rgba(0, 0, 0, 0.2)"
      transition="all .3s ease-in-out"
      left={[opened ? '-100%' : '0', 'unset']}
    >
      <Flex w="106px" m="1.5rem 0 2.5rem 2rem">
        <Image src="/assets/logob.png" w="auto" />
      </Flex>
      <Circle
        size="1.5rem"
        top="10%"
        bg="black"
        pos="absolute"
        right={opened ? '-34%' : '-3.5%'}
        onClick={() => openMobileMenu()}
        display={['flex', 'none']}
        justifyContent="center"
        zIndex="7"
      >
        <Icon as={FiChevronRight} color="white" />
      </Circle>
      <VStack
        align="flex-start"
        onClick={() => openMobileMenu()}
        spacing="1rem"
        px="1rem"
        w="full"
      >
        {admin?.role == 'Super Admin' && (
          <AdminMenu text="Dashboard" url="/dashboard" icon={MdDashboard} />
        )}
        <AdminMenu
          text="Infant Records"
          url={
            admin?.role == 'Guardian'
              ? `/infant-records/${admin?.infantId}`
              : '/infant-records'
          }
          icon={FaChild}
        />
        {/* <AdminMenu text="Diagnosis" url="/diagnosis" icon={FaRegPaste} /> */}
        {admin?.role == 'Super Admin' && (
          <AdminMenu text="Users" url="/users" icon={FaUsers} />
        )}
        <Logout />
      </VStack>
    </Box>
  );
}

export default SideNav;
