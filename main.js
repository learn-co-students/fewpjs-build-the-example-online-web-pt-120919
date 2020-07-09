  
// Defining text characters for the empty and full hearts for you to use later.

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', (event) => {
  let glyphStates = {
    "♡": "♥",
    "♥": "♡"
  };
  
  let colorStates = {
    "red" : "",
    "": "red"
  };

  let articleHearts = document.querySelectorAll(".like");

  function likeCallback(e) {
    let heart = e.target
  mimicServerCall('url')
  .then(function(serverMessage){
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
  })
  .catch(function(error) {
    alert(error.message);
    let errorMessageHTML = document.getElementById('modal')
    errorMessageHTML.style.visibility = "visible";
    setTimeout(function(){ errorMessageHTML.style.visibility = "hidden"; }, 5000);
  });
}
for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}
})



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
