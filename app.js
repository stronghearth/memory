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
        }
    ];

    //create game board

    const grid = document.querySelector('.grid')

    const cardsChosen = []
    const cardsChosenId = []

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