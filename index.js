/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

const greeting = document.getElementById('greeting');

/* Write your implementation of greet() */
function greet(timeString) {
  const timeArray = timeString.split(":");
  const parsedTimeArray = []
  for (let i = 0; i < timeArray.length; i++) {
    parsedTimeArray.push(parseInt(timeArray[i]));
  }
  const joinedArray = parsedTimeArray.join(".");
  if (joinedArray < 12.00) {
    return "Good Morning";
  } else if (12.00 <= joinedArray && joinedArray <= 17.00) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  greeting.innerText = string;
  // return(string);
}
