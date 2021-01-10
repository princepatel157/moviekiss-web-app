import React from "react";
import "./Product.css";

const Poduct = (props) => {
  return (
    <>
      <div className="product">
        <div className="product_img">
          <img src={props.image} alt="" />
        </div>
        <div className="product_info">{props.name}</div>
      </div>
    </>
  );
};

export default Poduct;
