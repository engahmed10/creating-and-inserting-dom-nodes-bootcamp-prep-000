//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
document.createElement()
var element = document.createElement('div');
element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';
appendChild()
document.body.appendChild(element);
<<<<<<< HEAD
var ul = document.createElement('ul');
 
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}
 
element.appendChild(ul);
=======
>>>>>>> 15c60db3ee6914afa3b017bc35468b006b4eb515
