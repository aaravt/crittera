var firebaseConfig = {
      apiKey: "AIzaSyClBHiivzjNrKOfdlfAh0JJYIcWhbzV6uo",
      authDomain: "crittera-4296c.firebaseapp.com",
      databaseURL: "https://crittera-4296c-default-rtdb.firebaseio.com",
      projectId: "crittera-4296c",
      storageBucket: "crittera-4296c.appspot.com",
      messagingSenderId: "526937691169",
      appId: "1:526937691169:web:5ec5c91cb716c16457ff60"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
username=localStorage.getItem("userName").value;
document.getElementById("userName").innerHTML="welcome" + username + "!";

function addRoom() {
   roomName=document.getElementById("roomName")
     firebase.database().ref("/").child(roomName).update({
           purpose="adding room"
     }) 
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name -"+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML +=row;
            });
      });}
      getData();
