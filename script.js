
function generateNumber(maxNumber){
  return Math.round(Math.random() * maxNumber);
}






//Select elements that you will interact with
let button = document.querySelector("button");
let answer = document.querySelector("#answer");

//Add a click event listener to the button
button.addEventListener("click", function() {
  //procedure goes here
  let eightBall = "";

  let randomNumber = generateNumber(8);
  
  switch(randomNumber) {
    case 0:
    eightBall = 'It is decidedly so';
    break;
    case 1:
    eightBall = 'Reply hazy try again';
    break;
    case 2:
    eightBall = 'It is decidedly so';
    break;
    case 3:
    eightBall = 'Cannot predict now';
    break;
    case 4:
    eightBall = 'Do not count on it';
    break;
    case 5:
    eightBall = 'My sources say no';
    break;
    case 6:
    eightBall = 'Outlook not so good';
    break;
    case 7:
    eightBall = 'Signs point to yes';
    break;
    default:
    "Yes!"
  }

  answer.innerHTML = eightBall;
});

