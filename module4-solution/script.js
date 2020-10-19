var helloSpeaker = {};
(function(){
helloSpeaker.sayHello = function (name) {
var speakWord = "Hello";
console.log(speakWord + " " + name);
}
}());
window.helloSpeaker = helloSpeaker;

var byeSpeaker = {};
(function(){
byeSpeaker.sayGoodbye = function (name) {
var speakWord = "Goodbye";
console.log(speakWord + " " + name);
}
}());
window.byeSpeaker = byeSpeaker;

(function () {
	var names = ['Yaakov', 'John', 'Jen', 'Jason', 'Paul', 'Frank', 'Larry', 'Paula', 'Laura', 'Jim'];
	for (var i = 0; i < names.length; i++) {
		var name = names[i];
		var firstLetter = name.charAt(0).toLowerCase();
		if (firstLetter === 'j') {
			console.log(byeSpeaker.sayGoodbye(name));
		} else {
			console.log(helloSpeaker.sayHello(name));
		}
	}
})();

