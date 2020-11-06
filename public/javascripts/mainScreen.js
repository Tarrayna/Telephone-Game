const errorMessage = document.getElementById('errorMessage')
var body = XMLHttpRequest.response;

const setError = ()=>
{
    errorMessage.hidden = false;
}

function doThings(){
    console.log("Do Things")
    errorMessage.hidden = false;
}

body.addEventListener('')


newGameButton.addEventListener('click', async _ =>
{

    var message = JSON.stringify({action: "createNewRoom"})
    console.log("Button Pressed")
    var data = {name:"John"}
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", '/', true); // false for synchronous request
    xmlHttp.setRequestHeader("Content-type", "application/json");
    xmlHttp.send(message);
})
