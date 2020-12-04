const txtInput = document.querySelector("#txtInput");

const btnTranslate = document.getElementsByTagName("button");

var divOutput = document.getElementById("divOutput");

let apiUrl = "https://api.funtranslations.com/translate/groot.json";

function getUrl(inputText) {
  return apiUrl + "?text=" + inputText;
}

function errorHandler(error) {
  console.log(error);
  alert("Something went wrong! Please try after sometime");
}

function eventHandlerOfTranslate() {
  var input = txtInput.value;

  if (input === "") {
    alert("Please enter text and then click on translate");
    return;
  }
  fetch(getUrl(input))
    .then((response) => response.json())
    .then((json) => (divOutput.textContent = json.contents.translated))
    .catch(errorHandler);
}

document
  .querySelector("#btnTranslate")
  .addEventListener("click", eventHandlerOfTranslate);
