import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

import {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
} from '../../env';

const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
};

firebase.initializeApp(firebaseConfig);

const getUserData = (callback) => {
  firebase.auth().onAuthStateChanged((loggedUser) => {
    if (loggedUser) {
      firebase.firestore().collection('users').doc(loggedUser.uid).onSnapshot(callback);
    }
  });
};

const getDataList = (nodePath, callback) => {
  const query = firebase.firestore().collection(nodePath);

  query.onSnapshot(function (querySnapshot) {
    var items = [];
    querySnapshot.forEach(function (doc) {
      items.push(doc.data());
    });
    callback(items);
  });

  return query;
};
export default firebase;
export { getUserData, getDataList };
