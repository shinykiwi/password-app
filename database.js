var firebaseConfig = {
  apiKey: "AIzaSyC4prHzu1sgv8ucS5fKTtx0XTcVl8tnmjw",
  authDomain: "password-app-519f3.firebaseapp.com",
  databaseURL: "https://password-app-519f3-default-rtdb.firebaseio.com/",
  projectId: "password-app-519f3",
  storageBucket: "password-app-519f3.appspot.com",
  messagingSenderId: "57679699233",
  appId: "1:57679699233:web:fb06c9e0b8977d9227b260"
};

firebase.initializeApp(firebaseConfig);


var database = firebase.database();
var ref = database.ref("users");

var userData = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com"
};

ref.set(userData);

function updateContent() {
    var inputValue = document.getElementById("myTextbox").value;


    var userData = {
      name: "John Doe",
      age: 30,
      email: "johndoe@example.com"
    };

    ref.set(userData);
    document.getElementById("result").innerHTML = 5;
}