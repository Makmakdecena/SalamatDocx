
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import  {getAuth, createUserWithEmailAndPassword,signinEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-aut.js"
import {getFirestore,setDoc,doc} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js"

const firebaseConfig = {
   apiKey: "AIzaSyAC-3CvwZbgwDVPQ0j0he_J3EtKI1la1ec",
   authDomain: "mark-d52ad.firebaseapp.com",
   projectId: "mark-d52ad",
   storageBucket: "mark-d52ad.firebasestorage.app",
   messagingSenderId: "747268062006",
   appId: "1:747268062006:web:99d2d14fbef9b289265197",
   measurementId: "G-R9L6HKX7F3"
};


const app = initializeApp(firebaseConfig);

function showMessage(message,divId){
   var messageDiv=document.getElementById(divId);
   messageDiv.style.display ='block';
   messageDiv.innerHTML = message;
   messageDiv.style.opacity = 1;
   setTimeout(function(){
      messageDiv.style.opacity=0;
   },5000)


}


const signUp =document.getElementById('submitSignup');
signUp.addEventListener('click' , (event) =>{
   event.preventDefault();

   const email = document.getElementById('rEmail').value;
   
   const password= document.getElementById('rpassword').value;
   
   const firstname = document.getElementById('fname').value;
   
   const lastname = document.getElementById('lname').value;

   const auth = getAuth();
   const db = getFirestore();

   createUserWithEmailAndPassword(auth,email,password)
   .then((userCredential)=>{
         const user = userCredential.user;
         const userData = {
            email: email,
            firstname: firstname,
            lastname: lastname,

         };
         showMessage('Account Created Succesfully', 'signUpMessage');
         const docRef = doc(db,"user", user.uid);
         setDoc(docRef,userData)
         .then(()=>{
            window.location.href ='index.html';

         })
         .catch((error) =>{
            console.error("error writing document",error);


         })

   })
   .catch()
})