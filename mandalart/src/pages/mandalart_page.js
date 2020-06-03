import React from "react";
class MandalartPage extends React.Component {
  static defaultProps = {
    name: "기본props",
  };
  render() {
    return (
        <div class="nine-square-wrapper">
            <div class="nine-squares-with-square-id-props"/>
        </div>
    );
  }
}
export default MandalartPage;
