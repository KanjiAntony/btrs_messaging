import { Navigate, Outlet, useLocation } from "react-router";

const ProtectedRoutesLayout = () => {

    const username = localStorage.getItem("username");
    const location = useLocation();

  return (

    username
    ? <Outlet />
    : <Navigate to="/" state={{from: location}} replace/>
    
  )
}

export default ProtectedRoutesLayout