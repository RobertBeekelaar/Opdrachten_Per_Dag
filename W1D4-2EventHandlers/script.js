var btns = document.querySelector('#mybutton');

console.log(btns);

btns.addEventListener('click', function (e) {
  alert('You clicked the button');

});

/*
const yellow = document.querySelector('#yellowbutton');

yellow.addEventListener('click', function (e) {

  document.getElementById('body').className = "yellow-background";
}
);


const blue = document.querySelector('#bluebutton');

blue.addEventListener('click', function (e) {

  document.getElementById('body').className = "blue-background";
}
);
*/


const yellow = document.querySelector('#yellowbutton');
const element = document.getElementById('body');

yellow.addEventListener('click', function (e) {

  element.classList.toggle("yellow-background");
});
