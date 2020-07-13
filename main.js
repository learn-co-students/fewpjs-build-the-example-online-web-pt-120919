// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const modal = document.querySelector("#modal")
modal.className = "hidden"

const hearts = document.getElementsByClassName("like-glyph")
for (heart of hearts) {
  heart.addEventListener("click", (e) => {
    mimicServerCall()
    .then(() => {
      if (e.target.innerHTML === EMPTY_HEART) {
        e.target.innerHTML = FULL_HEART
        e.target.className = "activated-heart"
      } else {
        e.target.innerHTML = EMPTY_HEART
        e.target.className = "like-glyph"
      }
    }
    )
    .catch((error) => {
      modal.className = ""
      const modalMessage = document.querySelector("#modal-message")
      modalMessage.innerHTML = error
      setTimeout(() => {
        modal.className = "hidden"
      }, 5000);
    })
  })
}

// Your JavaScript code goes here!





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
