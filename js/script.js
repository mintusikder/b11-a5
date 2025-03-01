// new-today
document.getElementById("new-today").addEventListener("click", function () {
  window.location.href = "../question.html";
});
//back-desk
document.getElementById("back-desk").addEventListener("click", function () {
  window.location.href = "../index.html";
});

//   bg color change
function changeColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.body.style.backgroundColor = randomColor;
}