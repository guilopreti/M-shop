import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("@MotorShop:authUser"))
  );

  useEffect(() => {
    if (authUser) {
      setAuthenticated(true);
    }
  }, [authUser]);

  const handleLogout = (history) => {
    localStorage.removeItem("@MotorShop:authUser");
    setAuthenticated(false);
    history.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        handleLogout,
        authUser,
        setAuthUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
