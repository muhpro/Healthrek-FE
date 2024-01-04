import { Text, Circle, Flex, Image, Icon } from '@chakra-ui/react';
import { useCookies } from 'next-client-cookies';
import { usePathname, useRouter } from 'next/navigation';
import { FaUserTie } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';

export default function TopNav() {
  const router = useRouter();
  const pathname = usePathname();
  const cookies = useCookies();
  const adminCookies = cookies.get('admin') as string;
  const admin = adminCookies && JSON.parse(adminCookies);
  function isAlphanumeric(str: any) {
    return /^[a-zA-Z0-9\s]+$/.test(str) && /\d/.test(str);
  }
  const pageTitle = pathname.split('/')?.at(-1)?.replaceAll('-', ' ');

  return (
    <Flex
      align="center"
      h="4.5rem"
      bg="white"
      w="full"
      px={7}
      justifyContent="space-between"
      position="sticky"
      top="0"
      zIndex="100"
    >
      <Text fontSize="22px" fontWeight="bold" textTransform="capitalize">
        {isAlphanumeric(pageTitle) ? 'User Record' : pageTitle}
      </Text>
      <Flex align="center">
        <Text fontWeight="600" fontSize="1rem" pr=".8rem">
          {`Hi, ${admin ? admin?.fullName.split(' ').at(0) : 'User'}`}
        </Text>
        <Circle
          size="45px"
          overflow="hidden"
          bg="trnasparent"
          border="3px solid black"
        >
          {/* <Image src="" w="full" h="full" objectFit="cover" /> */}
          <Icon as={FaUserTie} fontSize="1.5rem" />
        </Circle>
        {/* <Icon as={IoIosArrowDown} ml=".8rem" /> */}
      </Flex>
    </Flex>
  );
}
