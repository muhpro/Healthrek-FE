import { Flex, Circle, Text, Box } from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import PageTabs from '../../Utils/PageTabs';

function UserContent({
  currentTab,
  userProfile,
  tabs,
  route,
}: {
  currentTab: any;
  userProfile: any;
  tabs: string[];
  route: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const navigateTabs = (tabname: string) => {
    router.push(`/${route}/${userProfile.id}/${tabname}?${searchParams}`);
  };
  return (
    <>
      <Flex alignItems="center" fontWeight="bold">
        <Circle bgColor="brand.100" color="white" size="3rem" mr="1rem">
          {`${userProfile?.firstName?.charAt(0)}${userProfile?.lastName?.charAt(
            0
          )}`}
        </Circle>
        <Box>
          <Text fontSize="1.5rem">{userProfile?.fullName}</Text>
        </Box>
      </Flex>
      <Flex borderBottom="1px solid rgba(36,68,115,0.1)" mt="2rem">
        {tabs.map((x: string, i: number) => (
          <Box onClick={() => navigateTabs(x)}>
            <PageTabs tabname={x} currentTab={currentTab} />
          </Box>
        ))}
      </Flex>
    </>
  );
}

export default UserContent;
