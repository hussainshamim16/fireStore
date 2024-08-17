
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc
} from "./firebase.js"

console.log(getDocs)
const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;
// ------------------------------------------------------------

const name = document.getElementById('name');
const lname = document.getElementById('lname');
const emailAdress = document.getElementById('emailAdress');
const phone = document.getElementById('phone');
const gender = document.getElementById('gender');
const userName = document.getElementById('userName');
const password = document.getElementById('password');
const dateofbirth = document.getElementById('dateofbirth');
//---------------------------------------------------------------
nextBtnFirst.addEventListener("click", function (event) {
    if (!name.value) {
        alert("Enter your name")
        return
    } else if (!lname.value) {
        alert("Enter your last name")
    }
    else {
        event.preventDefault();
        slidePage.style.marginLeft = "-25%";
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
    }

});
nextBtnSec.addEventListener("click", function (event) {
    if (!emailAdress.value) {
        alert("Enter your Email")
        return
    } else if (!phone.value) {
        alert("Enter your phone")
    } else {
        event.preventDefault();
        slidePage.style.marginLeft = "-50%";
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
    }
});
nextBtnThird.addEventListener("click", function (event) {
    if (!dateofbirth.value) {
        alert("Enter your date of birth")
        return
    } else if (!gender.value) {
        alert("Enter your gender")
    } else {
        event.preventDefault();
        slidePage.style.marginLeft = "-75%";
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
    }
});
submitBtn.addEventListener("click", async function () {
    if (!userName.value) {
        alert("Enter your user name")
        return
    } else if (!password.value) {
        alert("Enter your password")
    } else {





        const userData = {
            userName: name.value,
            userlname: lname.value,
            useremailAdress: emailAdress.value,
            userphone: phone.value,
            usergender: gender.value,
            useruserName: userName.value,
            userpassword: password.value,
            userdateofbirth: dateofbirth.value,
        }


        const sate = await collection(db, "user", userData)
        const doc = addDoc("sate", sate)
        console.log("document complete")







        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
        setTimeout(function () {
            alert("Your Form Successfully Signed up");
            // location.reload();
        }, 800);
    }
});

prevBtnSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnThird.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnFourth.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});



const userData = {
    userName: name.value,
    userlname: lname.value,
    useremailAdress: emailAdress.value,
    userphone: phone.value,
    usergender: gender.value,
    useruserName: userName.value,
    userpassword: password.value,
    userdateofbirth: dateofbirth.value,
}


const sate = await collection(db, "user", userData)
const doc = addDoc("sate", sate)
console.log("document complete")