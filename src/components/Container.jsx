import React from "react";
import Cards from "./Cards";
import Header from "./Header";

const container = () => {
  return (
    <>
      <Header />
      <div className="container text-center mt-2">
        <Cards />
      </div>
    </>
  );
};

export default container;
