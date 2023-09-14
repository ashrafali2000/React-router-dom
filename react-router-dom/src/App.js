import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes} from "react-router-dom"
import Home from "./Home";
import Address from "./about/address";
import Dashboard from "./Dashboard";
import Layout from "./Layout";
import About from "./about";
import Contact from "./about/contact";
import Information from "./about/address/information";
import Street from "./about/address/streetNo";
function App() {
  return (
    <div>
   <Routes>
   <Route path="/" element={<Layout></Layout>} >
   <Route index element={<Home></Home>} />

{/* nested routes */}
   <Route path="about/" element={""}>
   <Route index element={<About></About>} />
   <Route path="contact" element={<Contact></Contact>}/>

   {/* dobule nestd routes */}
  <Route path="address/" element={""}>
 <Route index element={<Address></Address>} />
 <Route path="information" element={<Information></Information>} />
 <Route path="street" element={<Street></Street>}/>
  </Route>

   </Route>



   <Route path="Dashboard" element={<Dashboard></Dashboard>} />

   </Route>
   </Routes>
  
    </div>
  );
}

export default App;
