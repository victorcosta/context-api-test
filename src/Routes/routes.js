import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';

import firebase from '../services';

import Public from './Public';
import Private from './Private';

const Routes = () => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLogged(true);
      } else {
        setLogged(false);
      }
    });
  }, []);

  return !logged ? <Public /> : <Private />;
};

export default Routes;
