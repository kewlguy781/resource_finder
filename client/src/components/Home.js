import React, { useState } from "react";
import Axios from "axios";
import Categories from "./Categories";

const Home = () => {
  return (
    <>
      <h1>Utah Deaf Association Resource Finder</h1>
      <Categories />
      <br />
    </>
  );
};

export default Home;
