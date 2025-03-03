import { useContext } from "react";

import { AuthContext } from "./AuthProvider";

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

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within Auth Provider");
  }

  return context;
};
