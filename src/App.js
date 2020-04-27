import React from 'react';
import { decode, encode } from 'base-64';

import Login from './Users/Login';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

const App = () => {
  return <Login />;
};

export default App;
