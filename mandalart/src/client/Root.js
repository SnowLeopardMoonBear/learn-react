// App.js를 감싸 라우팅을 가능케 해주는 라우터 DOM의 root

import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import App from '../shared/App';

const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

export default Root;