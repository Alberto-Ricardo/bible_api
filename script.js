
function getVerse(t) {

	var b = document.getElementById('libro');
var book = b.value;

var c = document.getElementById('capitulo');
var chapter = c.value;

var v = document.getElementById('versiculo');
var verse = v.value;

var chunk = "https://bible-api.com/";
var plus = "+";
var colon = ":";
var version = "?translation=kjv"  //Add a version option //Swicth between english & king james version's
var target = chunk + book + plus + chapter + colon + verse;
console.log(target);

	fetch(target)
		.then(response => response.json())
		.then(response => {
			var reference = response.reference;
			var texto = response.text;

			var resultado = document.getElementById('resultado');
			resultado.innerHTML = '<p>' + texto + '</p><p style="text-align: right">' + reference + '</p>';
		})
		
		.catch(err => console.log(err))


};

fetch('https://bible-api.com/Luke+6:36 ')
    .then(response => response.json())
	.then(response => console.log(response.text))
	.catch(err => console.log(err))
// ;)