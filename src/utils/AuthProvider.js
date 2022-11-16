import { createContext, useState } from "react";

//1-etap
 export const AuthContext = createContext();

//2-etap provider yaratish
function AuthProvider(props) {
  const [currentuser, setcurrentuser] = useState({
    name: "Asadbek",
    city: "Tashkent",
  });
  const myvalue = { currentuser, setcurrentuser };
  return (
    <AuthContext.Provider value={myvalue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
