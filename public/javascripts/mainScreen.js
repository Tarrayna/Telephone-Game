const newGameButton = document.getElementById('startNewGame-btn')


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
