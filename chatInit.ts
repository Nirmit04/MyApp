import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';


class ChatInit {
    constructor() {

    }
    async initialize() {
        try {
            const firebaseConfig = {
                apiKey: "AIzaSyDSLAFl_J7JX4Lxk6VakdFhHaPOKDdbcOY",
                authDomain: "house-rental-app-1.firebaseapp.com",
                projectId: "house-rental-app-1",
                storageBucket: "house-rental-app-1.appspot.com",
                messagingSenderId: "331778074944",
                appId: "1:331778074944:web:68d35b864e92b6fd6ef2a5",
                measurementId: "G-WF1BYE5J62",
                databaseURL: 'https://house-rental-app-1.firebaseio.com'
            };
            const app = initializeApp(firebaseConfig);
            return Promise.resolve({ app });
        } catch (error) {
            return Promise.reject(error)
        }
    }
    async database() {
        try {
            return Promise.resolve({ db: getFirestore() })
        } catch (error) {
            return Promise.reject(error)
        }
    }

}
let ChatConfig = new ChatInit();
export default ChatConfig