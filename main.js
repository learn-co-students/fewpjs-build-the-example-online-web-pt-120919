  
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', (event) => {
  console.log(EMPTY_HEART);
  mimicServerCall()
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(function(error) {
    alert(error.message);
    console.log(error.message);
    let errorMessageHTML = document.getElementById('modal')
    errorMessageHTML.style.visibility = "visible";
    setTimeout(function(){ errorMessageHTML.style.visibility = "hidden"; }, 5000);
  });
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
