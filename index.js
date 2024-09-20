// startGame function
        // show two card numbers 
            // the cards numbers ara generated with the randomNumber() DONE
        // calculate the sum

// new card function 
        // will check if it has blackjack and if 
    // the player is still alive
            // show another card
            // recalculate the sum
        // if not the newCard() should be disabled and has grey background 

// Default values
let firstCard
let secondCard
let isAlive = false
let hasBlackJack = false
let cards = []
let sum = 0

// selecting DOM
const cardsEl = document.getElementById("cards-el")
const sumEl = document.getElementById("sum-el")
const messageEl = document.getElementById("message-el")
const startBtn = document.getElementById("start-btn")
const newCardBtn = document.getElementById("new-card-btn")

// EventListeners 
startBtn.addEventListener("click", startGame)
newCardBtn.addEventListener("click", newCard)

// Getting random Cards
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()* 13) + 1

    if(randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}

// start the game
function startGame(){
    newCardBtn.classList.remove("disabled")
    isAlive = true
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// render the game
function renderGame(){
    cardsEl.textContent = "Cards:"
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += `  ${cards[i]}` 
    }
    sumEl.textContent = ` Sum : ${sum}`
    if(sum === 21){
        messageEl.textContent = "You have got a Blackjack!"
        hasBlackJack = true
        newCardBtn.classList.add("disabled")
    }else if( sum < 21){
        messageEl.textContent = "Do you want to draw a new card?"
    }else{
        messageEl.textContent = "You're out of the game!"
        isAlive = false
        newCardBtn.classList.add("disabled")
    }
    
}

// Draw a new Card
function newCard(){
    if(!hasBlackJack && isAlive){
        card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
}


