console.log("Welcome to Tic Tac Toe Game");
let music= new Audio("music2.wav");
let audioTurn = new Audio("music3.wav");
let gameover= new Audio("music2.wav");
let turn ="X";
let isgameover=false;
const changeTurn = ()=>{ 
    return turn === "X"? "0": "X";
} 
const checkWin= ()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText!=='')){
        document.querySelector('.info').innerText=boxtexts[e[0]].innerText + "Won";
        isgameover=true;
        gameover.play();
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="400px";
        }
    })
}


//Logic of game begins

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext1   = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext1.innerText===''){
            boxtext1.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover)
            {
                document.getElementsByClassName("info")[0].innerText= "Turn for" + turn;
            }
        }
    })
})
reset.addEventListener('click', ()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    });
    turn="X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText="Turn for"+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
})