// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let likes = document.getElementsByClassName('like-glyph')
for (let like of likes){
  like.addEventListener('click', () => {
    like.innerText = FULL_HEART
    like.classList.toggle('activated-heart')
    
    mimicServerCall()
    .then(function(result) {
      console.log(result)
    })
    .catch(function(error) {
      let modal = document.getElementById('modal');
      document.getElementById('modal-message').innerText = error;
      setTimeout(function() {modal.className = "hidden"}, 5000);
    });
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
