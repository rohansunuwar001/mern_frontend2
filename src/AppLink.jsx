import { NavLink } from 'react-router-dom';

const AppLink = () => {
  return (
    <>
    <NavLink to={"/"} style={{margin:"10px"}}>Home</NavLink>
    <NavLink to={"/student"} style={{margin:"10px"}}>Student</NavLink>
    <NavLink to={"/student/create"} style={{margin:"10px"}}>Create</NavLink>
    <NavLink to={"/admin/register"} style={{margin:"10px"}}>Admin Register</NavLink>
    <NavLink to={"/admin/login"} style={{margin:"10px"}}>Admin Login</NavLink>
    <NavLink to={"/admin/my-profile"} style={{margin:"10px"}}>My Profile</NavLink>
    <NavLink to={"/admin/update-password"} style={{margin:"10px"}}>Update Password</NavLink>
    <NavLink to={"/admin/logout"} style={{margin:"10px"}}>Logout</NavLink>
    <NavLink to={"/admin/read-all"} style={{margin:"10px"}}>Read All </NavLink>



    </>
  )
}

export default AppLink