'use client';
import { Button, Flex, Icon, Square, Text } from '@chakra-ui/react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import useQueryParams from '../CustomHooks/useQueryParams';

function Pagination({ data }: { data: any }) {
  const { queryParams, setQueryParams } = useQueryParams();
  const totalPages = Math.ceil(
    (data?.size as number) / (data?.limit as unknown as number)
  );

  const currentPage = (((data?.limit as unknown as number) +
    (data?.offset as unknown as number)) /
    (data?.limit as unknown as number)) as number;
  const next = data?.next?.href;
  const previous = data?.previous?.href;

  const getOffset = (link: any) => {
    const offset = link!
      .split('?')
      ?.at(1)
      ?.split('&')
      ?.at(1)
      ?.split('=')
      ?.at(1) as string;
    return offset;
  };

  const paginate = (direction: 'next' | 'previous') => {
    let link = '';
    if (direction == 'previous' && previous != null) {
      link = getOffset(previous);
      setQueryParams({ offset: link });
    }
    if (direction == 'next' && next != null) {
      link = getOffset(next);
      setQueryParams({ offset: link });
    }
  };
  return (
    <Flex
      align="center"
      justify="center"
      p="1rem 2rem"
      w="100%"
      display={data?.value?.length == 0 ? 'none' : 'flex'}
    >
      <Flex align="center">
        <Button
          isDisabled={!previous}
          _hover={{ bgColor: 'brand.100' }}
          bgColor="brand.100"
          onClick={() => paginate('previous')}
          w="60px"
        >
          <Icon as={FaAngleLeft} color="white" />
        </Button>
        <Text fontSize="14px" px="1.5rem" color="black" whiteSpace="nowrap">
          {`${currentPage} of ${totalPages}`}
        </Text>
        <Button
          isDisabled={!next}
          _hover={{ bgColor: 'brand.100' }}
          bgColor="brand.100"
          onClick={() => paginate('next')}
          w="60px"
        >
          <Icon as={FaAngleRight} color="white" />
        </Button>
      </Flex>

      {/* <Text fontSize="14px" color="black" ml="1rem" whiteSpace="nowrap">
        {`${data.size || 0} items`}
      </Text> */}
    </Flex>
  );
}

export default Pagination;
