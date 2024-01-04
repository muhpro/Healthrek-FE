import React from 'react';
import AddNewAdmin from '~/lib/components/PageComponents/UsersTab/AddNewAdmin';
import { UserWrapper } from '~/lib/components/PageComponents/UsersTab/UserWrapper';
import { withPageAuth } from '~/lib/components/Utils/withPageAuth';
import { UserService } from '~/services';

async function getData(
  offset: number,
  limit: number,
  userId: string,
  role: string,
  search: string
) {
  try {
    const result = await UserService.getApiUserListUsers({ role, search });
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
  const { offset, limit, role, search } = searchParams;
  const { userId } = params;
  const data = await getData(offset || 0, limit || 10, userId, role, search);
  return (
    <UserWrapper
      allUsers={data?.allUsers}
      userId={userId}
      currentTab={'add-admin'}
      singleUser={data?.singleUser}
      tabs={['profile', 'permissions', 'add-admin']}
      route="users"
      searchable
    >
      <AddNewAdmin />
    </UserWrapper>
  );
});

export default page;
