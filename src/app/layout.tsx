import type { Metadata } from 'next';
import { Suspense } from 'react';
import { cookies } from 'next/headers';

import Providers from '~/app/providers';
import Layout from '~/lib/layout';
import '~/lib/styles/globals.css';
import Loading from './loading';
import { ClientCookiesProvider } from '~/lib/components/Utils/Context/ClientCookiesProvider';

type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = 'Healthrek';


const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <link rel="icon" href="/assets/fav.png" sizes="32x32" />
      <body>
        <Suspense fallback={<Loading />}>
        <ClientCookiesProvider value={cookies().getAll()}>
          <Providers>
            <Layout>{children}</Layout>
          </Providers>
          </ClientCookiesProvider>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
