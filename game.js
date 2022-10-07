var cards = document.querySelectorAll(".card")
var text = document.querySelector("#text")
// console.log(cards)

var isFlipped = false
var firstCard;
var secondCard;


cards.forEach( (card)=> card.addEventListener("click",flip))

function flip(){
    // console.log(this)
    this.classList.add("flip")
    if (!isFlipped) {
        isFlipped = true
        firstCard = this
    }
    else{
        secondCard = this
        console.log(firstCard)
        console.log(secondCard)
        checkIt()
    }

}

function checkIt(){
    if (firstCard.dataset.image === secondCard.dataset.image) {
        success(); 
    }
    else{
        Fail();
    }
    
}

function success(){
    // console.log("Success")
    // firstCard.removeEventListener("click",flip)
    // secondCard.removeEventListener("click",flip)
    setTimeout(() => {
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")
        reset()
        text.innerHTML = "Play Again"
    }, 2000);
    text.innerHTML = "You WON"
    
}

function Fail(){
    // console.log("failed")
    setTimeout(() => {
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")
        reset()
        text.innerHTML = "Play again"
    }, 2000);
    text.innerHTML = "Ooops... You Lost"

}

function reset(){
    // console.log("Resetting")
    isFlipped = false
    firstCard = null
    secondCard = null

}


(function Shuffle(){
    cards.forEach((card)=>{
        var index = Math.floor(Math.random()*16)
        card.style.order = index
    })
})()