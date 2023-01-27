import React, { useState } from "react";
import Results from "./result";
import Search from "./Search";
import "./homePage.css";

const HomePage = () => {
  const [searchParam, setSearchParam] = useState();

  const onSearch = (params) => {
    setSearchParam(params);
  };

  return (
    <div className="homePage">
      <Search onSearch={onSearch} />
      <Results params={searchParam} />
    </div>
  );
};

export default HomePage;
