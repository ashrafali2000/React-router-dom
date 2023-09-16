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
import { useState } from 'react';
import Footer from './components/footer/indes';
function App() {
// yeha say hy
const [products, setProducts] = useState([]);

const searchHandlerBtn = (val) => {
fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${val}`)
.then((response => response.json()))
.then(item => {
  const myData = item.data.recipes;
  setProducts(myData);
  console.log(myData)
})
}

const inputSearchHandler = (value) =>  {
  searchHandlerBtn(value)
    console.log(value);
   
  }

  return (
    <div>
   <Routes>
   <Route path="/" element={<Layout searchHandlerBtn ={searchHandlerBtn}  inputSearchHandler = {inputSearchHandler}></Layout>} >

   <Route index element={<Home products = {products}></Home>} />

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
{/* footer */}
   <Route path='/' element = {""}>
   <Route index element={<Footer />} />
   </Route>
   
   </Routes>

    </div>
  );
}

export default App;
