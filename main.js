// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.querySelectorAll('.like-glyph')
hearts.forEach(heart => heart.addEventListener("click", addLike))

function addLike(e){
let heart = e.target
  mimicServerCall()
  .then(json => {
  
  if (heart.innerHTML === EMPTY_HEART){
     heart.innerHTML = FULL_HEART
     heart.className = "activated-heart"

  } else if (heart.innerHTML === FULL_HEART){
     heart.innerHTML = EMPTY_HEART
     heart.className = ""
  }
})
.catch((error) =>{
  const errorModal = document.getElementById('modal')
  const errorMessage = document.getElementById('modal-message')
  errorModal.className = ""
  errorMessage.innerHTML = error
  setTimeout(function(){
    errorModal.className = "hidden"
  },5000)
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
