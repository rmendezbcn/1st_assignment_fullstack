// collecting the elements that wil showup in the TOC
let toc = document.getElementsByClassName("toc");
let tocLen = toc.length;
let ul = document.createElement('ul');

for (let i = 0; i < tocLen; i++) {
    
    toc[i].setAttribute('id', 'content-' + i);

    let li = document.createElement('li');  
    let a = document.createElement('a');
    a.innerHTML = toc[i].innerHTML;
    //console.log(a.innerHTML);

    a.setAttribute('href', '#content-' + i);
    li.appendChild(a);
    
    ul.appendChild(li);
}
console.log(ul);

let mytoc = document.getElementById('mytoc');
mytoc.appendChild(ul);

