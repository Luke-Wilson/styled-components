import React from 'react';
import {render} from 'react-dom';

import App from './components/App';

const MyComponent = () => (
  <div>Hi there world</div>
);


render(<App />, document.getElementById('app'));
