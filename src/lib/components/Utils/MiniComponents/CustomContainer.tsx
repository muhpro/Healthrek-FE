import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export const CustomContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box w="90%" mx="auto">
      {children}
    </Box>
  );
};
