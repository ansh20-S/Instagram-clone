import Firebase from 'firebase/app'; 
import 'firebase/firestore'; 
import 'firebase/auth'; 

const config = {
    apiKey: "AIzaSyDYMiGa9uDjqSZM6DKjcrnv0lnk9hhlBxc",
    authDomain: "instagram-ansh.firebaseapp.com",
    projectId: "instagram-ansh",
    storageBucket: "instagram-ansh.appspot.com",
    messagingSenderId: "532333814167",
    appId: "1:532333814167:web:902dd030055820796624d2"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue};
