import { Text } from '@chakra-ui/react';
import React from 'react';
import { IMainHeader } from '../../Schemas';
import parse from 'html-react-parser';

export const MainSubTitle = ({
  size = ['0.87rem', '1.5rem'],
  text,
  align = 'center',
  color = 'brand.300',
  w = 'full',
  lh = ['normal','43px'],
}: IMainHeader) => {
  return (
    <Text
      fontSize={size}
      fontWeight={400}
      letterSpacing="0"
      lineHeight={lh}
      textAlign={align}
      color={color}
      w={w}
    >
      {parse(text)}
    </Text>
  );
};
