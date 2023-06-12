const squares= document.querySelectorAll('.squares')
var score= document.querySelector('.score')
var time = document.querySelector('.time')
let hitposition
let currentTime=60
let result = 0
function randomSquare(){
    for(var i=0; i<9; i++){
        squares[i].classList.remove('mole')

    }
    var random=Math.floor(Math.random()*9)
    let randomSquare= squares[random]
    randomSquare.classList.add('mole')
    hitposition=randomSquare.id
    
}
    squares.forEach(square=>{
        square.addEventListener('mousedown', ()=>{
            if(square.id==hitposition){
                result++
                score.innerHTML=result
            }
        })
    })
    function countDown(){
        currentTime--
        time.textContent= currentTime
        if(currentTime===0){
            clearInterval(timerId)
            clearInterval(moveMole)


            alert('YOUR GAME IS OVER AND YOUR FINAL SCORE IS: ' + result )
        }

    }


    let timerId = setInterval(countDown, 1000)
    let moveMole=setInterval(randomSquare, 1000)


