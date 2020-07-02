// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
window.addEventListener('DOMContentLoaded', (event) => {
  let likeButtons = document.getElementsByClassName('like');
  for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].lastChild.addEventListener('click', like);
  }
});

function like() {
  if (this.innerHTML == FULL_HEART) {
    this.innerHTML = EMPTY_HEART;
    this.className = "like-glyph";
  } else {
    mimicServerCall()
    .then(() => {
      this.innerHTML = FULL_HEART;
      this.className += " activated-heart";
    })
    .catch((error) => {
      const errorModal = document.getElementById('modal');
      let modalMessage = document.getElementById('modal-message');
      errorModal.className = "";
      modalMessage.innerHTML = error;
      setTimeout(hideModal, 5000);
    });
  }
}

function hideModal() {
  const errorModal = document.getElementById('modal');
  errorModal.className = "hidden";
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
