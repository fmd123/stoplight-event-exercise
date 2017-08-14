(function() {
  'use strict';

var stopButton = document.getElementById("stopButton");
var stopLight = document.getElementById("stopLight");


stopButton.addEventListener("click", function(){
  console.log("red clicked");
  stopLight.classList.toggle("stop");

});
var slowButton = document.getElementById("slowButton");
var slowLight = document.getElementById("slowLight");


slowButton.addEventListener("click", function(){
  console.log("yellow clicked");
  slowLight.classList.toggle("slow");

});
var goButton = document.getElementById("goButton");
var goLight = document.getElementById("goLight");
goButton.addEventListener("click", function(){
  console.log("green clicked");
  goLight.classList.toggle("slow");

});

// var slowButton = document.getElementById("slowButton");
// slowButton.addEventListener("click", function(){
//   //toggle slowLight
//   console.log("slowbutton clicked");
//
// });
// var goButton = document.getElementById("goButton");
// goButton.addEventListener("click", function(){
//   //toggle goLight
//   console.log("gobutton clicked");
// });
//


})();
