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
import toast from 'react-hot-toast';

function DeleteModal({
  isOpen,
  onClose,
  api,
  id,
}: {
  isOpen: boolean;
  onClose: any;
  api: any;
  id: any;
}) {
  const [loading, setLoading] = useState({ id: '' });
  const router = useRouter();
  const cookies = useCookies();

  const deleteRecord = async (value: any, api: any) => {
    setLoading({ id: value });
    try {
      const res = await api();
      if (res.success) {
        setLoading({ id: '' });
        router.refresh();
        toast.success('Action Successful');
        return;
      }
    } catch (error: any) {
      setLoading({ id: '' });
      toast.error(error?.message || error?.body?.message);
    }
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
                onClick={() => deleteRecord(id, api)}
                isLoading={loading.id == id}
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
