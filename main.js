let card = document.querySelector('.card');

let cardHeader = document.querySelector('.card-header');

let cardButtons = document.querySelectorAll('.btn');

let socialLinks = document.querySelectorAll('.social-links');

let biLink = document.querySelectorAll('.bi');

// console.log(socialLinks);


// An arrow function to add color to the card when hover with a mouse 
let cardEffect = () => {
  cardHeader.style.backgroundColor = 'pink';

  card.style.transition = '.5s ease-in';

  for(let i = 0; i < cardButtons.length; i++) {
    cardButtons[i].style.backgroundColor = 'pink';
  }
  
  for(let i = 0; i < socialLinks.length; i++) {
    socialLinks[i].style.border = '2px dotted pink';
  }

  for(let i = 0; i < biLink.length; i++) {
    biLink[i].style.color = 'pink'
  }
}
card.addEventListener("mouseover", cardEffect);



// An arrow function to removed color to the card when unhover with a mouse 
let noEffect = () => {
  cardHeader.style.backgroundColor = 'blue';

  cardHeader.style.transition = '.3s'

  for(let i = 0; i < cardButtons.length; i++) {
    cardButtons[i].style.backgroundColor = 'blue';
  }

  for(let i = 0; i < socialLinks.length; i++) {
    socialLinks[i].style.border = '2px dotted blue';
  }

  for(let i = 0; i < biLink.length; i++) {
    biLink[i].style.color = 'blue';
  }
}
card.addEventListener("mouseout", noEffect);


