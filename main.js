// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let hearts = document.getElementsByClassName('like-glyph')

for (const heart of hearts){
  heart.addEventListener('click', function(event){

    mimicServerCall().then(function(response){
      clickedHeart = event.target

      if (clickedHeart.getAttribute("class")){
        clickedHeart.removeAttribute("class")
        clickedHeart.innerText = EMPTY_HEART
      }
      else {
        clickedHeart.setAttribute("class", "activated-heart")
        clickedHeart.innerText = FULL_HEART
      }
      
      return response.json();

    }).catch(function(error){
      const modal = document.getElementById('modal');
      modal.setAttribute("class", "display");

      const modalMessage = document.getElementById('modal-message');
      modalMessage.innerText = error.message;

      setTimeout(function(){modal.setAttribute("class", "hidden")}, 1000)
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
