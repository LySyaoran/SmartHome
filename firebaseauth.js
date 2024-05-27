import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyCoqKbz-erbGUjtO2AdrurETvrTIVPKchk",
    authDomain: "login-form-cc3ae.firebaseapp.com",
    projectId: "login-form-cc3ae",
    storageBucket: "login-form-cc3ae.appspot.com",
    messagingSenderId: "1001734439444",
    appId: "1:1001734439444:web:d4352d36b682b9935e1d01"
};
const app = initializeApp(firebaseConfig);
// function showMesaage(message, divId) {
//     var messageDiv = document.getElementById(divId);
//     messageDiv.style.display = 'block';
//     messageDiv.innerHTML = message;
//     messageDiv.style.opacity = 1;
//     setTimeout(() => {
//         messageDiv.style.opacity = 0;
//     }, 3000);
// }
var btn_login = document.getElementById('btn_login');
var btn_register = document.getElementById('btn_register');
btn_register.addEventListener('click', (event) => {
    event.preventDefault();
    btn_register.style.backgroundColor = 'red';
    btn_register.style.color = 'white';
    setTimeout(() => {
        btn_register.style.backgroundColor = '#162938';
        btn_register.style.color = 'white';
    }, 2000);
    var username = document.getElementById('userInp').value;
    var email = document.getElementById('emailInp').value;
    var password = document.getElementById('passwordInp').value;
    
    var auth = getAuth(app);
    var db = getFirestore(app);
    createUserWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
            const user = userCredential.user;
            const userData = {
                email: email,
                password: password,
                username: username
            };
            const docRef = doc(db, "users", user.uid);
            setDoc(docRef, userData).then(() => {
                window.location.href = 'formlogin.html';
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
            alert("Đăng kí tài khoản thành công")
            console.log(user);
        })
        .catch((error) => {
            var errorCode = error.code;
            if (errorCode == 'auth/email-already-in-use') {
                alert("Email đã được sử dụng");
            }
            var errorMessage = error.message;
            console.log(errorMessage);
        });
});

btn_login.addEventListener('click', (event) => {
    event.preventDefault();
    btn_login.style.backgroundColor = 'red';
    btn_login.style.color = 'white';
    setTimeout(() => {
        btn_login.style.backgroundColor = '#162938';
        btn_login.style.color = 'white';
    }, 2000);
    var email = document.getElementById('emailInp1').value;
    var password = document.getElementById('passwordInp1').value;
    var auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
            const user = userCredential.user;
            localStorage.setItem('loggedInUserID', user.uid);
            console.log(user);
            alert("Đăng nhập thành công");
            window.location.href = 'home.html';
        })
        .catch((error) => {
            var errorCode = error.code;
            if (errorCode == 'auth/invalid-credential') {
                alert("Email hoặc mật khẩu không hợp lệ");
            }
            else if (errorCode == 'auth/user-not-found') {
                alert("Không tìm thấy người dùng");
            }
            else if (errorCode == 'auth/wrong-password') {
                alert("Sai mật khẩu");
            }
            var errorMessage = error.message;
            console.log(errorMessage);
        });
});

var login = document.querySelector('.login');
login.style.backgroundColor = 'rgb(255, 77, 0)';
var a_login = document.querySelector('.a_login');
a_login.style.color = 'white';