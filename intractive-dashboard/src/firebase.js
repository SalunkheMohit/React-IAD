import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseconfig = {
    apiKey: "AIzaSyDqX1b0nYk1vX5Y2xX1b0nYk1vX5Y2xX1b0",
    authDomain: "intractive-dashboard.firebaseapp.com",
    projectId: "intractive-dashboard",
};

const app = initializeApp(firebaseconfig);
export const auth = getAuth(app);