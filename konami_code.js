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
*//input=document.body; index=0;
*//input.addEventListener('keydown', function onKeyDownHandler(e) {const key = e.key; if (key === codes[index]) {index++; if (index === codes.length) {alert("Hurray!"); return index;}} else {index = 0;}})
}
function init3() {input=document.body; input.addEventListener('keydown', function typeKey(e) {let i=0; result=[0]; if (e.key===codes[i]) {i++; result.push (e.key); if (result.length===codes.length){alert("Code complete!"); return result;}} else {i=0; result=[0];}})}