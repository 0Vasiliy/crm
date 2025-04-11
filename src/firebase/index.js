import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBjP3AEJNKVFp07ROomynZ_QzNYyzsug_4",
    authDomain: "vet-onlain.firebaseapp.com",
    databaseURL: "https://vet-onlain-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vet-onlain",
    storageBucket: "vet-onlain.appspot.com",
    messagingSenderId: "140746709659",
    appId: "1:140746709659:web:2d91a30a8a23c86eb4043e"
  }

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app) 