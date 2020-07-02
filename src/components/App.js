import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import FrontPage from "./FrontPage";
import Product from "./Product";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={FrontPage} />
      <Route path="/product/:id" exact component={Product} />
      <Footer />
    </Router>
  );
}

export default App;
