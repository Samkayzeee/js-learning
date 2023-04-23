const paras = document.querySelectorAll('p');
const anchor = document.querySelector('a');


paras.forEach((para) => {
    if (para.innerText.includes('success')) {
        para.style.color = 'green';
    }
    else if(para.innerText.includes('error')){
        para.style.color = 'red';
    }
});

anchor.onclick = (e) => {
    let tag = e.target;
    tag.setAttribute('target', '');
    tag.setAttribute('href', '');
    tag.remove;
}