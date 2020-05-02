document.addEventListener('DOMContentLoaded', () => {
    //card options

    const cardArray = [
        {
            name: 'cosmo',
            img: 'images/cosmo.png'
        },
        {
            name: 'rose',
            img: 'images/goldrose.png'
        },
        {
            name: 'lily',
            img: 'images/lily.png'
        },
        {
            name: 'mum',
            img: 'images/mum.png'
        },
        {
            name: 'windflower',
            img: 'images/windflower.png'
        },
        {
            name: 'cosmo',
            img: 'images/cosmo.png'
        },
        {
            name: 'rose',
            img: 'images/goldrose.png'
        },
        {
            name: 'lily',
            img: 'images/lily.png'
        },
        {
            name: 'mum',
            img: 'images/mum.png'
        },
        {
            name: 'windflower',
            img: 'images/windflower.png'
        }
    ];


    //randomize Cards

    cardArray.sort(() => 0.5 - Math.random())
    //create game board

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    function createBoard() {
        for (let i=0; i <= cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            // card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You Found a Match!')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Sorry, Try Again!')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congrats! You Found all of the Flowers!'
        }
    }

    //flip the card

    function flipCard () {
        var cardId = this.getAttribute('data=id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    createBoard()
})