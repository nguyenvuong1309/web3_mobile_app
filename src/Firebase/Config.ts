import {Config} from 'react-native-config';

export const firebaseOptions = {
  apiKey: `${Config.FIREBASE_API_KEY}`,
  authDomain: `${Config.FIREBASE_AUTH_DOMAIN}`,
  databaseURL: `${Config.FIREBASE_DATABASE_URL}`,
  projectId: `${Config.FIREBASE_PROJECT_ID}`,
  storageBucket: `${Config.FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${Config.FIREBASE_MESSAGING_SENDER_ID}`,
  appId: ``,
};