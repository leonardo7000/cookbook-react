import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import Button from "@material-ui/core/Button";


injectTapEventPlugin();


ReactDOM.render(<App />, document.querySelector('#app'));