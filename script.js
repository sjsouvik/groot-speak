//Selecting elements from document
const txtInput = document.querySelector("#txtInput");
const btnTranslate = document.querySelector("#btnTranslate");
var divOutput = document.getElementById("divOutput");

//URL of the api
let apiUrl = "https://api.funtranslations.com/translate/groot.json";

//this function will return the url after appending the user input to fetch api
function getUrl(inputText) {
  return apiUrl + "?text=" + inputText;
}

//callback for any error while fetching output from the api
function errorHandler(error) {
  console.log(error);
  alert("Something went wrong! Please try after sometime");
}

function eventHandlerOfTranslate() {
  var input = txtInput.value; //taking input value which has been given by user
  // if there's no user input then it will show an alert
  if (input === "") {
    alert("Please enter text and then click on translate");
    return;
  }
  // fetching the output from api and assigning that as output
  fetch(getUrl(input))
    .then((response) => response.json())
    .then((json) => (divOutput.textContent = json.contents.translated))
    .catch(errorHandler);
}

//attched event and eventHandler for Translate button
btnTranslate.addEventListener("click", eventHandlerOfTranslate);
