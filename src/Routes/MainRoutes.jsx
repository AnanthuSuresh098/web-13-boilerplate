import { Routes , Route } from "react-router-dom";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { MoviesDashboard } from "../components/MoviesDashboard";

export const MainRoutes = ()=>{
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies" element={<MoviesDashboard />} />
        </Routes>
      </>
    );
}