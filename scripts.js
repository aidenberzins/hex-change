const button = document.querySelector("button");
const hexSpan = document.querySelector("span");
const bg = document.querySelector("body");

button.addEventListener("click", function() {
  let hex = generateHexCode();
  hexSpan.innerHTML = hex;
  bg.style.backgroundColor = hex;
});

const generateHexCode = () => {
  const variables = "0123456789ABCDEF";
  let colorCode = "#";
  for (i = 0; i < 6; i++) {
    colorCode += variables[Math.floor(Math.random() * variables.length)];
  }
  return colorCode;
};
