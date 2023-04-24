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