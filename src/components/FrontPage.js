import React from "react";
import { connect } from "react-redux";

import { fetchProducts } from "../actions";
import LargeHero from "./LargeHero";
import Item from "./Item";
import { Wrapper, PageSection } from "./containers";

class FrontPage extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderList() {
    if (this.props.state.isLoaded) {
      const { products } = this.props;
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
        <PageSection black>
          <Wrapper>
            <div className="row">{this.renderList()}</div>
          </Wrapper>
        </PageSection>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { fetchProducts })(FrontPage);
