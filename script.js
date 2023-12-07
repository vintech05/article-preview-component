const shareBtnOn = document.querySelector('.card-cta__share-on');
const shareBtnOff = document.querySelector('.card-cta__share-off');
const cardFooter = document.querySelector('.card-footer');
const cardFooterContent = document.querySelector('.card-footer__avatar');
const cardIcon = document.querySelector('.card-cta');

function stateActive () {
    cardFooter.style.backgroundColor = '#47556b';
    cardIcon.style.display = 'flex';
    cardFooterContent.style.display = 'none';
}

function stateInactive () {
    cardFooter.style.backgroundColor = '#fff';
    cardIcon.style.display = 'none';
    cardFooterContent.style.display = 'flex';
}

shareBtnOn.addEventListener('click', stateActive);
shareBtnOff.addEventListener('click', stateInactive);