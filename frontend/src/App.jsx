import React from "react";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <div className="dvMain">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
