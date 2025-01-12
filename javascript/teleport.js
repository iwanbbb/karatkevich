const btns = document.querySelector('.nav__list')
const btns2 = document.querySelector('#nav')


btns.addEventListener('click', (e) => {
    let currId = e.target.getAttribute('data-tp');
    let currBlock = document.querySelector(`#${currId}`);
    console.log(currBlock)
    currBlock.scrollIntoView ({
        behavior: 'smooth'
    })
})

btns2.addEventListener('click', (e) => {
    let currId = e.target.getAttribute('data-tp');
    let currBlock = document.querySelector(`#${currId}`);
    console.log(currBlock)
    currBlock.scrollIntoView ({
        behavior: 'smooth'
    })
})