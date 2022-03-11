import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

/*
    <PublicRoute>
        <LoginScreen /> <-- hijos del HOC PublicRoute
    </PublicRoute>  
*/

//children es un arreglo de componentes
export const PublicRoute = ( { children }) => {

  const { user } = useContext( AuthContext );  

  return !user.logged ? children : <Navigate to="/marvel" />
}
