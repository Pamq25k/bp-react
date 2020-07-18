import React from "react";
import { connect } from "react-redux";
import { fetchProduct, addToCart } from "../actions";

import { Wrapper, PageSection } from "./containers";

class Product extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.state.isLoaded) {
      return "loading";
    }

    const product = this.props.products[this.props.match.params.id];
    const { id, name, images, description, price } = product;

    return (
      <>
        <div className="md-col-1-of-2">
          <img src={images[0].src} alt="" className="product__image" />
        </div>
        <div className="product__details md-col-1-of-2">
          <h4 className="product__title">{name}</h4>
          <div className="product__price-tag">Price: {price}$</div>
          <div
            className="product__description"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          <div className="product__buttons">
            <button
              className="btn btn--large btn--gray-outline mr-small"
              onClick={() => this.props.addToCart({ id, name, price })}
            >
              Add to Cart
            </button>
            <button className="btn btn--large btn--gray">Buy it Now</button>
          </div>
        </div>
      </>
    );
  }

  render() {
    return (
      <PageSection black>
        <Wrapper>
          <div className="product">
            <div className="row">{this.renderContent()}</div>
          </div>
        </Wrapper>
      </PageSection>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { fetchProduct, addToCart })(Product);
