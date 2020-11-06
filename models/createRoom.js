//variables
const activeRoomsMap = new Map();
exports.activeRooms = activeRoomsMap;

//Room Class
class CreateRoom{
    constructor()
    {
        //Ensure each game gets it's own key word
        this.roomKey = generateKey();
        this.playerList = new Set();

        console.log(this.roomKey)
        while(activeRoomsMap.get(this.roomKey) !== undefined)
        {
            this.roomKey = generateKey();
        }
        //Add newly created room to room map
        activeRoomsMap.set(this.roomKey, this)

        //Adding Default Settings
        this.playerCount = 8;
        this.numberRounds = Math.round(this.playerCount/2);
        this.drawTimer = 60;
        this.guessTimer = 30;
        //TODO: Word bank list.
        //TODO: Black List Players
        //TODO:Some type of host tracker
    }
    getKey(){
    return this.roomKey;
    }
    getPlayerCount(){
        return this.playerCount;
    }
    createRoom (){
        return new CreateRoom();
    }

}

//generates room keys. Use format: const {token} = require("morgan")
const crypto = require('crypto')
function generateKey(){
    return crypto.randomBytes(4).toString('hex')
}

//removes room
function removeRoom(key)
{
    activeRoomsMap.delete(key)
}

const room1 = new CreateRoom();
const room2 = new CreateRoom();
const room3 = new CreateRoom();

//TODO: Remove this when done debugging
activeRoomsMap.set(room1.getKey(), room1)
activeRoomsMap.set(room2.getKey(), room2)
activeRoomsMap.set(room2.getKey(), room2)

//Exports
exports.CreateRoom = CreateRoom