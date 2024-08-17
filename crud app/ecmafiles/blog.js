console.log("ehllo")


import {
    getStorage,
    ref,
    uploadBytes,
    storage,
} from '../firebase.js'

console.log(getStorage)
console.log(ref)

const blogImg = document.getElementById("blogImg");
const blogtitle = document.getElementById("blogtitle");
const textArea = document.getElementById("textArea");

const post = async () => {
    console.log("post")

    console.log(blogImg.files[0])
    console.log(blogtitle.value)
    console.log(textArea.value)


    const file = blogImg.files[0];
    if (file) {
        try {

            // Create a storage reference from our storage service
            // const storageRef = ref(storage,file.name);

            // Create a child reference
            // const imagesRef = ref(storage, 'images');
            // imagesRef now points to 'images'

            // Child references can also take paths delimited by '/'
            // const spaceRef = ref(storage, `images/${file.name}`);
            // spaceRef now points to "images/space.jpg"
            // imagesRef still points to "images"
            // .then((snapshot) => {
            //     console.log('Uploaded a blob or file!');
            // });
            // 'file' comes from the Blob or File API
            // const responce = await uploadBytes(storageRef, spaceRef)
            // const storageRef = firebase.storage().ref(file.name);
            // console.log(storageRef)
            // Create a reference from a Google Cloud Storage URI
            // const gsReference = ref(storage, 'gs://bucket/images/stars.jpg');

            // // Create a reference from an HTTPS URL
            // // Note that in the URL, characters are URL escaped!
            // const httpsReference = ref(storage, 'https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg');
            // console.log("yes")

            // Create a reference to 'mountains.jpg'
            const mountainsRef = ref(storage, 'mountains.jpg');

            // Create a reference to 'images/mountains.jpg'
            const mountainImagesRef = ref(storage, 'images/mountains.jpg');


            alert("succses ho gaya")

        } catch (error) {
            console.log("Error :", error.message)
        }
    }
}

window.post = post