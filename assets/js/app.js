const section = document.querySelector('section');
let flippedCard1;
let flippedCard2;
allCards = [];
console.log(allCards);

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
const randomizeData = () => cardData.sort(() => Math.random() - 0.5);
randomizeData()

//double date data so you have card pairs
const doubleData = () => cardData = [...cardData, ...cardData]
doubleData()

//make sure, you can only flip two cards 
let flippedCardsCounter = 0;

//Block and reset the cards 
blockFlippedCards = () => {
    let flippedCards = allCards.filter(element => element.status == 'flipped');
    flippedCards.forEach(element => {
        element.classList.remove('click');
    });
}

blockUnflippedCards = () => {
    let unflippedCards = allCards.filter(element => element.status == 'notFlipped');
    unflippedCards.forEach(element => {
        element.classList.remove('click');
    });
}

resetCards = () => {
    flippedCard1.classList.add('click');
    flippedCard2.classList.add('click');
    let unflippedCards = allCards.filter(element => element.status == 'notFlipped');
    unflippedCards.forEach(element => {
        element.classList.add('click');
    });
}

//Flip the clicked cards
const flipCard = (card) => {
    if (card.status == 'pairFound') return
    flippedCardsCounter++
    if (flippedCardsCounter > 2) return
    if (flippedCardsCounter == 1) {
        card.firstElementChild.classList.add('remove');
        card.status = 'flipped';
        blockFlippedCards();
        flippedCard1 = card;
    }
    if (flippedCardsCounter == 2 && card.status == 'flipped') {
        flippedCardsCounter = 1;
    }
    else if (flippedCardsCounter == 2) {
        card.firstElementChild.classList.add('remove');
        card.status = 'flipped';
        blockFlippedCards();
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
        card.status = 'notFlipped';
        allCards.push(card);
        card.addEventListener('click', () => { flipCard(card) })

    });
}

createCards()

//Compare if same card or not
const compareCards = (card1, card2) => {
    if (card1.source == card2.source) {
        card1.status = 'pairFound';
        card2.status = 'pairFound';
        console.log('Du hast ein Paar gefunden!');
        flippedCardsCounter = 0;
    }
    else if (card1.source !== card2.source) {
        blockUnflippedCards();
        setTimeout(() => {
            card1.firstElementChild.classList.remove('remove');
            card2.firstElementChild.classList.remove('remove');
            card1.status = 'notFlipped';
            card2.status = 'notFlipped';
            flippedCardsCounter = 0;
            resetCards()
        }, 1000)
    }
}


