import { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter'

const init = () => {
  return JSON.parse( localStorage.getItem('user') ) || { logged: false };
}

export const HeroesApp = () => {

  /*
   dispatch para ejecutar las acciones sobre nuesto authReducer
   {}: Valor inicial del user 
   init: funcion externa de inicializacion del authReducer con el nuevo user (este user pisa {} )
  */
  const [user, dispatch] = useReducer( authReducer, {}, init );

  //Siempre se disparan por lo menos una vez
  useEffect(() => {
    if ( !user ) return;
    localStorage.setItem('user', JSON.stringify(user));
  }, [ user ]);
  
  return (
    <AuthContext.Provider value={{user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}
