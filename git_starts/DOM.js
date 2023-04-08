const itemlist=document.querySelector("#items")

console.log(itemlist.parentElement)
console.log(itemlist.lastElementChild)
console.log(itemlist.lastChild)
console.log(itemlist.lastChild)

const newchild=document.createElement('div')

newdiv.className='hello'
newdiv.id='hello1'

console.log(itemlist.firstElementChild)
console.log(itemlist.firstChild)
console.log(itemlist.nextSibling)
console.log(itemlist.nextElementSibling)
console.log(itemlist.previousSibling)
console.log(itemlist.previousElementSibling)
console.log(itemlist.previousElementSibling)


const newchild=document.createElement('div')

newdiv.className='hello'
newdiv.id='hello1'

newdiv.setAttribute('title','Hello div')
newdiv.appendChild(newDivText);

console.log(newdiv)