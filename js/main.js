// Завдання 1
console.log("Завдання 1");


// Створити галерею зображень, 
// яку можна прогортати за допомогою клавіш клавіатури 
// (наприклад, вліво / вправо)

const imageRef = document.querySelectorAll(".image");

const modal = document.createElement("div");
modal.classList.add("full-image-container");
document.body.appendChild(modal);

const modalImg = document.createElement("img");
modalImg.classList.add("full-image");
modal.appendChild(modalImg);

let currentIndex = 0;

imageRef.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    modalImg.src = img.src;
    modal.style.display = "block";
  });
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

document.addEventListener("keydown", (event) => {
  if (modal.style.display === "block") {
    if (event.key === "Escape") {
      modal.style.display = "none";
    } else if (event.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % imageRef.length;
      modalImg.src = imageRef[currentIndex].src;
    } else if (event.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + images.length) % imageRef.length;
      modalImg.src = imageRef[currentIndex].src;
    }
  }
});



// Завдання 2
console.log("Завдання 2");

// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити, 
// після чого рендериться колекція. 
// При натисканні на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає 1 параметр amount — число. 
// Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.
// Кожен створений div:
// Має випадковий rgb колір фону;
// Розміри найпершого div — 30px на 30px;
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на 10px;
// Створи функцію destroyBoxes(), яка очищає div#boxes.;

const inputRef = document.querySelector('input[type="number"]');
const createButton = document.querySelector('button[data-action="render"]');
const deleteButton = document.querySelector('button[data-action="destroy"]');
const boxesContainer = document.querySelector("#boxes");

const createBoxes = (amount) => {
    let size = 30;

    for (let i = 0; i < amount; i += 1) {
        const box = document.createElement("div");        

        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = setColor();
        boxesContainer.append(box);

        size += 10;
    };
};

const setColor = () => {
    const r = Math.round(Math.random() * (255 - 1) + 1);
    const g = Math.round(Math.random() * (255 - 1) + 1);
    const b = Math.round(Math.random() * (255 - 1) + 1);
    return `rgb(${r}, ${g}, ${b})`;
};

createButton.addEventListener("click", () => {
    const amount = Number(inputRef.value);
    createBoxes(amount);
});

const destroyBoxes = () => {
    boxesContainer.innerHTML = "";
};

deleteButton.addEventListener("click", destroyBoxes);