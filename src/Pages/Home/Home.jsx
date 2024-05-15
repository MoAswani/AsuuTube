import React from "react";
import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";

const Home = ({ sidebar }) => {
  return (
    <>
      <Sidebar sidebar={sidebar}></Sidebar>
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed></Feed>
      </div>
    </>
  );
};

export default Home;
