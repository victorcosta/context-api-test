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

export default firebase;
