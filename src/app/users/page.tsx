import { permanentRedirect } from 'next/navigation';
import React from 'react';
import { withPageAuth } from '~/lib/components/Utils/withPageAuth';
import { UserService } from '~/services';

async function getData(offset: number, limit: number) {
  try {
    const result = await UserService.getApiUserListUsers();
    if (result.success) {
      return result.data;
    }
    return [];
  } catch (error) {
    console.log({ error });
  }
}
const page = withPageAuth(async ({ searchParams, params }: any) => {
  const { offset, limit } = searchParams;
  const data = await getData(offset || 0, limit || 10);
  const firstUser = data?.at(0);
  const { userId } = params;
  if (!userId) {
    permanentRedirect(`/users/${firstUser?.id}/profile`);
  }
  return <div>page</div>;
});

export default page;
