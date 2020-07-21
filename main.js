// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener ("DOMContentLoaded", () => {
  const modal = document.querySelector('#modal')
  //const hearts = document.querySelectorAll("span.like-glyph")
  const hearts = document.getElementsByClassName("like-glyph")
  //have a collection of hearts
  //want to add event listener to each heart
  likePost(hearts);
})


const likePost = (hearts) => {
  for (const heart of hearts){
    heart.addEventListener("click", (e) => {
      //make a server call
      mimicServerCall() //returns a promise; promises have the .then() function
        .then(() => {
          //when successful, change the heart
          //if its empty, make it full, add new class
          if (heart.innerHTML == EMPTY_HEART){
            heart.innerHTML = FULL_HEART
            heart.className = "activated-heart"
          } else { //else if its full, make it empty
            heart.innerHTML = EMPTY_HEART
            heart.className = "like-glyph"
          }
        }) 
        .catch(error => {
          modal.hidden = false
          const modalMessage = document.querySelector("#modal-message")
          modalMessage.innerText = error
          setTimeout(() => {
            //do this during timeout
            modal.hidden = true
          }, 5000)
        })
    })
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


//When you make a fetch request – fetch(), you return a promise

//fetch() => mimicServerCall() -- BEING USED LIKE A FETCH REQUEST
//.then(resp => resp.json) => take the promise object and jsonify it
//.then() => take our new json object with the data and do something with it
//.catch() => handle the error, if the promise was rejected


 // 2 .thens 
  //1. takes response and jsonify it (we only jsonify OBJECTS so we don't need the first .then here)
  //2. take the jsonified response and do something with it