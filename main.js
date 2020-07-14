// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const modal = document.querySelector('#modal')
modal.className = "hidden"

const hearts = document.getElementsByClassName('like-glyph')
console.log(hearts)

mimicServerCall()
.then(() => {
  for (heart of hearts) {
    heart.addEventListener("click", (e) => {
      let h = e.target
      if (h.innerHTML === EMPTY_HEART) {
        h.innerHTML = FULL_HEART
        h.className = "activated-heart"
      } else {
        h.innerHTML = EMPTY_HEART
        h.className = ""
      }
      //console.log(e)
      //e.target.innerHTML = FULL_HEART
      //e.target.className = "activated-heart"
    })
  }
})
// Your JavaScript code goes here!



  
  .catch(function(error) {
    modal.className = ""
    const modalMessage = document.querySelector('#modal-message')
    modalMessage.innerHTML = error 
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
