const roomData = require('../models/createRoom');

//GET
exports.getHostLobby =  (req, res, next) =>
{
    //Create Host Instance
    console.log("Create New Host Instance")
    res.render('playerLobby', {title: 'Welcome to The Lobby'});
};




//POST