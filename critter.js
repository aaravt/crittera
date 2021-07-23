function adduser() {
    username=document.getElementById("userName").value
localStorage.setItem("userName" , username)
window.location("critter_room.html")
}
