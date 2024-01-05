import React from 'react';
import { AddBirthRecord } from '~/lib/components/PageComponents/AddBirthRecord';
import { BirthRecords } from '~/lib/components/PageComponents/BirthRecords';
import { withPageAuth } from '~/lib/components/Utils/withPageAuth';
import { UserService } from '~/services';

async function getData(id: string) {
  try {
    const result = await UserService.getApiUserInfants1({ id });
    if (result.success) {
      return result.data;
    }
    return [];
  } catch (error) {
    console.log({ error });
  }
}
const page = withPageAuth(async ({ params }: any) => {
  const { id } = params;
  const data = await getData(id);
  return <AddBirthRecord data={data} isEdit />;
});

export default page;
