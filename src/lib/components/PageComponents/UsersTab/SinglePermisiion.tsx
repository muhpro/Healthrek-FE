import { Text, Flex, Switch } from '@chakra-ui/react';

function SinglePermission({ action }: { action: string }) {
  return (
    <Flex
      w="full"
      h="2rem"
      px="1rem"
      justify="space-between"
      align="center"
      textTransform="capitalize"
      _odd={{ bgColor: 'rgba(248,249,250,1)' }}
    >
      <Text fontSize="14px" fontWeight="medium" color="rgba(0,0,0,1)">
        {action}
      </Text>
      <Switch colorScheme="brand" defaultChecked size="sm" />
    </Flex>
  );
}

export default SinglePermission;
