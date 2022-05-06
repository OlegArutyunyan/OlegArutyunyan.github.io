import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBy4c342gY8oYXpfEImuSUweVcC3j82fuU",
    authDomain: "alert-cursor-347908.firebaseapp.com",
    projectId: "alert-cursor-347908",
    storageBucket: "alert-cursor-347908.appspot.com",
    messagingSenderId: "900478716566",
    appId: "1:900478716566:web:ba8359518792b6f07a90b7",
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default auth