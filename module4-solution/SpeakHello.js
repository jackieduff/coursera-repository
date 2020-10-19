var helloSpeaker = {};
(function(){
helloSpeaker.sayHello = function (name) {
var speakWord = "Hello";
console.log(speakWord + " " + name);
}
}());
window.helloSpeaker = helloSpeaker;
