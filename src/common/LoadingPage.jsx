import React from "react";
import "../assets/css/loading.css";
function LoadingPage() {
  return (
    <div className=" w-screen h-screen flex justify-center bg-primary absolute top-0 right-0 items-center opacity-90">
      <div className="lds-dual-ring"></div>
    </div>
  );
}

export default LoadingPage;
