//variables
const activeRooms = new Map();

//Room Class
class CreateRoom{
    constructor()
    {
        //Ensure each game gets it's own key word
        this.roomKey = generateKey();
        this.playerList = new Set();

        console.log(this.roomKey)
        while(activeRooms.get(this.roomKey) !== undefined)
        {
            this.roomKey = generateKey();
        }
        //Add newly created room to room map
        activeRooms.set(this.roomKey, this)

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

}

//generates room keys. Use format: const {token} = require("morgan")
const crypto = require('crypto')
function generateKey(){
    return crypto.randomBytes(4).toString('hex')
}

//removes room
function removeRoom(key)
{
    activeRooms.delete(key)
}



