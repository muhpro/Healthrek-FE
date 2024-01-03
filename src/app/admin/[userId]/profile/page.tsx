import React from 'react';
import Profile from '~/lib/components/PageComponents/UsersTab/Profile';
import { UserWrapper } from '~/lib/components/PageComponents/UsersTab/UserWrapper';
import { withPageAuth } from '~/lib/components/Utils/withPageAuth';

async function getData(offset: number, limit: number, userId: string) {
  // try {
  //   const result = await AdminService.listAdminUsers({ offset, limit });
  //   const user = await AdminService.getUserById({
  //     userId,
  //   });
  //   if (result.status && user.status) {
  //     return {
  //       allUsers: result.data,
  //       singleUser: user.data,
  //     };
  //   }
  //   return { allUsers: [], singleUser: [] };
  // } catch (error) {
  //   console.log({ error });
  // }
}

const page = withPageAuth(async ({ searchParams, params }: any) => {
  const { offset, limit } = searchParams;
  const { userId } = params;
  // const data = await getData(offset || 0, limit || 10, userId);
  return (
    <UserWrapper
      allUsers={[]}
      userId={userId}
      currentTab={'profile'}
      singleUser={null}
      tabs={['profile', 'permissions', 'add-admin']}
      route="users"
    >
      <Profile user={undefined as any} />
    </UserWrapper>
  );
});

export default page;
