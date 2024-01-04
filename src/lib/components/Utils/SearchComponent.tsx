import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Icon,
  Tooltip,
} from '@chakra-ui/react';
import React, { SetStateAction, useState } from 'react';
import { BsSearch, BsX } from 'react-icons/bs';
import useQueryParams from '../Utils/CustomHooks/useQueryParams';
import { useDebouncedCallback } from 'use-debounce';

interface SearchProps {
  border?: boolean;
  w?: any;
  borderColor?: any;
}
function SearchComponent({
  border = true,
  w = '25%',
  borderColor,
}: SearchProps) {
  const { queryParams, setQueryParams } = useQueryParams();
  const [searchTerm, setSearchTerm] = useState<any>(queryParams.get('search'));
  // const getSearchedResult = async () => {
  //   setQueryParams({ search: searchTerm });
  // };
  const debounced = useDebouncedCallback((search: any) => {
    setSearchTerm(search);
    setQueryParams({ search: searchTerm });
  }, 500);
  // const handleKeyPress = (e: any) => {
  //   if (e.key === 'Enter') {
  //     getSearchedResult();
  //   }
  // };
  const clearSearch = () => {
    setSearchTerm('');
    setQueryParams({ search: '' });
  };
  return (
    <InputGroup w={w}>
      <InputLeftElement
        h="42px"
        w="42px"
        children={<BsSearch color="rgba(0, 0, 0, 0.4)" />}
      />
      <Tooltip label="Search using name" hasArrow placement="auto-start">
        <Input
          type="text"
          placeholder="Search"
          height="2.5rem"
          // onChange={(e: { target: { value: SetStateAction<string> } }) =>
          //   setSearchTerm(e.target.value)
          // }
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            debounced(e.target.value)
          }
          value={searchTerm}
          _placeholder={{
            fontSize: '14px',
            fontWeight: 600,
          }}
          border={border ? '2px solid' : 'none'}
          borderColor={borderColor}
          borderRadius="4px"
          boxShadow="0"
          fontSize="14px"
          fontWeight="medium"
          padding="0 3rem"
          color="black !important"
          _focus={{
            borderColor: 'unset',
            border: '0',
          }}
        />
      </Tooltip>
      {searchTerm !== '' && (
        <InputRightElement h="42px" w="42px" onClick={clearSearch}>
          <Icon as={BsX} />
        </InputRightElement>
      )}
    </InputGroup>
  );
}

export default SearchComponent;
