import React, { useState } from "react";
import Axios from "axios";
import Categories from "./Categories";

const Home = () => {
  return (
    <>
      <div>Utah Deaf Association Resource Finder</div>
      <Categories />
      <br />
    </>
  );
};

export default Home;
