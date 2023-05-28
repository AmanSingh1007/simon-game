var buttonsColors=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickPattern=[];

var level=0;
var started=false;



$(".btn").on("click",function(){
 var userChosenColour =$(this).attr("id");
userClickPattern.push(userChosenColour );   
 playsound(userChosenColour);
 animatePress(userChosenColour);
 checkAnswer(userClickPattern.length-1)
})
//--------------------------------------------

function checkAnswer(currentLevel) {

              //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
              if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
          
                console.log("success");
          
                //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
                if (userClickPattern.length === gamePattern.length){
          
                  //5. Call nextSequence() after a 1000 millisecond delay.
                  setTimeout(function () {
                    nextSequence();
                  }, 1000);
          
                }
          
              } else 
              
              {
          
                console.log("wrong");
                playsound("wrong");
                $("body").addClass("game-over");
                setTimeout(function(){
                            $("body").removeClass("game-over");      
                },200);

                $("h1").text("Game Over, Press Any Key to Restart");
                startOver();
          
              }
          
          }
//--------------------------------------------
function startOver(){
              level=0;
              started=false;
              gamePattern=[];
}
//--------------------------------------------
$(document).keypress(function(){
              if(!started){
                            nextSequence();
                            started=true;
              }
});
//-------------------------------------------

function nextSequence(){
             // once nextsequence is triggred,set userClickPattern empty
 userClickPattern=[];            
 var randomNo= Math.floor(Math.random()*4);
 var randomChosenColor= buttonsColors[randomNo];
 gamePattern.push(randomChosenColor);
 level+=1;
 $("h1").text("Level "+ level);

 $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
 
 playsound(randomChosenColor);

}

//------------------------------------
function playsound(name){

var audio=new Audio("./sounds/"+name+".mp3");
audio.play();

}

//-----------------------------------
function animatePress(currentColor){
      $("#"+currentColor).addClass("pressed"); 
      setTimeout(function(){
              $("#"+currentColor).removeClass("pressed"); 
      },100);      ``
}
//-------------------------------------

