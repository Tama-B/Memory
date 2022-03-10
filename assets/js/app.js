const section = document.querySelector('section')




const cardData = [
    { imgSrc: '/assets/img/beloud.png', name: 'beloud' },
    { imgSrc: '/assets/img/chilling.png', name: 'chilling' },
    { imgSrc: '/assets/img/donut.png', name: 'donut' },
    { imgSrc: '/assets/img/flowers.png', name: 'flowers' },
    { imgSrc: '/assets/img/kissing.png', name: 'kissing' },
    { imgSrc: '/assets/img/raining.png', name: 'raining' },
    { imgSrc: '/assets/img/selfcare.png', name: 'selfcare' },
    { imgSrc: '/assets/img/underwater.png', name: 'underwater' },
    { imgSrc: '/assets/img/beloud.png', name: 'beloud' },
    { imgSrc: '/assets/img/chilling.png', name: 'chilling' },
    { imgSrc: '/assets/img/donut.png', name: 'donut' },
    { imgSrc: '/assets/img/flowers.png', name: 'flowers' },
    { imgSrc: '/assets/img/kissing.png', name: 'kissing' },
    { imgSrc: '/assets/img/raining.png', name: 'raining' },
    { imgSrc: '/assets/img/selfcare.png', name: 'selfcare' },
    { imgSrc: '/assets/img/underwater.png', name: 'underwater' }
]


const randomizeData = () => {
    cardData.sort(() => Math.random() - 0.5);
}

randomizeData()
console.log(cardData);

const flipCard = (card) => {
    console.log('clicki');
}
const createCards = () => {
    cardData.forEach(element => {
        let card = document.createElement('img');
        card.src = element.imgSrc;
        section.appendChild(card);
        card.addEventListener('click', () => flipCard(card))
    });
}

createCards()



