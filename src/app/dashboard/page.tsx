import React from 'react';
import Dashboard from '~/lib/components/PageComponents/Dashboard';
import { withPageAuth } from '~/lib/components/Utils/withPageAuth';
import { UserService } from '~/services';

async function getData() {
  try {
    const result = await UserService.getApiUserDashboard();
    if (result.success) {
      return result.data;
    }
    return [];
  } catch (error) {
    console.log({ error });
  }
}
const page = withPageAuth(async () => {
  const data = await getData();
  return <Dashboard data={data} />;
});

export default page;
