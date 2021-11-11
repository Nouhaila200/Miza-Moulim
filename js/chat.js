function getTime(){
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if(hours < 10){

     hours = "0"+ hours;

    }
    if(minutes < 10){

        hours = "0"+ minutes;
   
    }

    let time = hours + ":" + minutes
    return time;
}
function firstBotMessage(){
 
    let firstMessage = "service MIZA bienvenue! "
    document.getElementById("botStarterMessage").innerHTML ='<p class="botText"><span>' + firstMessage +'</span></p>';
   

    $("#chat-timestamp").append(getTime());
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();
function getBotResponse(input)
{
   if(input== "Bonjour" | input=="bonjour"){
       return "Comment je peux vous aider?";
  
  }else if(input =="Merci"|input=="merci"|input=="Au revoir"|input=="au revoir"){
      return "BIENVENUE CHEZ NOUS!";
  }else{
    return"   tel:(+212) 05 24 62 11 60  Email:info@mizaequipement.com" 
  }
}

function getHardResponse(userText)
{
    let botResponse = getBotResponse( userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';


    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getResponse(){
    let userText = $("#textInput").val();
    if(userText == ""){

        userText = "👍";

    }
    let userHtml= '<p class="underText"><span>'+ userText + '</span></p>';
     $("#textInput").val("");
     $("#chatbox").append(userHtml);
     document.getElementById("chat-bar-bottom").scrollIntoView(true);
     setTimeout(() => {
         getHardResponse(userText);
     },1000)

}
function like(){
  getResponse()
}




//press enter to send the messge

$("#textInput").keypress(function(e) {
    if(e.which ==13){
        getResponse();
    }
    
});













/*var openchat=0;
document.addEventListener("click",function(){
    if( openchat ===1){
         
        document.getElementById("content1").style.visibility="hidden";
        document.getElementById("chat-button").style.visibility="hidden";
        
       
       
         openchat =0;
        }else{
           
        document.getElementById("content1").style.visibility="visible";
        document.getElementById("chat-button").style.visibility="visible";
       
         
      
        openchat =1;
        }

    })
   */
  


 
  