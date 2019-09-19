import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import Hello from './components/demo/Hello';
// import HelloClass from './components/demo/HelloClass'
// import HelloHOC from './components/demo/HelloHOC';
// import HelloHooks from './components/demo/HelloHooks';
// import App from './components/App';
import Root from './routers';
import store from './redux/store';

ReactDOM.render(
    // <HelloClass name="Typescript!!!" />,
    // <HelloHOC name="Typescript!!!" loading={true} />,
    // <App />,
    // <Root />,
    <Provider store={store}>
        <Root />
    </Provider>,
    document.querySelector('.app')
)