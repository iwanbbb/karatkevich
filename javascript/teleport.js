const btns = document.querySelector('.nav__list')
let c = 0

btns.addEventListener('click', (e) => {
    let currId = e.target.getAttribute('data-tp');
    let currBlock = document.querySelector(`#${currId}`);
    console.log(currBlock)
    currBlock.scrollIntoView ({
        behavior: 'smooth'
    })
})