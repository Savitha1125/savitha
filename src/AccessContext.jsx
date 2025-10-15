
// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   const login = (name) => setUser({ name });
//   const logout = () => setUser(null);

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }
// src/AccessContext.jsx
import { createContext, useContext, useState } from "react";

const AccessContext = createContext();

export function AccessProvider({ children }) {
  const [AccessService, setAccessService] = useState(false);

  return (
    <AccessContext.Provider value={{ AccessService, setAccessService }}>
      {children}
    </AccessContext.Provider>
  );
}

export function useAccess() {
  return useContext(AccessContext);
}
