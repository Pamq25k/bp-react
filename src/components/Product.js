import React from "react";

const Product = () => {
  return (
    <div className="page-section page-section--black">
      <div className="wrapper">
        <div className="product">
          <div className="row">
            <div className="md-col-1-of-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg"
                alt=""
                className="product__image"
              />
            </div>
            <div className="product__description md-col-1-of-2">
              <h4 className="product__title">Thing</h4>
              <p>haha big oom hehe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;