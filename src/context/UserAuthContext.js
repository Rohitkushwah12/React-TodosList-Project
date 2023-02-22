import React, { createContext, useState } from "react";

export const UserAuthContext = createContext();
export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John",
    email: "john@gmail.com",
  });
  return (
    <UserAuthContext.Provider value={user}>{children}</UserAuthContext.Provider>
  );
};
