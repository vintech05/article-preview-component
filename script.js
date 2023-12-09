const shareBtnOn = document.querySelector('.card-cta__share-on');
const cardFooter = document.querySelector('.card-footer');
const cardIcon = document.querySelector('.card-cta__icons');

let isActive = false;

function stateActive() {
    if (isActive) {
        cardIcon.style.backgroundColor = '';
        cardIcon.style.display = 'none';
    } else {
        cardIcon.style.backgroundColor = '#47556b';
        cardIcon.style.display = 'flex';
    }
    isActive = !isActive;
}

shareBtnOn.addEventListener('click', stateActive);
