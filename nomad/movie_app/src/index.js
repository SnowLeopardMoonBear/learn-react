// react component를 불러와 DOM에 연결해주는 역할
// role of this file is root of a react project

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// reactDOM is used to render UI on a website
// reactDOM이 id가 root인 element에 render한다
// react는 UI 라이브러리일 뿐
// 그래서 복잡하게 프로젝트 자체를 react로 설치할 일 없이, 필요한 컴포넌트만 뷰로 대체하여 렌더링이 가능하다
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
