//This is the Javascript file for my game
// Global variables for the game
var obstacles = document.getElementById("obstacles");
var hole = document.getElementById("hole");
var gameCharacter = document.getElementById("gameCharacter");
var jumping = 0;
var counter = 0;

//Animation for the Obstacles generation
hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*400)+200);
    hole.style.top = random + "px";
    counter++;
});

//This is the gravity code for the game character [Reused code from KnifeCircus]
setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(gameCharacter).getPropertyValue("top"));
    if(jumping==0){
        gameCharacter.style.top = (characterTop+3)+"px";
    }
    var obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
	//Hit detection
    if((characterTop>480)||((obstaclesLeft<20)&&(obstaclesLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("GAME OVER ! Your final Score was: " + (counter - 1));
        gameCharacter.style.top = 100 + "px";
        counter=0;
    }
},10);

// Jump function for the game character[Reused code from KnifeCircus]
function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(gameCharacter).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            gameCharacter.style.top = (characterTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}