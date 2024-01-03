import React from 'react';
import { AdminPermissions } from '~/lib/components/PageComponents/UsersTab/AdminPermissions';
import { UserWrapper } from '~/lib/components/PageComponents/UsersTab/UserWrapper';
import { IPageProps } from '~/lib/components/Schemas';
import { withPageAuth } from '~/lib/components/Utilities/withPageAuth';
import { AdminService } from '~/services';

async function getData(offset: number, limit: number, userId: string) {
  try {
    const result = await AdminService.listAdminUsers({ offset, limit });
    const user = await AdminService.getUserById({
      userId,
    });

    if (result.status && user.status) {
      return {
        allUsers: result.data,
        singleUser: user.data,
      };
    }
    return { allUsers: [], singleUser: [], application: [] };
  } catch (error) {
    console.log({ error });
  }
}

const page = withPageAuth(async ({ searchParams, params }: IPageProps) => {
  const { offset, limit } = searchParams;
  const { userId } = params;
  const data = await getData(offset || 0, limit || 10, userId);
  return (
    <UserWrapper
      allUsers={data?.allUsers}
      userId={userId}
      currentTab={'permissions'}
      singleUser={data?.singleUser}
      tabs={['profile', 'permissions', 'add-admin']}
      route="admin"
    >
      <AdminPermissions />
    </UserWrapper>
  );
});

export default page;
