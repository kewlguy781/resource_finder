import React, { useState } from "react";
import Axios from "axios";
import Categories from "./Categories";
import Search from "./Search";

const Home = () => {
  return (
    <>
      <h1>Utah Deaf Association Resource Finder</h1>
      <Search />
      <br />
      <Categories />
    </>
  );
};

export default Home;
