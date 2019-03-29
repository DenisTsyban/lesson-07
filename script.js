var text = document.createElement('p')
	document.body.appendChild(text).innerHTML = 'Hello Google';
var pict = document.createElement('img')
	document.body.appendChild(pict).innerHTML = pict.src;
pict.src = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
pict.style = `
	display: none;
	transition: all 2s;
	`
text.onclick = function(event){
	pict.style = `
    display: block;
    width: 100px;
    `
};
pict.onmouseover = function(event){
	pict.style = `
    width: 200px;
	transition: all 2s;
    `
};
pict.onclick = function(event){
	pict.style = `
    display: none;
    `
}