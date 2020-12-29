class Game{
    constructor(){

    }

    getState(){
    
        var gamestateref =  database.ref('gamestate')
        gamestateref.on("value", function(data){
            gamestate = data.val
        }) 
        }
    
    
}