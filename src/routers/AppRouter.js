import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path={ `${process.env.PUBLIC_URL}/login` } element={            
                  <PublicRoute>
                    <LoginScreen />
                  </PublicRoute>
                } 
                />

                <Route path={ `${process.env.PUBLIC_URL}/*` } element={ 
                    <PrivateRoute>
                      <DashboardRoutes />
                    </PrivateRoute>  
                  } 
                />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
