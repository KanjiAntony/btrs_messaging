import { Route, Routes } from "react-router";
import AppLayout from "./AppLayout";
import ProtectedRoutesLayout from "./components/ProtectedRoutesLayout";
import Login from "./Login";
import Dashboard from "./messaging/pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>

        <Route index element={<Login />} />

        <Route element={<ProtectedRoutesLayout />}>
          
          <Route path="/messaging" element={<Dashboard />} />

        </Route>

      </Route>
    </Routes>
  );
}

export default App;
