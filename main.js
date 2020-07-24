// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.querySelector('#modal').className = "hidden" // Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads

let glyphStates = {
    "♡": "♥",
    "♥": "♡"
};

let colorStates = {
    "red": "",
    "": "red"
};

let articleHearts = document.querySelectorAll(".like");

function likeCallback(e) {
    let heart = e.target;
    mimicServerCall("bogusUrl") // Invoke mimicServerCall to simulate making a server request
        .then(function(serverMessage) {
            heart.innerText = glyphStates[heart.innerText];
            heart.style.color = colorStates[heart.style.color];
        })
        .catch(function(error) {
            document.getElementById("modal").className = ""; // Display the error modal by removing the .hidden class
        });
}

for (let glyph of articleHearts) {
    glyph.addEventListener("click", likeCallback);
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
