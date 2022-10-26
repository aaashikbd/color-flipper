const items = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
const color = document.querySelector(".color-code");

const button = document.getElementById("flip");

button.addEventListener("click", (e) => {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += items[random()];
  }
  document.body.style.backgroundColor = hex;
  color.textContent = "Color Code:" + " " + hex;
  console.log(hex);
});

random = () => {
  const r = Math.floor(Math.random() * items.length);

  return r;
};
