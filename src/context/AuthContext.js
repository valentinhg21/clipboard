import { createContext, useContext, useState, useEffect } from "react";
import { auth } from '../services/getFirebase' 
const AuthContext = createContext();

export const AuthContextUse = () => {
  return useContext(AuthContext);
};

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, [])


  return (
    <AuthContext.Provider value={{currentUser}}>
      {children}
    </AuthContext.Provider>
  );
}
