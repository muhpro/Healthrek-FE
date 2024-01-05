import { cookies } from 'next/headers';
import { permanentRedirect } from 'next/navigation';
import { OpenAPI } from '~/services';

export function withPageAuth(gssp: any) {
  return async (context: any) => {
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      // Redirect to login page
      permanentRedirect('/login');
    }

    OpenAPI.TOKEN = token;
    OpenAPI.BASE =
      (process.env.NEXT_PUBLIC_API_BASEURL as string) ||
      'https://healthrekdb-22326.nodechef.com';

    return await gssp(context); // Continue on to call `getServerSideProps` logic
  };
}
