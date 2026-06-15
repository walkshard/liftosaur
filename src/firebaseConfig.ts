import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBH3CHLKVQ2obOc7ysO6pQd3Y4YrAju-UI",
  authDomain: "liftapp-53ca7.firebaseapp.com",
  projectId: "liftapp-53ca7",
  storageBucket: "liftapp-53ca7.firebasestorage.app",
  messagingSenderId: "753634071799",
  appId: "1:753634071799:web:4fd8c627f74451134a6ff2",
  measurementId: "G-P18MMH8M16"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
