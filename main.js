// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let glyphType = {
  "♡": "♥",
  "♥": "♡"
};

let colorType = {
  "red" : "",
  "": "red"
};


let likeBtn = document.querySelectorAll(".like")

function likeAction(e) {
  let heart = e.target
    mimicServerCall("url")
    .then(function() {
      heart.innerHTML = glyphType[heart.innerHTML]
      heart.style.color = colorType[heart.style.color]
    })
    .catch(function(error) {
      modal = document.getElementById("modal")
      modal.className = ""  
    })
}
for (let glyph of likeBtn) {
  glyph.addEventListener("click", likeAction);
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
