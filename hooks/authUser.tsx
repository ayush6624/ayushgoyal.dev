import {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from 'react';
import { supabase } from '@/utils/initSupabase';
import { useRouter } from 'next/router';
import { AuthSession, User } from '@supabase/supabase-js';

interface UserContextType {
  user?: User;
  session?: AuthSession;
}

export const SignOut = async () => {
  await supabase.auth.signOut();
};

export const RequireAuth = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/auth');
    }
  }, [user, router]);
};

export const AuthRedirect = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/profile');
    }
  }, [user, router]);
};

const UserContext = createContext<UserContextType>({} as UserContextType);

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<AuthSession>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session ?? undefined);
    setUser(session?.user ?? undefined);
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session ?? undefined);
        setUser(session?.user ?? undefined);
      }
    );

    return () => {
      if (authListener) authListener.unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ session, user }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

const AuthUser = () => {
  const { user } = useUser();
  return user;
};

export default AuthUser;

export { useUser, UserContextProvider };
