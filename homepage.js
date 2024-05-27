import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyCoqKbz-erbGUjtO2AdrurETvrTIVPKchk",
    authDomain: "login-form-cc3ae.firebaseapp.com",
    projectId: "login-form-cc3ae",
    storageBucket: "login-form-cc3ae.appspot.com",
    messagingSenderId: "1001734439444",
    appId: "1:1001734439444:web:d4352d36b682b9935e1d01"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
onAuthStateChanged(auth, (user) => {
    const loggedInUserID = localStorage.getItem('loggedInUserID');
    if (loggedInUserID) {
        const docRef = doc(db, "users", loggedInUserID);
        getDoc(docRef).then((docSnap) => {
            if (docSnap.exists()) {
                const userdata = docSnap.data();
                document.getElementById('loggedUsername').innerText = userdata.username;
                document.getElementById('loggedUseremail').innerText = userdata.email;
            }
            else {
                console.log('No such document');
            }
        })
        .catch((error) => {
            console.log('Error getting document:', error);
        });
    }
    else {
        console.log('User not found in local storage');
    }
});
const logout = document.getElementById('logout');
logout.addEventListener('click', (event) => {
    localStorage.removeItem('loggedInUserID');
    signOut(auth).then(() => {
        window.location.href = 'formlogin.html';
    })
    .catch((error) => {
        console.log('Error signing out:', error);
    });
});

// alert("Welcom to homepage")

var choose = document.querySelectorAll('.choose');
choose.forEach((item) => {
    item.addEventListener('click', () => {
        choose.forEach((item) => {
            item.classList.remove('menu_active');
        });
        item.classList.add('menu_active');
    });
});
var box_item = document.querySelectorAll('.box_item');
var my_account = document.getElementById('my_account');
var box_account = document.querySelector('.box_account');
my_account.addEventListener('click', () => {
    box_item.forEach((item) => {
        item.style.display = 'none';
    });
    box_account.style.display = 'block';
});

var my_home = document.getElementById('my_home');
var box_home = document.querySelector('.box_home');
my_home.addEventListener('click', () => {
    box_item.forEach((item) => {
        item.style.display = 'none';
    });
    box_home.style.display = 'block';
});

var my_product = document.getElementById('my_product');
var box_product = document.querySelector('.box_product');
my_product.addEventListener('click', () => {
    box_item.forEach((item) => {
        item.style.display = 'none';
    });
    box_product.style.display = 'block';
});

var status_cua = document.getElementById('status_cua');
var on_cua = document.getElementById('on_cua');
var off_cua = document.getElementById('off_cua');
on_cua.addEventListener('click', () => {
    status_cua.innerText = 'ON';
});
off_cua.addEventListener('click', () => {
    status_cua.innerText = 'OFF';
});

var status_den = document.getElementById('status_den');
var on_den = document.getElementById('on_den');
var off_den = document.getElementById('off_den');
on_den.addEventListener('click', () => {
    status_den.innerText = 'ON';
});
off_den.addEventListener('click', () => {
    status_den.innerText = 'OFF';
});

var status_cuaso = document.getElementById('status_cuaso');
var on_cuaso = document.getElementById('on_cuaso');
var off_cuaso = document.getElementById('off_cuaso');
on_cuaso.addEventListener('click', () => {
    status_cuaso.innerText = 'ON';
});
off_cuaso.addEventListener('click', () => {
    status_cuaso.innerText = 'OFF';
});