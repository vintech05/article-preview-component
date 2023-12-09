const shareBtnOn = document.querySelector('.card-cta__share-on');
const cardFooter = document.querySelector('.card-footer');
const cardIcon = document.querySelector('.card-cta');

function stateActive () {
    cardIcon.style.backgroundColor = '#47556b';
    cardFooter.style.marginTop = '0.45em';
    cardIcon.style.display = 'flex';
}

shareBtnOn.addEventListener('click', stateActive);
