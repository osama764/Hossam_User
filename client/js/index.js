const firebaseConfig = {
  apiKey: "AIzaSyB5I3xEGrnD_MJ_YjaYnz8u16anBsMwGaI",
  authDomain: "hossam-8bf1a.firebaseapp.com",
  projectId: "hossam-8bf1a",
  storageBucket: "hossam-8bf1a.appspot.com",
  messagingSenderId: "971961193714",
  appId: "1:971961193714:web:881ca1dab5044b765dac6b"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to  RealTime Database service
const database = firebase.database();

let login = document.getElementById("login");
let signUp = document.querySelector(".signUp");
let loteFile = document.querySelector(".loteFile");
let myform = document.querySelector(".myform");
let body = document.querySelector("body");
let regester = document.querySelector(".regester");
let loading = document.querySelector(".loading");
let loginpage = document.querySelector(".loginpage");

const correct = document.querySelector(".correct");
const close = document.querySelector(".close");
const Message = document.querySelector(".error-message");

// smarttechminya@gmail.com
// oak_2030

// button log in to redirect page adding room
loginpage.addEventListener("click", (e) => {
  e.preventDefault();
  const email = myform.email.value;
  const password = myform.password.value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // تم تسجيل الدخول بنجاح
      myform.email.value = "";
      myform.password.value = "";

      // قم بتوجيه المستخدم إلى صفحة إضافة الغرفة هنا
      window.location.href = "client/Pages/AddNewRooms.html";
    })
    .catch((error) => {
      // حدث خطأ أثناء تسجيل الدخول
      const errorCode = error.code;

      const errorMessage = error.message;

      Message.innerHTML = errorMessage;
      correct.style.transform = "scale(1)";
    });
});

close.addEventListener("click", (e) => {
  e.preventDefault();
  correct.style.transform = "scale(0)";
});
