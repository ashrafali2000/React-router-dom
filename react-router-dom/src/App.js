// import './App.css';
import { Outlet, Route, Routes} from "react-router-dom"
import Home from "./Home";

import Dashboard from "./Dashboard";
import Layout from "./Layout";
import About from "./about";
function App() {
  return (
    <div>
     <div> My react roueter App
      </div>
   <Routes>
   <Route path="/" element={<Layout></Layout>} />
   <Route index element={<Home></Home>} />
   <Route path="about" element={<About></About>} />
   <Route path="Dashboard" element={<Dashboard></Dashboard>} />
   </Routes>
   <Outlet></Outlet>
    </div>
  );
}

export default App;
