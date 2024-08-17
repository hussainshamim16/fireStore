console.log("login")

import {
    auth
    ,signInWithEmailAndPassword
} from './firebase.js'




if(localStorage.userId){
 window.location = "./index.html"
}else{



var email = document.getElementById("email");
var password = document.getElementById("password");

const login = document.getElementById("login")
login.addEventListener("click", () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            console.log(userCredential.user)
            localStorage.setItem("userId",userCredential.user.uid)
            console.log(userCredential.user.uid)
            console.log("you are login")
            alert("you are sign in")
            window.location = './index.html'


            // window.location = "./index.html"
            // ...
        })
        .catch((error) => {
            console.log(error.message)
            alert("!!!!! not sign in")
        });
})

}