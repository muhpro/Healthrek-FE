import { Text } from '@chakra-ui/react';
import React from 'react';
import { IMainHeader } from '../../Schemas';
import parse from 'html-react-parser';

export const MainHeader = ({
  size = ['1.155rem', '3rem'],
  text,
  align = 'center',
  color = 'brand.300',
  w = 'full',
  fw = '600',
  lh = ['normal', '4.25rem'],
  ls = ['0', '-2px'],
}: IMainHeader) => {
  return (
    <Text
      fontSize={size}
      fontWeight={fw}
      letterSpacing={ls}
      lineHeight={lh}
      textAlign={align}
      color={color}
      w={w}
      wordBreak="break-word"
      mb="0"
    >
      {parse(text)}
    </Text>
  );
};
