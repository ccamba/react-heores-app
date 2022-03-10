import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  
  //Para navegar a otras pantallas
  const navigate = useNavigate();

  const handleLogin = () => {
    //no se agrega al history
    navigate('/', {
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
