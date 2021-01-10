import React from "react";
import Header from "./Header.js";
import Cat from "./Catog.js";
import "./Home.css";
import Product from "./Product.js";
import Items from "./Items.js";

function Home() {
  return (
    <>
      {/* home */}
      <div className="home">
        {/* description bar */}
        <div className="detail_bar">
          <div className="detail">
            All links are refreshed and updated with new one
          </div>
        </div>

        {/* product */}
        <div className="rows">
          {Items.map((val) => {
            return <Product name={val.name} image={val.image} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
