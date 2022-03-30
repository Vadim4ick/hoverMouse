const board = document.querySelector("#board"); //забираем саму 'доску' по id
const SQUARS_NUMBER = 500; //прописываем 500 квадратиков
const colors = [
  "red",
  "orange",
  "green",
  "yellow",
  "blue",
  "#1164B4",
  "purple",
]; // забираем цвета, которыми должны гореть квадратики

for (let i = 0; i < SQUARS_NUMBER; i++) {
  // мы будем 500 раз пробегаться по SQUARS_NUMBER и на каждой операции мы будем создавать:

  const square = document.createElement("div"); // ВСЕГДА, что бы динамически создать любой HTML документ, мы будем обращаться к его функции createElement и в строковом формате, мы говорим, какой тег надо создать (В нашем случае - див )

  square.classList.add("square"); //для того, что бы этот квадратиком был квадратиком со стилями мы просто прибавляем ему класс который мы прописали в css

  square.addEventListener("mouseover", () => setColor(square)); // событие моусовер будет вызываться тогда, когда мы будем наводить мышь на определенный квадрат, сделал я кстати эти 2 ф-ции по разному, выбирай удобный способ, РАЗЛИЧИЕ ТОЛЬКО В ТОМ, ЧТО В ЭТОМ СЛУЧАЕ БУДЕТ В Ф-ЦИИ ELEMENT, а во ВТОРОМ - EVENT и передаем сам квадратик, на который я буду наводить мышку

  square.addEventListener("mouseleave", removeColor); //событие моуслив будет вызываться тогда, когда мы будем отводить мышь от квадратика и она должна гасить его

  board.append(square); // теперь мы должны добавить квадраты в сам HTML (Просто он у нас только виртуально создан) и теперь при помощи append мы его заносим в сам board, но ты ОБЯЗАТЕЛЬНО должен контейнеру в стилях прописать flex Wrap иначе не заработает!
}

function setColor(element) {
  const color = randomColors(); //забираем рандомный цвет в переменную
  element.style.backgroundColor = color; //прописываем, что при наведении мыши будет создаваться рандомный цвет
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color} `;
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

// function randomColors() {
//   const index = Math.floor(Math.random() * colors.length);
//   return colors[index];
//}

function randomColors() {
  return colors[Math.floor(Math.random() * colors.length)];
} //делаем рандомные цвета, путем создания рандомного числа и при помощи св-ва ретурн мы будем возвращать его

let arr = [1, 3, 4, 5, 7];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
