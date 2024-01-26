import { useCookies } from 'next-client-cookies';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext<any | null>(null);
export const UserProvider = ({ children }: { children: any }) => {
  let user;
  const Cookies = useCookies();

  const users = Cookies.get('admin') as unknown as string;
  console.log({ users });
  if (users !== undefined) {
    user = JSON.parse(users);
  }

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
