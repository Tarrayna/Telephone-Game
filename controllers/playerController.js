const roomData = require('../models/createRoom');

//GET



//POST
exports.postPlayerLobby = (req,res) =>
{
    console.log(req.body)
    //Check if room key is valid
    console.log("New ROOM: " + req.body.newGameBtn)
    const roomKey = JSON.stringify(req.body.roomKey);
    console.log('Old room: ' + roomKey)
    if(roomData.activeRooms.has(roomKey))
    {
        console.log("Room Exists")
        res.render('playerLobby', {title: 'Player Lobby', roomKey: roomKey});
    }
    else if(req.body.newGameBtn){
        const newRoom = new roomData.CreateRoom();
        roomData.activeRooms.set(newRoom.getKey(), newRoom);
        res.render('hostLobby', {title: 'Host Lobby', roomKey: newRoom.getKey()});
    }
    else{
        console.log("Room Does No Exist")
        //Error Room Key Not Valid
        //TODO:Remove key when done debugging
        const getAKeyForTesting = roomData.activeRooms.keys().next().value;
        req.flash('error', `Invalid Room Code try ${getAKeyForTesting}`)
        return res.redirect('/')
    }

}