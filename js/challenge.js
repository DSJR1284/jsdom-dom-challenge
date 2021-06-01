const timer = document.getElementById("counter")

const plus = document.getElementById("plus")

const minus = document.getElementById("minus")

const heart = document.getElementById("heart")

const pause = document.getElementById("pause")

function count(){
    timer.innerText = parseInt(timer.innerText)+1 
}

function countdown (){
    timer.innerText = parseInt(timer.innerText)-1 
}

function hearttime(){
    heart.innerText = parseInt(heart.innerText)+1
    timer.innerText 
}

function stoptime(){

}

document.addEventListener("DOMContentLoaded", () => {
    let timerId = window.setInterval(count, 1000);    
    plus.addEventListener("click", count)
    minus.addEventListener("click", countdown)
    heart.addEventListener("click", count)
    pause.addEventListener("click", stoptime)

})

