import { Link } from "react-router-dom"
export default function Menu()
{
    return <div>
         &nbsp;&nbsp;&nbsp;
        <Link to='/'><b>Login</b></Link> &nbsp;&nbsp;&nbsp;
        <Link to='/products'><b>Products</b> </Link>&nbsp;&nbsp;&nbsp;
        <Link to='/profile'><b>Profile</b></Link>&nbsp;&nbsp;&nbsp;
        <Link to='/logout'><b>Logout</b></Link>&nbsp;&nbsp;&nbsp;
    </div>
}