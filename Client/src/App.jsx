import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Loginpage from "./Pages/Loginpage";
import Signup_page from "./Pages/Signup_page";
import Dashboard_layout from "../Dashboard_layout";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Add_jobs from "./Pages/Add_jobs";
import Insights from "./Pages/Insights";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Loginpage />} />
          <Route path="/Signup_page" element={<Signup_page />} />
          <Route path="/Loginpage" element={<Loginpage />} />
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/Add_jobs" element={<Add_jobs/>}/>
          <Route path="/Insights" element={<Insights/>}/>
        </Route>
        <Route path="/dashboard" element={<Dashboard_layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;