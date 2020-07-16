import React from "react";
import { connect } from "react-redux";

import { fetchProducts } from "../actions";
import LargeHero from "./LargeHero";
import Item from "./Item";

class FrontPage extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderList() {
    const { products } = this.props;
    if (products) {
      return Object.values(products).map((product) => {
        return <Item product={product} key={product.id} />;
      });
    }
    return "loading.";
  }

  render() {
    return (
      <>
        <LargeHero />
        <div className="page-section page-section--black">
          <div className="wrapper">
            <div className="row">{this.renderList()}</div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { fetchProducts })(FrontPage);
