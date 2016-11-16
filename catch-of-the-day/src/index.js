import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';
import './css/style.css';
import App from './components/App';
import NotFound from './components/NotFound';

import StorePicker from './components/StorePicker';

const Root = () => {
  return (
    <div>
      <BrowserRouter>
        <Match exactly pattern='/' component={StorePicker} />
        <Match pattern='/store/:storeId' component={App} />
        <Miss component={notFound} />
      </BrowserRouter>
    </div>
  )
}

render(<App/>, document.querySelector('#main'));
