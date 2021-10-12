
import firebase from 'firebase';
import 'firebase/firestore';



const firebaseConfig ={

  apiKey: "AIzaSyCAyShQj_uD33bVEqvCmorARUQI1DtEnto",
  authDomain: "ghisoecommerce.firebaseapp.com",
  databaseURL: "https://ghisoecommerce-default-rtdb.firebaseio.com",
  projectId: "ghisoecommerce",
  storageBucket: "ghisoecommerce.appspot.com",
  messagingSenderId: "44988641670",
  appId: "1:44988641670:web:e847b7de5463cbadf6fc07",
  measurementId: "G-PBVFYGJLDD"

  
};

const app= firebase.initializeApp(firebaseConfig)


export function getFirestore(){
  return firebase.firestore(app)
};


