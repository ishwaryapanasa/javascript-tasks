let userscore=0;
let compscore=0;

let bt1=document.querySelector("#btn");

let userscorepara=document.querySelector("#user-score");
let compscorepara=document.querySelector("#comp-score");

let choices=document.querySelectorAll(".choice");
 
const gencompChoice=() => {
    const options=["rock","paper","scissors"];
    const random=Math.floor(Math.random()*3);
    return options[random];
};

const showwinner=(userwin) => {
    if(userwin===true)
    {
        console.log("you won!");
        bt1.innerText=" Yayyy!!! you won!";
        bt1.style.backgroundColor="green";
        userscore++;
        userscorepara.innerText=userscore;

    }else{
        console.log("you lsoe");
        bt1.innerText="Opps you lost";
        bt1.style.backgroundColor="red";
        compscore++;
        compscorepara.innerText=compscore;
    }
};

const playgame=(userChoice) => {
    console.log("userchoice",userChoice);
    const compChoice=gencompChoice();
    console.log("compChoice",compChoice);

    if(userChoice===compChoice){
        bt1.innerText="Game was draw";
        bt1.style.backgroundColor="#fb8500";
        console.log("game draw");

    }else{
        let userwin=true;
        if(userChoice==="rock")
            userwin=compChoice==="paper"?false:true;
        else if(userChoice==="paper")
            userwin=compChoice==="scissors"?false:true;
        else{
            userwin==="scissors"?false:true;
        }
        showwinner(userwin);
    }
}

choices.forEach((choice) => {
 choice.addEventListener("click", () => {
    let userChoice=choice.getAttribute("id");
    playgame(userChoice);
 });
});