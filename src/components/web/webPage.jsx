import React from "react";
import NavBar from "../static/webNavBar";
import Footer from "../static/webFooter";
import Home from "../home/Home";

function webPage() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

export default webPage;
