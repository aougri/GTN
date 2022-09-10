let lives = 5

bgColorCheck(lives)

const liveCount = document.getElementById('live')
liveCount.innerText = lives

let nbrToGuess = Math.floor(Math.random() * 10)
console.log(nbrToGuess)


function checkGuess(){
    
    const getUserNumber = document.getElementById('input').value;
    if (getUserNumber == "") {
        alert("Input a number to guess")
    }
    const userNumber = Number(getUserNumber)
    const span = document.getElementById('span')
    
    
    //Debugging
    console.log(getUserNumber)
    console.log(typeof(getUserNumber))
    console.log(typeof(userNumber))
    console.log(nbrToGuess)
    

     if(userNumber > nbrToGuess){
        span.innerHTML = `<span style="background-color: red">Lower</span>`;
        liveCount.innerText = lives --
        bgColorCheck(lives)
    }
    else if(userNumber < nbrToGuess){
        span.innerHTML = `<span style="background-color: blue">Higher</span>`;
        liveCount.innerText = lives --
        bgColorCheck(lives)

    }
    else if(userNumber == nbrToGuess){
        document.body.innerHTML =  `
        <div class="outer">
        <div class="middle">
          <div class="inner">
            <h1>You have won the game! Press [F5] to replay!</h1>
            
          </div>
        </div>
      </div>
        
        `

    }

    if(lives == 5){
        document.body.style.backgroundColor = "#77DD77"
    }
}

function bgColorCheck(lives){
    switch (lives) {
        case 5:
            document.body.style.backgroundColor = "#77DD77"
            break;
        case 4:
            document.body.style.backgroundColor = "#599637"
            break;
        case 3:
            document.body.style.backgroundColor = "#F5A292"
            break;
        case 2:
            document.body.style.backgroundColor = "#FA785F"
            break;
        case 1:
            document.body.style.backgroundColor = "#841905"
            break;
        case 0:
            document.body.style.backgroundColor = "#4C1309"
            alert("You lost the game... Press [F5] to reset!")
        default:
            break;
    }
}


