import React, { Component } from "react";
import { Route } from "react-router-dom";
import { MandalartPage, NineSquaresPage, SquarePage, LoginPage} from "../pages";
import Styled from "styled-components";
// var Mandalart = require("../models/model");
// import mongoose from "mongoose";

// /* mongoose를 통해 MongoDB에 연동 */
// mongoose.connect("mongodb://localhost:27017/mandalart", {
//   //mongoose에 연결. URL/DB이름
//   // MongoDB에서 계속 묻는 기본 설정을 미리 저장
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true,
//   // 마지막 옵션 이유는 DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
// });
// var db = mongoose.connection;
// db.on('error', console.error);
// db.once('open', () => console.log("DB에 연결되었습니다."));

// 가운데 정렬용?
const Wrapper = Styled.div`
  margin-left: auto;
  margin-right: auto;
`

class App extends Component {
  // componentDidUpdate(){
  //   var mand = new Mandalart();
  //   mand.mand_data = this.props;
  //   mand.save(function(err){
  //     if(err){
  //       console.log(err);
  //       return;
  //     }
  //     console.log("DB에 최신 만다라트를 저장했습니다")
  //   })
  // }
  render() {
    return (
      <Wrapper>
        {/* render() 함수를 사용하는게 props의 불필요한 렌더링을 막아주는 효율적인 방식. */}
        <Route exact path="/" render={()=><MandalartPage content={this.props}/>}/> 
        <Route path="/nine" component={NineSquaresPage} />
        <Route path="/square/:index/:content" component={SquarePage} />
        <Route path="/login" component={LoginPage}/>
      </Wrapper>
    );
  }
}

export default App;
