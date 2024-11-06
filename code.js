
//We In javascript now 
var gameStart = false;
var Score = 0;
var time = 60;
var loop;

function StartingGame(){
    
    if(gameStart == false){
        
        
        loop = setInterval(Timer, 1000)
    }
    moveButton();
    gameStart = true;
}

function moveButton(){
    var newLocationX = Math.floor((Math.random() * -2000)+1000)//this make the img move between -1000 to 1000 on the X axis
    var newLocationY = Math.floor((Math.random() * -900 )+ 1000)//this make the img move between 100 to 1000 on the Y axis
    document.getElementById("startGame").style.marginLeft = newLocationX + "px" //sets the buttons x value
    document.getElementById("startGame").style.marginTop = newLocationY + "px"//sets the buttons y value
    Score++;
    //adds the score
    document.getElementById("SCORE").innerHTML = "SCORE: " + Score;
}
function Timer(){
    //reduces the time
    time--
    document.getElementById("timeLEft").innerHTML = time;
    if(time <= 0){
        clearTimeout(loop) // stops the timer

        //checks the score and declores the end
        if(Score > 30){
            document.getElementById("startMessage").innerHTML = "YOU WON, REFRESH THE PADGE TO GET A HIGHER SCORE"
        }
        else{
            document.getElementById("startMessage").innerHTML = "YA LOOSE, REFRESH THE PADGE TO TRY AGAIN"
        }
    }
    //if i knew how to auto refresh the page, i will add a button that resets the game
    
}