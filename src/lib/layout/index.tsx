'use client';

import { Box, Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import SideNav from './Header/SideNav';
import TopNav from './Header/TopNav';
import { usePathname } from 'next/navigation';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const hideSideAndTopNav = pathname.includes('/login');
  return (
    <Box margin="0 auto" w="full" transition="0.5s ease-out">
      {hideSideAndTopNav ? (
        <>{children}</>
      ) : (
        <Flex pos="relative" minH="100vh">
          <SideNav />
          <Box w={['full', '84%']} h="full" bg="#f4f8fb" as="main" ml="auto">
            <TopNav />
            <Box as="div" w="95%" mx="auto" minH="100vh" mt="1rem" mb="3rem">
              {children}
            </Box>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default Layout;
