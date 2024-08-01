let boxResult = document.querySelector(".boxResult");
let creatBoxActionBtn = document.querySelector(".creatBoxActionBtn");

let boxCreatorObj = {};

const boxCreator = (event) => {
  let { name, value } = event.target;
  boxCreatorObj[name] = value;
};

creatBoxActionBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let { width, height, radius, color } = boxCreatorObj;
  console.log(width, height, radius, color);
  boxResult.style.width = `${width}px`;
  boxResult.style.height = `${height}px`;
  boxResult.style.borderRadius = `${radius}px`;
  boxResult.style.backgroundColor = color;
});
let LenghtResult = document.querySelector(".lenght_Result");

const wordLenght = (event) => {
  let { value } = event.target;
  let arr = value.split(" ");
  LenghtResult.textContent = arr.length;
};
let fileSizeResultSpan = document.querySelector(".fileSizeResultSpan");
const fileSize = (event) => {
  let { files } = event.target;
  let fileSize = files[0].size;
  fileSizeResultSpan.textContent = `${fileSize}KB`;
};
let lorem = document.querySelector("#lorem");

const openBracket = (event) => {
  let formSpan = document.querySelector(".formSpan");
  let { value } = event.target;
  let openBracketCount = 0;
  let closeBracketCount = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] === "(") {
      openBracketCount++;
    } else if (value[i] === ")") {
      closeBracketCount++;
    } else if (value[i] !== ")") {
      lorem.textContent = "";
      return (formSpan.textContent = "Noto'g'ri qavslar");
    } else if (value[i] !== "(") {
      lorem.textContent = "";
      return (formSpan.textContent = "Noto'g'ri qavslar");
    }
    if (openBracketCount === closeBracketCount) {
      formSpan.textContent = `Teng ${
        openBracketCount + closeBracketCount
      } ta qavslar`;
    } else {
      formSpan.textContent = `Teng emas ${Math.abs(
        closeBracketCount - openBracketCount
      )} ta qavslar`;
    }
  }
};
