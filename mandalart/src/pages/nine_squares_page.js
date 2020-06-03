import React from "react";
class NineSquaresPage extends React.Component {
  static defaultProps = {
    name: "기본props",
  };
  render() {
    return (
      <div>
        <h1>Name of nine-squares</h1>
        <div class="nine-squares-for-ns-page"/>
      </div>
    );
  }
}
export default NineSquaresPage;
