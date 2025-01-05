let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newgameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true; 

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
    box.innerText="";
    }
};

const resetGame=()=>{
    turn0=true;
    btncount=0;
    enableboxes();
    msgContainer.classList.add("hide");

};

let btncount=0;

boxes.forEach((b)=> {
    b.addEventListener("click",()=>{
        btncount++;
        if(turnO){
            b.innerText="O";
            b.style.color="red";
            turnO=false;
        }
        else{
            b.innerText="X";
            b.style.color="green";
            turnO=true;
        }
        b.disabled=true;
        checkwinner();
    })
});

const disableboxes=()=>{
    for(let box of boxes)
        box.disabled=true;
};

const showwinner=(winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

const showdraw=()=>{
    msg.innerText=`Match is draw`;
    msgContainer.classList.remove("hide");
    disableboxes();
};



const checkwinner=()=>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
   
    if(pos1!=="" && pos2!==""& pos3!==""){
        if(pos1==pos2 && pos2==pos3){
            console.log(`Winner is ${pos1}`);
            showwinner(pos1);
        }
        else if(btncount==9){
            showdraw();
        }
    }

    }
};

newgameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);