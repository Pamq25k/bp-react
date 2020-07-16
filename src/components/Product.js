import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../actions";

class Product extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  render() {
    const product = this.props.products[this.props.match.params.id];
    if (!product) {
      return "loading";
    }
    const { id, name, images, description, price } = product;

    return (
      <div className="page-section page-section--black">
        <div className="wrapper">
          <div className="product">
            <div className="row">
              <div className="md-col-1-of-2">
                <img src={images[0].src} alt="" className="product__image" />
              </div>
              <div className="product__description md-col-1-of-2">
                <h4 className="product__title">{name}</h4>
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { fetchProduct })(Product);
