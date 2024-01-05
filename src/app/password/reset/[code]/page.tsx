import React from 'react';
import CompleteReset from '~/lib/components/Utils/Authentications/CompleteReset';

const page = ({ params: { code } }: { params: { code: string } }) => {
  return <CompleteReset code={code} />;
};

export default page;
