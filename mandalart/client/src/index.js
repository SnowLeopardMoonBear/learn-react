/* Redux를 사용하기 위한 파일입니다 */

import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux"; // Redux의 Store 생성을 위함
import manStore from "./reducers/index.js"; // 프로젝트에서 사용할 리듀서
import { Provider } from "react-redux"; // 하위 컴포넌트에서 connect될 때 store에 접근케 하는 wrapper

import Root from "./client/Root.js"; // 라우터 DOM의 루트가 되는 컴포넌트
import * as serviceWorker from "./serviceWorker"; // 백그라운드 통신을 도와주는 서비스 워커

/* 리덕스 개발자도구 적용
const devTools = 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
*/

const store = createStore(manStore); // 불러온 리듀서로 스토어를 생성
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>
  ,
  document.getElementById("root")
);
serviceWorker.register();
