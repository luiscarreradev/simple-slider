const urlDogs = `https://dog.ceo/api/breeds/image/random/10`;
const sliderContainer = document.querySelector(".container_frame");
const frame = document.querySelector(".frame");
const next = document.querySelector(".bi-arrow-right");
const prev = document.querySelector(".bi-arrow-left");

let listOfDogs = [];
let index = 0;

const getImages = async () => {
  const response = await fetch(urlDogs);
  const data = await response.json();
  const image = data.message;
  image.forEach((img) => {
    listOfDogs.push(img);
  });
  frame.src = listOfDogs[index];
};

document.addEventListener("DOMContentLoaded", () => {
  getImages();
});

next.addEventListener("click", () => {
  if (index === listOfDogs.length - 1) {
    index = 0;
  } else {
    index++;
  }
  frame.src = listOfDogs[index];
});

prev.addEventListener("click", () => {
  if (index === 0) {
    index = listOfDogs.length - 1;
  } else {
    index--;
  }
  frame.src = listOfDogs[index];
});
