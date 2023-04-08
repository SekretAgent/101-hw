// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyC-jwCDPCZaE_T9Ih1s31mXeGLGI4pcdTI",
    authDomain: "chatapp-dc744.firebaseapp.com",
    databaseURL: "https://chatapp-dc744-default-rtdb.firebaseio.com",
    projectId: "chatapp-dc744",
    storageBucket: "chatapp-dc744.appspot.com",
    messagingSenderId: "798892324611",
    appId: "1:798892324611:web:6a03e7be63d2399791db36",
    measurementId: "G-SLXFL7Y2BL"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
}



