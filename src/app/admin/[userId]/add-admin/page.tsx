import React from 'react';
import AddNewAdmin from '~/lib/components/PageComponents/UsersTab/AddNewAdmin';
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
  //   return { allUsers: [], singleUser: [], application: [] };
  // } catch (error) {
  //   console.log({ error });
  // }
}

const page = withPageAuth(async ({ searchParams, params }: any) => {
  const { offset, limit } = searchParams;
  const { userId } = params;
  const data = await getData(offset || 0, limit || 10, userId);
  return (
    <UserWrapper
      allUsers={[]}
      userId={userId}
      currentTab={'add-admin'}
      singleUser={null}
      tabs={['profile', 'permissions', 'add-admin']}
      route="admin"
    >
      <AddNewAdmin />
    </UserWrapper>
  );
});

export default page;
