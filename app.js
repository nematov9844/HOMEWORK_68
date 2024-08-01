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

let textw = document.querySelector(".textw");
let done = document.querySelector(".done");
let words = document.getElementById("words");
done.addEventListener("click", (e) => {
  e.preventDefault();
  let result = document.querySelector(".wordResult");
  let result2 = document.querySelector(".wordResult2");
  let arr = words.value.split(" ");
  textw = textw.value.split(" ");
  let bor = [];
  let yoq = [];
  console.log(arr);
  console.log(textw);
  for (let i = 0; i < textw.length; i++) {
    if (arr.includes(textw[i])) {
      bor.push(textw[i]);
    } else if (!arr.includes(textw)) {
      yoq.push(textw[i]);
    }
    if (bor.length > 0 && yoq.length > 0) {
      result2.textContent = `${yoq.join(",")} bu so'zlar yo'q`;
      result.textContent = `${bor.join(",")} bu so'zlar bor`;
    } else if (yoq.length > 0) {
      result2.textContent = `${yoq.join(",")} bu so'zlar yo'q`;
      result.remove();
    } else if (bor.length > 0) {
      result.textContent = `${bor.join(",")} bu so'zlar bor`;
      result2.remove()
    }
  }
});
// 
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
// 
document.onkeydown = function(e) {
  if(e.keyCode == 123) { // F12 tugmasi
      return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Ctrl+Shift+I
      return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { // Ctrl+Shift+C
      return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { // Ctrl+Shift+J
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { // Ctrl+U
      return false;
  }
};
// 
setInterval(function(){
  debugger;
}, 100);
// 
function decrypt(encodedString) {
  return atob(encodedString);
}
eval(decrypt('Y29uc29sZS5sb2coIkJ1IGtvcm9kaW5naXogaGltb3lhbGFuZ2FuIik7'));
// 