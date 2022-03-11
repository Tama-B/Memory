const section = document.querySelector('section');


//Get Data for Cards
let cardData = [
    { imgSrc: '/assets/img/beloud.png', name: 'beloud' },
    { imgSrc: '/assets/img/chilling.png', name: 'chilling' },
    { imgSrc: '/assets/img/donut.png', name: 'donut' },
    { imgSrc: '/assets/img/flowers.png', name: 'flowers' },
    { imgSrc: '/assets/img/kissing.png', name: 'kissing' },
    { imgSrc: '/assets/img/raining.png', name: 'raining' },
    { imgSrc: '/assets/img/selfcare.png', name: 'selfcare' },
    { imgSrc: '/assets/img/underwater.png', name: 'underwater' }
]



//Randomize Card Data
const randomizeData = () => {
    cardData.sort(() => Math.random() - 0.5);
}

const doubleData = () => cardData = [...cardData, ...cardData]

let flippedCardsCounter = 0;
doubleData()
randomizeData()

let flippedCard1
let flippedCard2


const flipCard = (card) => {
    //überprüfen, ob klasse existiert
    flippedCardsCounter++
    if (flippedCardsCounter > 2) return


    if (flippedCardsCounter == 1) {
        card.firstElementChild.classList.add('remove');
        flippedCard1 = card;
    }

    else if (flippedCardsCounter == 2) {
        card.firstElementChild.classList.add('remove');
        flippedCard2 = card;
        compareCards(flippedCard1, flippedCard2);
    }

}



// Create Cards
const createCards = () => {
    cardData.forEach(element => {
        let card = document.createElement('div');
        let front = document.createElement('img')
        let back = document.createElement('div');
        front.src = element.imgSrc;
        card.classList.add('card', 'click');
        back.classList.add('back')
        section.appendChild(card);
        card.appendChild(back);
        card.appendChild(front);
        card.source = element;
        card.addEventListener('click', () => { flipCard(card) })

    });
}

createCards()

//Compare if same card or not

const compareCards = (card1, card2) => {
    if (card1.source == card2.source) {
        card1.classList.remove('click');
        card2.classList.remove('click');
        //gemeinsame klasse hinzufügen
        console.log('Du hast ein Paar gefunden!');
        flippedCardsCounter = 0;
    }
    else if (card1.source !== card2.source) {
        setTimeout(() => {
            card1.firstElementChild.classList.remove('remove');
            card2.firstElementChild.classList.remove('remove');
            flippedCardsCounter = 0;
        }, 1000)

    }
}


