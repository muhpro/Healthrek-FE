import { Th, Td } from '@chakra-ui/react';

export function TableHead({ title }: { title: string }) {
  return (
    <Th
      pl="1rem"
      fontSize="14px"
      fontWeight="700"
      color="black"
      textTransform="capitalize"
      fontFamily="body"
    >
      {title}
    </Th>
  );
}

export function TableData({
  name,
}: {
  name: string | undefined | null | number;
}) {
  return (
    <Td
      fontSize="14px"
      fontWeight="500"
      color="black"
      pl="1rem"
      textTransform="capitalize"
      cursor="pointer"
    >
      {name}
    </Td>
  );
}
