import React from 'react';
import Profile from '~/lib/components/PageComponents/UsersTab/Profile';
import { UserWrapper } from '~/lib/components/PageComponents/UsersTab/UserWrapper';
import { withPageAuth } from '~/lib/components/Utils/withPageAuth';
import { UserService } from '~/services';

async function getData(offset: number, limit: number, userId: string) {
  try {
    const result = await UserService.getApiUserListUsers();
    const user = await UserService.getApiUser({
      id: userId,
    });
    if (result.success && user.success) {
      return {
        allUsers: result.data,
        singleUser: user.data,
      };
    }
    return { allUsers: [], singleUser: [] };
  } catch (error) {
    console.log({ error });
  }
}

const page = withPageAuth(async ({ searchParams, params }: any) => {
  const { offset, limit } = searchParams;
  const { userId } = params;
  const data = await getData(offset || 0, limit || 10, userId);
  return (
    <UserWrapper
      allUsers={data?.allUsers}
      userId={userId}
      currentTab={'profile'}
      singleUser={data?.singleUser}
      tabs={['profile', 'permissions', 'add-admin']}
      route="users"
    >
      <Profile user={data?.singleUser as any} />
    </UserWrapper>
  );
});

export default page;
