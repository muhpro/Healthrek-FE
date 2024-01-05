import { Box, Flex, Text } from '@chakra-ui/react';

export interface cardType {
  label: string;
  increase: string;
  value: string | number | undefined;
}
function MiniCards({ label, increase, value }: cardType) {
  return (
    <Box
      bgColor="white"
      fontWeight="semibold"
      borderRadius="6px"
      boxShadow="0 2px 2px 0 rgba(0,0,0,0.12)"
      h="5rem"
      padding="1rem"
    >
      <Flex justifyContent="space-between" mb=".2rem" alignItems="center">
        <Text fontSize="12px">{label}</Text>
        {/* <Text color="#18C13A" fontSize="8px">
          {increase}
        </Text> */}
      </Flex>
      <Text fontSize="20px">{value}</Text>
    </Box>
  );
}

export default MiniCards;
