let music=new Audio("music.mp3");
let turn=new Audio("ting.mp3");
let over=new Audio("gameover.mp3");

let turns = "x";
let gameOver=false;

const changeTurns=()=>{
    return turns ==="x"?"0":"x"
}

const win=()=>{
    let text= document.getElementsByClassName('boxtext');
    let combinations=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    combinations.forEach(e=>{
        if ((text[e[0]].innerText===text[e[1]].innerText)&&(text[e[2]].innerText===text[e[1]].innerText)&&text[e[0]].innerText!=="")
        document.querySelector(".info").innerText=text[e[0]].innerText+" won";
        gameOver=true;
    })
}

// game logic
let boxes= document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turns;
            turns=changeTurns();
            turn.play();
            win();
            if (!gameOver){
                document.getElementsByClassName("info")[0].innerText= "turn for "+turns;
            }
        }
    })
})