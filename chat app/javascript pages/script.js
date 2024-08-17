


import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    setDoc,
    doc,
    getDoc,
    db,
    getStorage,
    storage,
    ref,
    uploadBytes,
    getDownloadURL,
} from '../javascript pages/firebase.js'


const username = document.getElementById("username")
const phoneNumber = document.getElementById("phoneNumbe")
const religin = document.getElementById("religin")
const Lastname = document.getElementById("Lastname")
const useremail = document.getElementById("useremail")
const submit = document.getElementById("submit")
const resive = document.getElementById("resive")
let userId;


submit.addEventListener("click", async () => {
    try {
        const userObject = {
            userName: username.value,
            userLastName: Lastname.value,
            userReligin: religin.value,
            userPhoneNumber: phoneNumber.value,
            useremail: useremail.value,
        }


        const collectData = collection(db, "userData")
        const responce = await addDoc(collectData, userObject)
        console.log("response", responce.id)

        userId = responce.id
        localStorage.setItem("userId", responce.id)
        // const Dnname = document.getElementById("Dnname")
        // const DnlastName = document.getElementById("DnlastName")
        // const Dnreligin = document.getElementById("Dnreligin")
        // const DnNumber = document.getElementById("DnNumber")
        // const Dnemail = document.getElementById("Dnemail")

        // error Expected type 'DocumentReference', but it was: a custom CollectionReference object

    } catch (error) {
        console.log("error", error.message)
    }
})

resive.addEventListener("click", async () => {
    try {
        const collectData = collection(db, "userData")
        const snapshot = await getDocs(collectData)
        console.log(snapshot)
        snapshot.forEach((doc) => {
            // console.log(doc.id, "=>", doc.data())
            if (doc.id === localStorage.userId) {
                alert("show")
                console.log(doc.data())
            }
        });


    } catch (error) {
        console.log("error", error.message)
    }

})

console.log(localStorage.userId)

const userImage = document.getElementById("userImage");
const postImage = document.getElementById("postImage");
const posterImage = document.getElementById("posterImage");

// console.log(userImage,
//     postImage,
//     posterImage)

postImage.addEventListener("click", async () => {
    console.log("yes")
    const filer = userImage.files[0]
    try {

    //  refrence 
        const storageRef = ref(storage, `images/${filer.name}`);
    //  upload
    const uploadRef = await uploadBytes(storageRef,filer)
    console.log(uploadRef)
    alert("upload ho gaya ")
    // download
    const downloadRef = await getDownloadURL(uploadRef.ref)
    console.log("Link ",downloadRef)
    alert("download karo")
    

    } catch (error) {
        console.log("error", error.message)
    }
})