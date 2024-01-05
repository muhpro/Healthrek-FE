import { Text } from '@chakra-ui/react';
import React from 'react';
import { IMainHeader } from '../../Schemas';

export const MainSubTitle = ({
  size = ['0.87rem', '27px'],
  text,
  align = 'center',
  color = 'black',
  w = 'full',
  lh = ['normal', '38px'],
  fw = 400,
}: IMainHeader) => {
  return (
    <Text
      fontSize={size}
      fontWeight={fw}
      letterSpacing="0"
      lineHeight={lh}
      textAlign={align}
      color={color}
      w={w}
    >
      {text}
    </Text>
  );
};
