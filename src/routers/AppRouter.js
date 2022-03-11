import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
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
                    <Outlet />
                  </PublicRoute>
                } 
                />

                <Route path={ `${process.env.PUBLIC_URL}/*` } element={ 
                    <PrivateRoute>
                      <DashboardRoutes />
                      <Outlet />
                    </PrivateRoute>  
                  } 
                />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
