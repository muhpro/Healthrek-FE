import { VStack, Circle, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

export const NoData = ({ isUser }: { isUser?: boolean }) => {
  return (
    <VStack my="2rem">
      <Circle size={{ base: '16rem', lg: '20rem' }} bgColor="gray.100">
        <Icon
          as={MdOutlineCancel}
          fontSize={{ base: '10rem', lg: '12rem' }}
          color="gray.500"
        />
      </Circle>
      <VStack justify="center">
        <Text
          mb="0"
          color="gray.500"
          fontSize={{ base: '1.7rem', lg: '2rem' }}
          textAlign="center"
        >
          Sorry, there's no data yet
        </Text>
        <Text
          mb="0"
          color="gray.400"
          fontSize="1rem"
          w="80%"
          textAlign="center"
        >
          {isUser
            ? `You don't have an investment yet, please check back later or add one now`
            : `We are constantly updating our investment bank to ensure you get what you want, please check back later`}
        </Text>
      </VStack>
    </VStack>
  );
};
