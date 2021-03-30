import React from "react";
import NavBar from "../dashboard/Static/NavBar";
import Aside from "../dashboard/Static/Aside";

function Dashboard() {
  return (
    <div className="bg-white h-screen flex font-rubik">
      <Aside />
      <div className="flex-1 flex flex-col overflow-auto">
        <NavBar />
        <div>Home</div>
      </div>
    </div>
  );
}

export default Dashboard;
