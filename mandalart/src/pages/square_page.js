import React from "react";
class SquarePage extends React.Component {
  static defaultProps = {
    name: "기본props",
  };
  render() {
    return <h1>Hi, I'm square page!</h1>;
  }
}
export default SquarePage;
