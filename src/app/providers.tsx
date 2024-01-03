'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { useCookies } from 'next-client-cookies';

import { Chakra as ChakraProvider } from '~/lib/components/Chakra';
import { Next13ProgressBar } from 'next13-progressbar';
import { OpenAPI } from '~/services';
import { Toaster } from 'react-hot-toast';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const cookies = useCookies();
  OpenAPI.BASE =
    (process.env.NEXT_PUBLIC_API_BASEURL as string) ||
    'https://healthrekdb-22326.nodechef.com';
  OpenAPI.TOKEN = cookies.get('token') as string;
  return (
    <CacheProvider>
      <Toaster position="top-right" />
      <ChakraProvider>{children}</ChakraProvider>
      <Next13ProgressBar
        height="4px"
        color="#131313"
        options={{ showSpinner: false }}
        showOnShallow
      />
    </CacheProvider>
  );
};

export default Providers;
