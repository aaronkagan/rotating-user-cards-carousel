const myrtie = document.querySelector('.card.myrtie');
const blanche = document.querySelector('.card.blanche');
const laura = document.querySelector('.card.laura');
const myrtieStyle = getComputedStyle(myrtie);
const blancheStyle = getComputedStyle(blanche);
const lauraStyle = getComputedStyle(laura);

const myrtieCardButton = document.querySelector('.card.myrtie .card-link');
const blancheCardButton = document.querySelector('.card.blanche .card-link');
const lauraCardButton = document.querySelector('.card.laura .card-link');

myrtieCardButton.classList.add('inactive');
blancheCardButton.classList.remove('inactive');
lauraCardButton.classList.add('inactive');

myrtie.addEventListener('click', () => {
  const myrtieStyle = getComputedStyle(myrtie);
  const blancheStyle = getComputedStyle(blanche);
  const lauraStyle = getComputedStyle(laura);

  if (myrtieStyle.scale === '0.8') {
    myrtie.style.scale = '1';
    myrtie.style.zIndex = '1';
    blanche.style.zIndex = 0;
    blanche.style.scale = '.8';
    blanche.style.transform = 'translateX(-31rem)';
    myrtie.style.transform = 'translateX(29rem)';
    laura.style.scale = '.8';
    laura.style.transform = 'translateX(-4.5rem';
    laura.style.zIndex = '0';

    myrtieCardButton.classList.remove('inactive');
    blancheCardButton.classList.add('inactive');
    lauraCardButton.classList.add('inactive');
  }
});

laura.addEventListener('click', () => {
  const myrtieStyle = getComputedStyle(myrtie);
  const blancheStyle = getComputedStyle(blanche);
  const lauraStyle = getComputedStyle(laura);

  if (lauraStyle.scale === '0.8') {
    laura.style.scale = '1';
    laura.style.zIndex = '1';
    blanche.style.zIndex = 0;
    blanche.style.scale = '.8';
    blanche.style.transform = 'translateX(31rem)';
    laura.style.transform = 'translateX(-29rem)';
    myrtie.style.transform = 'translateX(5rem)';
    myrtie.style.scale = '0.8';

    myrtieCardButton.classList.add('inactive');
    blancheCardButton.classList.add('inactive');
    lauraCardButton.classList.remove('inactive');
  }
});

blanche.addEventListener('click', () => {
  const myrtieStyle = getComputedStyle(myrtie);
  const blancheStyle = getComputedStyle(blanche);
  const lauraStyle = getComputedStyle(laura);

  if (blancheStyle.scale === '0.8') {
    laura.style.scale = '0.8';
    blanche.style.scale = '1';
    myrtie.style.scale = '0.8';
    laura.style.zIndex = '0';
    blanche.style.zIndex = '1';
    myrtie.style.zIndex = '0';
    blanche.style.transform = 'translateX(0rem)';
    laura.style.transform = 'translateX(-5rem)';
    myrtie.style.transform = 'translateX(5rem)';

    myrtieCardButton.classList.add('inactive');
    blancheCardButton.classList.remove('inactive');
    lauraCardButton.classList.add('inactive');
  }
});
