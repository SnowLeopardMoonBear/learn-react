import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import manStore from "./reducers/index.js"; // 프로젝트에서 사용할 리듀서
import { Provider } from "react-redux";

import Root from "./client/Root.js";
import * as serviceWorker from "./serviceWorker"; // 백그라운드 통신을 도와주는 서비스 워커

// 리덕스 개발자도구 적용
// const devTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(manStore); // 불러온 리듀서로 스토어를 생성
console.log(store.getState());

// Provider 렌더링해서 기존의 App을 감싸면, 하위 컴포넌트에 따로 전달하지 않아도 connect될 때 store 접근이 가능하다
ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>
  ,
  document.getElementById("root")
);
serviceWorker.register();
