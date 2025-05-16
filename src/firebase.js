import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBl_nIMXAW_fa916xZ-cbOu8fdvEmHJ5Yo",
  authDomain: "minisap360.firebaseapp.com",
  projectId: "minisap360",
  storageBucket: "minisap360.firebasestorage.app",
  messagingSenderId: "146202955096",
  appId: "1:146202955096:web:cb4ac1b6cd25ad2719292d",
  measurementId: "G-NSBC20J03G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };