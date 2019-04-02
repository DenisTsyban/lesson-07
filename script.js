// Homework 7.1
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
// Homework 7.1

// Homework 7.2
var collection = []

function over ( event ) {
    event.target.style.backgroundColor = '#ffff0050'
}
function out ( event ) {
    event.target.style.backgroundColor = '#ff00ff50'
}
function clickHandler ( event ) {
    event.target.remove()
}

[ "first", "second", "third", "fourth" ].forEach (
    function ( tag, index, arr  ) {
        
  var x = (index? collection[index - 1] : document.body)
   .appendChild(document.createElement('div')
  )
  collection.push(x)
  x.style = `
   height: ${400-index*50}px;
   width:  ${400-index*50}px;
   background-color: #ff00ff50;
   border: dotted 1px yellow;
  `
  x.title = tag
  x.onmouseover = over 
  x.onmouseout = out 
  x.onclick = clickHandler
    }
)
// Homework 7.2