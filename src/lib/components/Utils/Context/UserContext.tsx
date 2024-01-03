import { useCookies } from 'next-client-cookies';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext<any | null>(null);
export const UserProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState();
  const Cookies = useCookies();
  useEffect(() => {
    const users = Cookies.get('admin') as unknown as string;
    if (users !== undefined) {
      setUser(JSON.parse(users));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
