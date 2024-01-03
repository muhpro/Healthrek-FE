import {
  Box,
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function DeleteModal({ isOpen, onClose }: { isOpen: boolean; onClose: any }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const cookies = useCookies();
  const handleLogout = () => {
    setLoading(true);
    cookies.remove('admin'), cookies.remove('token');
    router.push('/login');
  };
  return (
    <Modal
      motionPreset="slideInBottom"
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent
        py={5}
        borderRadius="10px"
        w={['88%', '50%']}
        overflow="hidden"
        maxH="100vh"
        mt="0"
        mb="0"
        boxShadow="0 2px 13px 0 rgba(0,0,0,0.17)"
      >
        <ModalHeader>
          <Text
            color="black"
            fontSize="1.1rem"
            textAlign="left"
            fontWeight="semibold"
            px={5}
          >
            Delete user
          </Text>
        </ModalHeader>
        {/* <ModalCloseButton /> */}
        <ModalBody>
          <Box px={5}>
            <Text>
              This action is not reversible, are you sure you want to continue?
            </Text>
            <HStack mt="3rem">
              <Button
                w="full"
                height="3rem"
                variant="outline"
                border="2px solid"
                borderColor="red.600"
                color="red.600"
                onClick={onClose}
                _hover={{
                  bgColor: 'red.600',
                  color: 'white',
                }}
              >
                No, thanks!
              </Button>
              <Button
                w="full"
                height="3rem"
                onClick={() => handleLogout()}
                isLoading={loading}
                bgColor="brand.100"
                color="white"
              >
                Yes, I'm sure
              </Button>
            </HStack>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
export default DeleteModal;
