import React from "react";
import NineSquares from "../components/nine_squares.js"

class NineSquaresPage extends React.Component {
  static defaultProps = {
    name: "기본props",
  };

  render() {
    return (
      <div>
        <h1>Name of nine-squares</h1>
        <NineSquares/>
      </div>
    );
  }
}
export default NineSquaresPage;
