import { permanentRedirect } from 'next/navigation';
import React from 'react';

const page = () => {
  permanentRedirect('/login');
  return;
};

export default page;
