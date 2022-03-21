let toc = document.getElementsByClassName('toc');
const lenToc = toc.length;
console.log(toc);
console.log(lenToc);
let ul = document.createElement('ul');
let li = document.createElement('li');

for(let i = 0; i < lenToc; i++) {
    console.log(i);
    //console.log(toc.item(i).innerHTML);
}

//console.log(ul)

//let mytoc = document.getElementById('mytoc');
//mytoc.appendChild(ul);