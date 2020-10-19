var byeSpeaker = {};
(function(){
byeSpeaker.sayGoodbye = function (name) {
var speakWord = "Goodbye";
console.log(speakWord + " " + name);
}
}());
window.byeSpeaker = byeSpeaker;
