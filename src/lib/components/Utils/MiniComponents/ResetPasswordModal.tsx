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
import Link from 'next/link';
import { useRef } from 'react';
function ResetPasswordModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: any;
}) {
  const yesRef = useRef(null);
  return (
    <Modal
      motionPreset="slideInBottom"
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      closeOnOverlayClick={false}
      initialFocusRef={yesRef}
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
            Change Password
          </Text>
        </ModalHeader>
        {/* <ModalCloseButton /> */}
        <ModalBody>
          <Box px={5}>
            <Text>
              To ensure your account is secured against unauthorized user, we
              advise you change your password now. <br /> Do you want to do
              change your password now?
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
                Do it later!
              </Button>
              <Link passHref href="/password/reset">
                <Button
                  w="full"
                  height="3rem"
                  bgColor="brand.100"
                  color="white"
                  ref={yesRef}
                >
                  Yes, Change now!
                </Button>
              </Link>
            </HStack>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
export default ResetPasswordModal;
