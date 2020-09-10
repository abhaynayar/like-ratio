let code = document.getElementsByTagName('html')[0].innerHTML
let likes = code.match(/\"([0-9,]*) like.+\"/)[1].replace(',', '');
let dislikes = code.match(/\"([0-9,]*) dislike.+\"/)[1].replace(',', '');

let tag = document.createElement("p");
let text = ""
if (dislikes != 0) {
    text = document.createTextNode(likes/dislikes);
}

tag.appendChild(text);
var element = document.getElementById("sentiment");
element.appendChild(tag);

