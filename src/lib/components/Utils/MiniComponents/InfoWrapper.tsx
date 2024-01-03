import { Text, VStack } from '@chakra-ui/react';
import React from 'react';

export const InfoWrapper = ({
  title,
  value,
}: {
  title: string;
  value: any;
}) => {
  return (
    <VStack align="flex-start" gap="0">
      <Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
        {title}
      </Text>
      <Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
        {value}
      </Text>
    </VStack>
  );
};
