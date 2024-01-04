'use client';
import { Box, Flex, VStack, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { InfoWrapper } from '../../Utils/MiniComponents/InfoWrapper';
import toast from 'react-hot-toast';
import { UserService } from '~/services';
import { useState } from 'react';

interface ProfileType {
  user: any | undefined;
}

function Profile({ user }: ProfileType) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const deactivateAdmin = async (isActive: boolean) => {
    setIsLoading(true);
    try {
      const res = await UserService.postApiUserToggleActive({
        isActive,
        userId: user?.id,
      });
      if (res.success) {
        setIsLoading(false);
        toast.success('Action Successful');
        router.refresh();
        return;
      }
    } catch (error: any) {
      setIsLoading(false);
      toast.error(error?.message || error?.body?.message);
    }
  };

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
          border="2px solid"
          borderColor="brand.100"
          color="brand.100"
          borderRadius="4px"
          h="2.8rem"
          px="3rem"
          isLoading={isLoading}
          onClick={() => deactivateAdmin(!user?.isActive)}
        >
          {user?.isActive ? 'Deactivate' : 'Activate'} Admin
        </Button>
      </VStack>
    </Flex>
  );
}

export default Profile;
