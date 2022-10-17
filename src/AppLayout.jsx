import { Outlet } from "react-router"


const AppLayout = () => {
  return (
    <div className="app">
        <Outlet />
    </div>
  )
}

export default AppLayout