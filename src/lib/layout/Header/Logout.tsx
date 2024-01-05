import { HStack, Icon, Text, useDisclosure } from '@chakra-ui/react';
import { FaSignOutAlt } from 'react-icons/fa';
import LogoutPrompt from './LogoutPrompt';

function Logout() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <HStack
        fontSize="1rem"
        color="white"
        pl="1rem"
        cursor="pointer"
        w="100%"
        _hover={{ color: 'brand.200', textDecoration: 'unset' }}
        _focus={{ boxShadow: '0' }}
        onClick={onOpen}
        mt="1rem !important"
      >
        <Icon as={FaSignOutAlt} />
        <Text>Logout</Text>
      </HStack>
      <LogoutPrompt
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

export default Logout;
