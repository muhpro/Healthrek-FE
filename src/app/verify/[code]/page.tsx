import React from 'react';
import VerifyUser from '~/lib/components/Utils/Authentications/VerifyUser';
import { OpenAPI, UserService } from '~/services';

async function getData(code: string) {
  // OpenAPI.BASE = process.env.NEXT_PUBLIC_API_BASEURL as string;
  // const result = await UserService.postApiUserConfirmEmail({ token: code });
  // if (result.success) {
  //   return result;
  // }
  // throw new Error('Failed to fetch data');
}

const page = async ({ params: { code } }: { params: { code: string } }) => {
  const data = await getData(code);

  return <VerifyUser data={data} />;
};

export default page;
