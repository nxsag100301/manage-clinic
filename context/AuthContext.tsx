import {createContext, ReactNode, useContext, useState} from 'react';

type AuthContextType = {
  user: any;
  signUp: (email: string, password: string) => Promise<string | null>;
  signIn: (email: string, password: string) => Promise<string | null>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}: {children: ReactNode}) {
  const [user, setUser] = useState(null);

  const signIn = async (email: string, password: string) => {
    try {
      console.log('signin');
      return null;
    } catch (error) {
      if (error instanceof Error) {
        console.log('check error sign in: ', error.message);
        return error.message;
      }
      return 'An error occur during sign in';
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      console.log('signup');
      return null;
    } catch (error) {
      return 'An error occur during sign up';
    }
  };
  return (
    <AuthContext.Provider value={{user, signUp, signIn}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be inside of the authProvider');
  }
  return context;
};
