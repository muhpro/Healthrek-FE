'use client';
import {
  Box,
  Flex,
  Stack,
  Image,
  useBoolean,
  Center,
  HStack,
  Text,
  Avatar,
} from '@chakra-ui/react';
import { usePathname, useRouter } from 'next/navigation';
import NextLink from 'next/link';
import { BsBorderWidth } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useCookies } from 'next-client-cookies';

interface NavProps {
  path: string;
  name: string;
  closeMenu?: () => void;
}

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const cookies = useCookies();
  const user = cookies.get('user');

  const logout = () => {
    cookies.remove('user');
    cookies.remove('token');
    router.push('/login');
  };
  const NavLink = ({ path, name, closeMenu }: NavProps) => {
    const getNavLinks = (name: string) => {
      if (pathname.startsWith(name)) return 'brand.100';
    };
    return (
      <NextLink href={path} passHref>
        <Text
          onClick={closeMenu}
          _hover={{ color: 'brand.100' }}
          cursor="pointer"
          fontWeight="bold"
          fontSize=".9rem"
          color={getNavLinks(path)}
        >
          {name}
        </Text>
      </NextLink>
    );
  };
  const DesktopView = ({ user }: { user: any }) => {
    return (
      <HStack
        w="full"
        justify="space-between"
        display={['none', 'flex']}
        fontSize={{ base: '.9rem', md: '.8rem', xl: '.9rem' }}
      >
        <HStack justify="flex-start" spacing={{ md: '16px', lg: '30px' }}>
          <NavLink name="Invest" path="/invest" />
          {/* <NavLink name="Projects" path="/buy" /> */}
          {user ? (
            <NavLink name="Profile" path="/profile" />
          ) : (
            // <NavLink name="About" path="/rent" />
            <></>
          )}
        </HStack>
        <Center>
          <NextLink href="/">
            <Image
              cursor="pointer"
              src="/assets/logo.png"
              alt="Ownland"
              w={['40']}
            />
          </NextLink>
        </Center>
        <HStack justify="flex-end" spacing={{ md: '10px', lg: '30px' }}>
          {user ? (
            // <LoggedIn closeMenu={function (): void {}} />
            <>
              <NavLink name="My Own" path="/my-own" />
              <Text
                onClick={logout}
                cursor="pointer"
                fontWeight="bold"
                fontSize=".9rem"
              >
                Logout
              </Text>
              <Avatar
                src=""
                name={user?.fullName}
                size="sm"
                bgColor="gray.200"
                cursor="pointer"
              />
            </>
          ) : (
            <>
              {/* <NavLink name="Contact Us" path="/my-rent/rent-relief" /> */}
              <NavLink name="Login" path="/login" />
              <NavLink name="Sign Up" path="/register" />
            </>
          )}
        </HStack>
      </HStack>
    );
  };

  const MobileView = ({ user }: { user: any }) => {
    const [isOpened, setIsOpened] = useBoolean();
    const closeMenu = () => {
      setIsOpened.off();
    };
    return (
      <Flex
        zIndex={50}
        w="full"
        justify="space-between"
        align="center"
        display={['flex', 'none']}
      >
        <Box zIndex={5}>
          <NextLink href="/">
            <Image
              cursor="pointer"
              src="/assets/logo.png"
              alt="Ownland"
              w={['32']}
            />
          </NextLink>
        </Box>
        <Box
          zIndex={5}
          display={['block', 'none']}
          onClick={setIsOpened.toggle}
        >
          <BsBorderWidth fontSize="1.5rem" />
        </Box>
        <Stack
          overflow="scroll"
          pb="5"
          fontSize=".9rem"
          pos={['fixed', 'unset']}
          bgColor={['white', 'unset']}
          width={['80%', 'auto']}
          left={isOpened ? '0' : '-100%'}
          top="0"
          height={['100vh', 'auto']}
          spacing={5}
          pt={['7rem', '0']}
          direction={['column']}
          pl={['2rem', 0]}
          zIndex="3"
          transition={['all .5s ease', 'unset']}
        >
          <NavLink closeMenu={closeMenu} name="Invest" path="/invest" />
          {/* <NavLink closeMenu={closeMenu} name="Projects" path="/buy" /> */}
          {user ? (
            <NavLink name="Profile" path="/profile" />
          ) : (
            <NavLink name="About" path="/rent" />
          )}

          {user ? (
            // <LoggedIn closeMenu={closeMenu} />
            <>
              <NavLink closeMenu={closeMenu} name="My Own" path="/my-own" />
              <Text
                onClick={logout}
                cursor="pointer"
                fontWeight="bold"
                fontSize=".9rem"
              >
                Logout
              </Text>
              <Avatar
                src=""
                name={user?.fullName}
                size="sm"
                bgColor="gray.200"
                cursor="pointer"
              />
            </>
          ) : (
            <>
              <NavLink closeMenu={closeMenu} name="Login" path="/login" />
              <NavLink closeMenu={closeMenu} name="Sign Up" path="/register" />
            </>
          )}
        </Stack>
      </Flex>
    );
  };

  return (
    <Box position="sticky" w="full" top="0" bg="white" zIndex="50" shadow="md">
      <Flex
        w="90%"
        mx="auto"
        bg="white"
        h="4.8rem"
        justifyContent="space-between"
        align="center"
        display={
          pathname === '/contact' || pathname === '/payment/validate'
            ? 'none'
            : 'flex'
        }
      >
        <DesktopView user={user} />
        <MobileView user={user} />
      </Flex>
    </Box>
  );
};
export default Header;
