const buttons = document.querySelectorAll("#keyboard button");
const outputArea = document.querySelector("#output");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const keyText = button.textContent;
    if (keyText === "SPACE") {
      outputArea.textContent += " ";
    }
    else if(keyText ==="BACKSPACE"){
      backspaceButton();
    } else {
      outputArea.textContent += keyText;
    }
  });
});

//Highlight on button click.
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("clicked");
    setTimeout(() => {
      button.classList.remove("clicked");
    }, 200);
  });
});

backspaceButton = () => {
  let outputText = outputArea.textContent;
  outputText = outputText.slice(0, -1);
  outputArea.textContent = outputText;
}