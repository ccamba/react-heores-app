import { Routes, Route, Navigate } from "react-router-dom";
import { DcScreen } from "../components/dc/DcScreen";
import { HeroScreen } from "../components/hero/HeroScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";

import { Navbar } from "../components/ui/Navbar"

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelScreen />} />
                <Route path="dc" element={<DcScreen />} />
  
                <Route path="search" element={<SearchScreen />} />
                {/* Obligatorio */}
                <Route path="hero/:id" element={<HeroScreen />} />
                
                <Route path="/" element={<MarvelScreen />} />
                <Route path='*' element={ <Navigate to={ `${process.env.PUBLIC_URL}/login` }/> } />
            </Routes>      
        </div>
    </>
  )
}
