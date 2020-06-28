// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const likeGlyphs = document.querySelectorAll(".like")
// Your JavaScript code goes here!

function likeCallback(e) {
  console.log("Liked!")
  let heart = e.target.firstElementChild
  mimicServerCall("randomurl")
  .then(function(json){
    if (heart.innerHTML === EMPTY_HEART) {
      heart.innerHTML = FULL_HEART;
      heart.className = "activated-heart";
    } else {
      heart.innerHTML = EMPTY_HEART;
      heart.className = "";
    }
  })
  .catch(function(error) {
    alert(error.message);
    document.getElementById("modal").className = "";
    setTimeout(function(){document.getElementById("modal").className = "hidden";}, 5000)
  });
}

likeGlyphs.forEach(element => element.addEventListener("click", likeCallback))




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
