// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// get all like elements
const likes = document.getElementsByClassName("like");
// add event listener to elements 
for (let glyph of likes) {
  glyph.addEventListener("click", function(e){
    
    mimicServerCall()
      .then(function(serverMessage) {
        changeHeart(e);
    }).catch(function(error){ 
      document.getElementById("modal").className = "";
      document.getElementById("modal").innerText += ` ${error}`
      setTimeout(function(){ 
        document.getElementById("modal").className = "hidden";
        document.getElementById("modal").innerText = "Error!";
      }, 5000);
    });
  });
}

function changeHeart(event){
  //click on the like area
  if (event.target.querySelector("span")) {
    let heart = event.target.querySelector("span").innerText;
    // change heart
    if (heart == EMPTY_HEART){
      event.target.querySelector("span").innerText = FULL_HEART;
      event.target.querySelector("span").className = "activated-heart";
    } else {
      event.target.querySelector("span").innerText = EMPTY_HEART;
      event.target.querySelector("span").className = "like-glyph";
    }
  } 
  //specefic click on the heart
  else {
    let heart = event.target.innerText;
    // change heart
    if (heart == EMPTY_HEART){
      event.target.innerText = FULL_HEART;
      event.target.className = "activated-heart";

    } else {
      event.target.innerText = EMPTY_HEART;
      event.target.className = "like-glyph";

    }
  }
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
