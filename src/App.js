import React from 'react';
import { decode, encode } from 'base-64';

import Routes from './Routes/routes';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

const App = () => {
  return <Routes />;
};

export default App;
