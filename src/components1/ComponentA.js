import React, { useContext } from "react";
import { UserAuthContext } from "../context/UserAuthContext";

const ComponentA = () => {
  const user = useContext(UserAuthContext);
  console.log(user);
  return (
    <div>
      <h1>Component A</h1>
      <h2>Name: {user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default ComponentA;
