import React from 'react';
import Dashboard from '~/lib/components/PageComponents/Dashboard';
import { withPageAuth } from '~/lib/components/Utils/withPageAuth';

const page = withPageAuth(async () => {
  return <Dashboard data={undefined} />;
});

export default page;
