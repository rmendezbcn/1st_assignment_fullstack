// collecting the elements that wil showup in the TOC
let toc = document.getElementsByClassName("toc");
let tocLen = toc.length;
console.log(tocLen);
let ul = document.createElement('ul');

for (let i = 0; i < tocLen; i++) {
    let li = document.createElement('li');
    li.innerHTML = toc[i].innerHTML;
    console.log(li.innerHTML);
    ul.appendChild(li);
}
console.log(ul);

let mytoc = document.getElementById('mytoc');
mytoc.appendChild(ul);

