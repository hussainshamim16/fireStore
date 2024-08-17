console.log("signup")

import {
    app,
    db,
    collection,
    addDoc,
    getDocs,
    setDoc,
    doc
    , getDoc
    , auth
    , createUserWithEmailAndPassword
} from './firebase.js'

if (localStorage.userId) {
    window.location = "./index.html"
} else {



    var name = document.getElementById("name");
    var lname = document.getElementById("lname");
    var gender = document.getElementById("gender");
    var religin = document.getElementById("religin");
    var pnumber = document.getElementById("pnumber");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var submitbtn = document.getElementById("submitbtn");
   
    var userSpacialId ;

    submitbtn.addEventListener('click', async () => {

        if (!name.value && !lname.value) {
            alert("enter valid information")
            return
        }
        if (!email.value) {
            alert("enter valid information")
            return
        }
        if (password.value < 8) {
            alert("password mostly 8 carecters")
            return
        }

        // console.log("name.value")
        // console.log(name.value)
        // console.log(lname.value)
        // console.log(email.value)
        // console.log(password.value)

        const userObject = {
            username: name.value,
            userlname: lname.value,
            gender: gender.value,
            religin: religin.value,
            pnumber: pnumber.value,
            useremail: email.value,
        }

        localStorage.setItem("user Name", name.value)
        localStorage.setItem("user Last Name", lname.value)
        localStorage.setItem("user gender", gender.value)
        localStorage.setItem("user religin", religin.value)
        localStorage.setItem("user number", pnumber.value)
        localStorage.setItem("user email", email.value)


        const userCollection = collection(db, "users");
        const response = await addDoc(userCollection, userObject)
        console.log("response", response)


        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {

                console.log("login", userCredential.user)
                localStorage.setItem("userId", userCredential.user.uid)
                
                userSpacialId = userCredential.user.uid
                window.location = './index.html'
                alert("you are succsess full \n sign up")


            })
            .catch((error) => {
                console.error("bug", error.code)
                alert("you are not sigh up",error.message)
            });
    })

    const userId = localStorage.getItem("userId")
    console.log(userId)


 
}


