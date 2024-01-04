import React from 'react';
import { BirthRecords } from '~/lib/components/PageComponents/BirthRecords';
import { withPageAuth } from '~/lib/components/Utils/withPageAuth';
import { UserService } from '~/services';

async function getData(offset: number, limit: number, search: string) {
  try {
    const result = await UserService.getApiUserInfants({ search });
    if (result.success) {
      return result.data;
    }
    return [];
  } catch (error) {
    console.log({ error });
  }
}
const page = withPageAuth(async ({ searchParams, params }: any) => {
  const { offset, limit, search } = searchParams;
  const data = await getData(offset || 0, limit || 10, search);
  return <BirthRecords records={data} />;
});

export default page;
