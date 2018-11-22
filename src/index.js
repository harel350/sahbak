import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routering from './Router.js';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

ReactDOM.render(<Routering/>, document.getElementById('root'));
registerServiceWorker();
