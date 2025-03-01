

//   bg color change
function changeColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.body.style.backgroundColor = randomColor;
}

// card

document.getElementById("card-btn").addEventListener("click", function () {
  document.getElementById("text-add").innerText = "Fix Mobile Button Issue";
  this.disabled = true;
  //increase
  const increaseElement = document.getElementById("increase");
  let currentValue = parseInt(increaseElement.innerText, 10);
  increaseElement.innerText = currentValue + 1;
  //decrease
  const decreaseElement = document.getElementById("decrease");
  let decreaseValue = parseInt(decreaseElement.innerText, 10);
  decreaseElement.innerText = decreaseValue - 1;
});
document.getElementById("card-btn-2").addEventListener("click", function () {
  document.getElementById("text-add-2").innerText = "Optimize Home page";
  this.disabled = true;
  //increase
  const increaseElement = document.getElementById("increase");
  let currentValue = parseInt(increaseElement.innerText, 10);
  increaseElement.innerText = currentValue + 1;
  //decrease
  const decreaseElement = document.getElementById("decrease");
  let decreaseValue = parseInt(decreaseElement.innerText, 10);
  decreaseElement.innerText = decreaseValue - 1;
});
document.getElementById("card-btn-3").addEventListener("click", function () {
  document.getElementById("text-add-3").innerText = "Add Dark Mode";
  this.disabled = true;
  //increase
  const increaseElement = document.getElementById("increase");
  let currentValue = parseInt(increaseElement.innerText, 10);
  increaseElement.innerText = currentValue + 1;
  //decrease
  const decreaseElement = document.getElementById("decrease");
  let decreaseValue = parseInt(decreaseElement.innerText, 10);
  decreaseElement.innerText = decreaseValue - 1;
});
document.getElementById("card-btn-4").addEventListener("click", function () {
  document.getElementById("text-add-4").innerText = "Add new emoji 🤲";
  this.disabled = true;
  //increase
  const increaseElement = document.getElementById("increase");
  let currentValue = parseInt(increaseElement.innerText, 10);
  increaseElement.innerText = currentValue + 1;
  //decrease
  const decreaseElement = document.getElementById("decrease");
  let decreaseValue = parseInt(decreaseElement.innerText, 10);
  decreaseElement.innerText = decreaseValue - 1;
});
document.getElementById("card-btn-5").addEventListener("click", function () {
  document.getElementById("text-add-5").innerText = "Integrate OpenAI API";
  this.disabled = true;
  //increase
  const increaseElement = document.getElementById("increase");
  let currentValue = parseInt(increaseElement.innerText, 10);
  increaseElement.innerText = currentValue + 1;
  //decrease
  const decreaseElement = document.getElementById("decrease");
  let decreaseValue = parseInt(decreaseElement.innerText, 10);
  decreaseElement.innerText = decreaseValue - 1;
});
document.getElementById("card-btn-6").addEventListener("click", function () {
  document.getElementById("text-add-6").innerText = "Improve Job searching";
  this.disabled = true;
  //increase
  const increaseElement = document.getElementById("increase");
  let currentValue = parseInt(increaseElement.innerText, 10);
  increaseElement.innerText = currentValue + 1;
  //decrease
  const decreaseElement = document.getElementById("decrease");
  let decreaseValue = parseInt(decreaseElement.innerText, 10);
  decreaseElement.innerText = decreaseValue - 1;
});

document.getElementById("clear").addEventListener("click", function () {
  document.querySelectorAll("h5").forEach((h5) => {
    h5.innerText = "";
  });
});
