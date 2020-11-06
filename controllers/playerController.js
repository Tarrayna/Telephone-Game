const roomData = require('../models/createRoom');

//GET



//POST
exports.postPlayerLobby = (req,res) =>
{
    console.log(req.body)
    //Check if room key is valid
    console.log("New ROOM: " + req.body.newGameBtn)
    console.log('Old room: ' + req.body.roomKey)
    if(roomData.activeRooms.has(req.body.roomKey))
    {
        console.log("Room Exists")
        res.render('playerLobby', {title: 'Welcome to The Lobby'});
    }
    else if(req.body.newGameBtn){
        res.render('hostLobby', {title: 'Welcome to The Lobby'});
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
