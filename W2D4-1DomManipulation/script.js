
// PART I
const buttonList = document.getElementsByClassName("big-five-list")[0];
const buttonItems = Array.from(buttonList.querySelectorAll(".big-five-list-item button"));
const spottedList = document.getElementById("spotted-animals-list");

buttonItems.forEach(button => {
  button.addEventListener('click', () => {
    const item = document.createElement("li");
    item.classList.add("spotted-animals-list-item");
    item.innerHTML = button.innerHTML;
    spottedList.appendChild(item)
  })
});

const removeOne = document.getElementById("remove-first-item-button");

removeOne.addEventListener('click', () => {

  const firstAnimal = spottedList.getElementsByClassName('spotted-animals-list-item')[0];
  if (firstAnimal) {
    spottedList.removeChild(firstAnimal)
  }
})



const removeAllAnimals = document.getElementById("remove-all-button");

removeAllAnimals.addEventListener('click', () => {
  parent = document.getElementById('spotted-animals-list')[0];
  const deleteAll = document.querySelector('ul');
  deleteAll.innerHTML = ""
})




/*
function deleteChild() {
 var e = document.querySelector("ul");
 e.innerHTML = "";
}
var btn = document.getElementById(
 "btn").onclick = function () {
   deleteChild();


const removeAllItems = document.getElementById("remove-all-button");
removeAllItems.addEventListener("click", () => {
 while (spottedList.firstChild) {
   spottedList.firstChild.remove();
 }
});
*/