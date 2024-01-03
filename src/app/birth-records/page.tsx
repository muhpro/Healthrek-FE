import React from 'react';
import { BirthRecords } from '~/lib/components/PageComponents/BirthRecords';
import { withPageAuth } from '~/lib/components/Utils/withPageAuth';

const page = withPageAuth(async () => {
  return <BirthRecords />;
});

export default page;
