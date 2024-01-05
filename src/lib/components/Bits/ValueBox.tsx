import { VStack, Text } from '@chakra-ui/react';
import React from 'react';

export default function ValueBox({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <VStack
      h="2rem"
      w="full"
      bgColor="rgba(248,249,250,1)"
      borderRadius="2px"
      justify="center"
      gap="0"
    >
      <Text
        fontSize="6px"
        fontWeight="medium"
        textAlign="center"
        color=" rgba(0,0,0,.5)"
      >
        {title}
      </Text>
      <Text
        as="span"
        mt="0 !important"
        fontSize="14px"
        fontWeight="bold"
        textAlign="center"
      >
        {value}
      </Text>
    </VStack>
  );
}
