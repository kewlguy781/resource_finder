import React, { useState } from "react";
import Axios from "axios";
import Categories from "./Categories";
import Search from "./Search";

const Home = () => {
  return (
    <>
      <div>Utah Deaf Association Resource Finder</div>
      <Categories />
      <br />
      <Search />
    </>
  );
};

export default Home;
