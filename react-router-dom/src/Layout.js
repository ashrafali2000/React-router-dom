import { Link, Outlet } from "react-router-dom";

export default  function Layout(){
    return(<div>
        <h1>Logo</h1><h1>NavBar</h1>
<div>
    <Link to={"/"}>Home</Link>
    <Link to= {"/about"}>About</Link>
    <Link to= {"/Dashboard"}>Dashboard</Link>
</div>

        {/* <Outlet></Outlet> */}
    </div>)
}