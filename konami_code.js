const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

*//function init() {
input=document.body; index=0;
input.addEventListener('keydown', function onKeyDownHandler(e) {const key = e.key; if (key === codes[index]) {index++; if (index === codes.length) {alert("Hurray!"); return index;}} else {index = 0;}})
}
