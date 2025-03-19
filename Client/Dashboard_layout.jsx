import { Outlet } from "react-router-dom";
import Navbar from "./src/Components/Navbar";

const Dashboard_layout = () => {
  return (
    <div >
      <Navbar/>
      <div >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard_layout;