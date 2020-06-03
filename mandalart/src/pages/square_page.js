import React from "react";
class SquarePage extends React.Component {
  static defaultProps = {
    name: "기본props",
  };
  render() {
    return (
      <div class="square-id">
        <h1>Hi, I'm square page!</h1>
        <h2>square name</h2>
        <li>
          <ul>list item to do</ul>
          <ul>multiple to-do items</ul>
        </li>
      </div>
    );
  }
}
export default SquarePage;
