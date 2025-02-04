import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD4067AEMrOP1z_7vJWxX-0DsFcpwB24hc",
  authDomain: "sangram-realty.firebaseapp.com",
  projectId: "sangram-realty",
  storageBucket: "videomatic-ai-5c2b2.appspot.com",
  messagingSenderId: "279111685984",
  appId: "1:279111685984:web:51b033d34126544faa3005",
  measurementId: "G-Y1QW3MY82E"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);