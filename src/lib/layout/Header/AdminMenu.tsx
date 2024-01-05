import { HStack, Icon, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

type CardsType = {
  text: string;
  url: string;
  icon?: any;
};
function AdminMenu({ text, url, icon }: CardsType) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(url);
  return (
    <NextLink href={url} passHref style={{width: '100%'}}>
      <HStack
        fontSize="1rem"
        color={isActive ? 'brand.100' : 'white'}
        backgroundColor={isActive ? 'white' : 'transparent'}
        boxShadow={isActive ?'md' : 'unset'}
        borderRadius='5px'
        px="1rem"
        py='.7rem'
        cursor="pointer"
        w="100%"
        _hover={{ color: 'brand.200', textDecoration: 'unset' }}
        _focus={{ boxShadow: '0' }}
      >
        <Icon as={icon} />
        <Text>{text}</Text>
      </HStack>
    </NextLink>
  );
}

export default AdminMenu;
