// ArslonBek Ro'ziboyev, [01/08/2024 12:22]
// Ixtiyoriy to'rtta input htmlda yaratilsin. Biriga to'rtburchakni width tomoni, ikkinchisiga  height tomoni kiritilsin, uchunchisiga radius va to'rtinchisiga rang berilsin. Alohida button bosilganda htmlda shu o'lchamlarga va rangga ega shakl hosil qilinsin.

// #Lesson-7 task-3

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

// ArslonBek Ro'ziboyev, [01/08/2024 12:22]
// HTML da textarea elementni yaratilsin. Shu textarea elementni ichida nechta so'z yozilgani topilsin.

// #Lesson-8 task-1

// ArslonBek Ro'ziboyev, [01/08/2024 12:22]
// Textarea elementi yaratilsin. Shu element ichiga ixtiyoriy matn qo'yilsin. Boshqa alohida blockda input elementi qo'yilsin. Input elementi ichiga yozilgan so'z textarea ichidagi matnda bor yoki yo'qligi aniqlansin. Bu vazifani bajarishda siz loop elementlaridan, onclick yoki onkeyup event laridan foydalanishingiz mumkin bo'ladi.
let LenghtResult = document.querySelector(".lenght_Result");

const wordLenght = (event) => {
  let { value } = event.target;
  let arr = value.split(" ");
  LenghtResult.textContent = arr.length;
};

// #Lesson-8 task-2

// ArslonBek Ro'ziboyev, [01/08/2024 12:22]
// Fayl yuklash uchun input type file yarating. Foydalanuvchi file tanlaganda uning hajmi (o'lchami) KB larda ko'rsatilsin

let fileSizeResultSpan = document.querySelector(".fileSizeResultSpan");
const fileSize = (event) => {
  let { files } = event.target;
  let fileSize = files[0].size;
  fileSizeResultSpan.textContent = `${fileSize}KB`;
};

// #Lesson-8 task-3

// ArslonBek Ro'ziboyev, [01/08/2024 12:22]
// Input ichida ixtiyoriy ravishda qavslar oching. Qavslar yo ochiq "(" yo yopiq ")" turda bo'lishi mumkin. Shu input ichiga yozilgan jami ochuvchi va yopuvchi qavslar soni o'zaro teng yoki teng emasligi aniqlansin.

// #Lesson-8 task-4

const removeLetter = (arr, letter) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== letter) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const openBracket = (event) => {
  let formSpan = document.querySelector(".formSpan");
  let { value } = event.target;
  let openBracketCount = 0;
  let closeBracketCount = 0;
  value = removeLetter(value, " ");
  for (let i = 0; i < value.length; i++) {
    if (value[i] === "(") {
      openBracketCount++;
    } else if (value[i] === ")") {
      closeBracketCount++;
    } else if (value[i] === "") {
      formSpan.textContent = "Noto'g'ri qavslar";
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

