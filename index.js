
let message="";
let cards=[]
let sum=0;
let hasBlackJack = false;
let isAlive = false;
let messageEl=document.getElementById('message-el')
let sumEl=document.querySelector('#sum-El')
let cardEl=document.getElementById('card-El')
let player={
    name:'Mass',
    chips:209
}

let playerEl = document.getElementById("player-El")
playerEl.textContent=player.name+": $"+player["chips"];


function startgame(){
    hasBlackJack = false;
    isAlive = true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    // cards.push(firstCard,secondCard)
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard;
    rendergame();
}

function getRandomCard(){
    let card=Math.floor(Math.random()*13)+1;
    if (card === 1) {
        return 11;
    }else if ((card >= 11) && (card <= 13)){
        return 10;
    }else{
        return card;
    }
}

function rendergame(){

    if (sum <= 20) {
        // console.log('Do you want to draw a new card?')
        message='Do you want to draw a new card?';
    } else if (sum === 21) {
        // console.log("Wohoo! You've got blackjack!")
        message="Wohoo! You've got blackjack!";
        hasBlackJack = true;
    } else {
        // console.log("You're out of the game!")
        message="You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent=message;
    sumEl.textContent="Sum: "+sum;
    cardEl.textContent="Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent+=cards[i]+" ";
    }
    
}
function newCard(){
    
    if (isAlive === true && hasBlackJack === false) {

        let new_Card=getRandomCard();
        sum +=new_Card;
        cards.push(new_Card)
        rendergame();
        
    }
}
