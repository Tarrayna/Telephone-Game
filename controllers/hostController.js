const roomData = require('../models/createRoom');

//GET
exports.getHostLobby =  (req, res) =>
{
    //Create Host Instance
    console.log("Create New Host Instance")
    res.render('hostLobby', {title: 'Welcome to The Lobby'});
};


//POST