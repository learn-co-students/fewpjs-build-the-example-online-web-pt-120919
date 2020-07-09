// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hidden = document.querySelector("#modal")
hidden.className = "hidden"

const hearts = document.querySelectorAll(".like-glyph")

for (let heart of hearts) {
  heart.addEventListener('click', (e) => {
    mimicServerCall('url')
    .then(() => {
      if (e.target.innerHTML == EMPTY_HEART) {
        e.target.innerHTML = FULL_HEART
        e.target.classList.add('activated-heart')
      }
      else {
        e.target.innerHTML = EMPTY_HEART
        e.target.classList.remove('activate-heart')
      }
    })
    .catch((err) => {
      console.error(err)
      setTimeout(() => hidden.className = '', 5000)
      hidden.className = 'hidden'
    })
  })
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
