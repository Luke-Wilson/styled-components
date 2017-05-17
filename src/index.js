import React from 'react';
import {render} from 'react-dom';

const MyComponent = () => (
  <div>Hi there world</div>
);


render(<MyComponent />, document.getElementById('app'));
