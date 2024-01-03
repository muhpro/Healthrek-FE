import { Box, HStack, VStack, Image } from '@chakra-ui/react';
import React from 'react';
import { MainHeader } from './MainHeader';
import { MainSubTitle } from './MainSubTitle';
import { IContentDisplay } from '../../Schemas';
import { LiaAngleRightSolid } from 'react-icons/lia';

export const ContentDisplay = ({
  rtl,
  img,
  text,
  sub,
  btn,
  onClick,
  gap = ['1rem', '4.5rem'],
  w = 'full',
  social,
}: IContentDisplay) => {
  return (
    <HStack
      justify={['space-between', 'space-between']}
      gap={gap}
      flexDir={[rtl ? 'column-reverse' : 'column', 'row']}
      bgColor="#F8F6F5"
      p={['1.5rem', '5rem 5.75rem']}
      borderRadius="10px"
    >
      <HStack w={['100%', '40%']} order={rtl ? 1 : 0}>
        {img && (
          <Box w="full">
            <Image src={img} alt={img} w={w} />
          </Box>
        )}
        <Box w="full" display={['block', 'none']}>
          <MainHeader text={text} align={['left', 'left']} />
        </Box>
      </HStack>
      <VStack
        w={['full', '65%']}
        gap={['12px', '12px']}
        align={['center', 'flex-start']}
        order={rtl ? 0 : 1}
      >
        <Box w="full" display={['none', 'block']}>
          <MainHeader text={text} align={['center', 'left']} />
        </Box>
        <MainSubTitle text={sub} align={['left', 'left']} />
      </VStack>
    </HStack>
  );
};
