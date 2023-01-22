import React from "react";
import { Link } from "react-router-dom";
import EmployeeTable from "./EmployeeTable";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <EmployeeTable />
      <Footer />
    </>
  );
};

export default Home;
