const accordion = document.querySelector('.accordions');

accordion.addEventListener('click', (e) => {
    console.log(e.target.nextElementSibling)
    let currentBox = e.target;
    let currentContent = e.target.nextElementSibling;
    currentBox.classList.toggle('active')

    if(currentBox.classList.contains('active')) {
        currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
    }else {
        currentContent.style.maxHeight = 0;
    }
})