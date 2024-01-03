'use client';
import { Button, Text, useMultiStyleConfig, useTab } from '@chakra-ui/react';
import React from 'react';

export const CustomTab = React.forwardRef((props: any, ref: any) => {
  // 1. Reuse the `useTab` hook
  const tabProps = useTab({ ...props, ref: ref as any });
  const isSelected = !!tabProps['aria-selected'];

  // 2. Hook into the Tabs `size`, `variant`, props
  const styles = useMultiStyleConfig('Tabs', tabProps);

  return (
    <Button __css={styles.tab} {...tabProps}>
      {/* <Box as='span' mr='2'>
            {isSelected ? '😎' : '😐'}
          </Box> */}
      <Text
        fontWeight="700"
        fontSize=".9rem"
        color={isSelected ? 'black' : ' #A6ACBE'}
        _hover={{
          textDecor: 'none',
          color: 'brand.400',
        }}
        // borderBottom={isSelected ? '4px solid' : '0'}
        // borderColor="brand.100"
        mb="0"
        pb=".5rem"
        cursor="pointer"
      >
        {tabProps.children}
      </Text>
    </Button>
  );
});
