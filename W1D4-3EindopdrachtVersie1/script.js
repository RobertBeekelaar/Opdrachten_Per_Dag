
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

const red = document.querySelector('#redbutton');

red.addEventListener('click', function (e) {

  document.getElementById('body').className = "red-background";
}
);

const green = document.querySelector('#greenbutton');

green.addEventListener('click', function (e) {

  document.getElementById('body').className = "green-background";
}

);
const gray = document.querySelector('#graybutton');

gray.addEventListener('click', function (e) {

  document.getElementById('body').className = "gray-background";
}
);