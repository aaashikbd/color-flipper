const color = document.querySelector(".color-code");

const button = document.getElementById("flip");

button.addEventListener("click", (e) => {
  document.body.style.backgroundColor = random();
  color.textContent = "Color Code:" + " " + random();
});

random = () => {
  const a = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const c = Math.floor(Math.random() * 255);

  return "rgb(" + a + "," + b + "," + c + ")";
};
