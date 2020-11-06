const roomData = require('../models/createRoom');

//GET



//POST
exports.postPlayerLobby = (req,res) =>
{
    console.log(roomData.activeRooms)
    console.log(req.body)

    //Check if room key is valid
    if(roomData.activeRooms.get(req.body.roomKey))
    {
        console.log("Room Exists")
        res.render('playerLobby', {title: 'Welcome to The Lobby', errorMessage:req.flash('error')});
    }
    else{
        console.log("Room Does No Exist")
        //Error Room Key Not Valid
        req.flash('error', 'Invalid Room Code')
        return res.redirect('/')
    }

}
