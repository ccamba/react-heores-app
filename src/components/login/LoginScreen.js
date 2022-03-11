import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  
  const { dispatch } = useContext( AuthContext );

  //Para navegar a otras pantallas
  const navigate = useNavigate();

  const handleLogin = () => {

    const action = {
      type: types.login,
      payload: {
        name: 'Cristian',
      }
    }

    dispatch( action );

    const lastPath = localStorage.getItem('lastPath') || '/marvel';

    //no se agrega al history
    navigate( lastPath, {
      replace: true
    });
  }
  
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={ handleLogin }
      >Login
      </button>
    </div>
  )
}
