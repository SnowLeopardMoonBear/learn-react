import React from "react";
import qs from "qs";

class EditPage extends React.Component {
  state = {content:"asdf"}
  render() {
    return (
      <div>
        <h1>Edit</h1>
        {/* <input type="text" placeholder="아무거나">asdf</input> */}
        <input type="text" placeholder={this.props.index}></input>
        <button onClick="sendAndClear">전송</button>
      </div>
    );
  }
}
export default EditPage;
