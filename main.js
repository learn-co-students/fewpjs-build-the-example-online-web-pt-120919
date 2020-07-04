// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let hearts = document.getElementsByClassName('like-glyph')

for (let glyph of hearts){
  glyph.addEventListener('click', function(){
    likeFunction(glyph)
  });
}


function likeFunction(glyph){
  console.log(glyph)

  if (glyph.innerHTML == EMPTY_HEART){
    mimicServerCall()
    .then(resp => {
      glyph.innerHTML = FULL_HEART;
      glyph.classList.add("activated-heart")
    })

    .catch(function(error) {
      let errorModal = document.getElementById('modal')
      errorModal.classList.remove('hidden')

      document.getElementById('modal-message').innerHTML = error
      setTimeout(function(){ errorModal.classList.add('hidden'); }, 5000);
    });
  }

  if (glyph.innerHTML == FULL_HEART){
    glyph.innerHTML = EMPTY_HEART;
    glyph.classList.remove("activated-heart")
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
