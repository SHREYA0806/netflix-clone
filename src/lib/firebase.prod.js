import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

//we need to somehiw seeed the database

//we need a config here
const config = {
    apiKey: "AIzaSyAi4kZKXzGWGpj09YhxjiLZuef5PEb6I9Q",
    authDomain: "netflix-clone-ee944.firebaseapp.com",
    projectId: "netflix-clone-ee944",
    storageBucket: "netflix-clone-ee944.appspot.com",
    messagingSenderId: "603214327429",
    appId: "1:603214327429:web:5ce38bd63b984f25ed03ec"
};

const firebase = Firebase.initializeApp(config);


export { firebase } ;