import React from "react";

const Wrapper = (props) => {
  return <div className="wrapper">{props.children}</div>;
};

const PageSection = (props) => {
  var extra = "";
  if (props.black) {
    extra += "page-section--black ";
  }
  return <div className={`page-section ` + extra}>{props.children}</div>;
};

export { Wrapper, PageSection };
