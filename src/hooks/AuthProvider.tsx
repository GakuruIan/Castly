import React, { useState, useEffect, ReactNode, createContext } from "react";
import { axiosInstance } from "../Axios/axios";
import Cookies from "js-cookie";

interface User {
  _id: string;
  name: string;
  email: string;
  // profileImage?:string
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const GetUser = async () => {
      const token = Cookies.get("token");

      if (!token) {
        setIsAuthenticated(false);
      }

      axiosInstance
        .get<User>("/auth/user")
        .then((response) => {
          if (response.status === 200) {
            setIsAuthenticated(true);
            setUser(response.data);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsAuthenticated(false);
          setUser(null);
        });
    };

    GetUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
