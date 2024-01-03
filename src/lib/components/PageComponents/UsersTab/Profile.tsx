'use client';
import { Box, Flex, VStack, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { InfoWrapper } from '../../Utils/MiniComponents/InfoWrapper';

interface ProfileType {
  user: any | undefined;
}

function Profile({ user }: ProfileType) {
  const router = useRouter();

  return (
    <Flex justify="space-between" mt="2rem" pr="5rem">
      <VStack spacing="1rem" alignItems="flex-start">
        <Box>
          <InfoWrapper title="First Name" value={user?.firstName} />
        </Box>
        <Box>
          <InfoWrapper title="Surname" value={user?.lastName} />
        </Box>
        <Box>
          <InfoWrapper title="Email" value={user?.email} />
        </Box>
        <Box>
          <InfoWrapper title="User Role" value={user?.role} />
        </Box>
        {user?.role == 'Clinical team' && (
          <Box>
            <InfoWrapper
              title="Clinical Team Type"
              value={user?.clinicalTeamType}
            />
          </Box>
        )}
        <Button
          variant="outline"
          border="2px solid black"
          color="black"
          borderRadius="4px"
          h="2.8rem"
          px="3rem"
        >
          Deactivate Admin
        </Button>
      </VStack>
    </Flex>
  );
}

export default Profile;
