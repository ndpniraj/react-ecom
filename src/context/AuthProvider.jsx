import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [profile, setProfile] = useState({
    name: "",
    avatar: "",
  });
  return (
    <AuthContext.Provider value={{ profile, setProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
