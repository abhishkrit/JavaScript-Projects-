      let isPlaying=false;
      let intervalId;

      let score_1=JSON.parse(localStorage.getItem('score_1'))
      
        || {
          wins:0,
          looses:0,
          ties:0
        }
      ;

      updateScore();
          
      function updateScore(){
        document.querySelector('.js-score').innerHTML= `wins:${score_1.wins} , looses:${score_1.looses},ties:${score_1.ties}`
      }      




      function autoPlay(){
        console.log('Button was Clicked !');
        if(!isPlaying){
        intervalId= setInterval(()=>{
        const playerMove=pickCmove();
          game(playerMove);
        },1000);
        isPlaying=true;  
      }
        else{
          clearInterval(intervalId);
          isPlaying=false;
        }
      }
      
      function game(Pmove) {
        let computerMove = pickCmove();
        let result = '';

        // Player chooses Rock
        if (Pmove === 'Rock') {
          if (computerMove === 'Rock') {
            result = 'Tie.';
          } else if (computerMove === 'Paper') {
            result = 'You lose.';
          } else if (computerMove === 'Scissors') {
            result = 'You win.';
          }
        }
        // Player chooses Paper
        else if (Pmove === 'Paper') {
          if (computerMove === 'Rock') {
            result = 'You win.';
          } else if (computerMove === 'Paper') {
            result = 'Tie.';
          } else if (computerMove === 'Scissors') {
            result = 'You lose.';
          }
        }
        // Player chooses Scissors
        else if (Pmove === 'Scissors') {
          if (computerMove === 'Rock') {
            result = 'You lose.';
          } else if (computerMove === 'Paper') {
            result = 'You win.';
          } else if (computerMove === 'Scissors') {
            result = 'Tie.';
          }
        }
        //Result Calculation
        if(result==='You win.'){
          score_1.wins+=1;
        }
        else if(result==='You lose.'){
          score_1.looses+=1;
        }
        else if(result==='Tie.'){
          score_1.ties+=1;
        }

        localStorage.setItem('score_1',JSON.stringify(score_1));
        document.querySelector('.js-result').innerHTML=result;
        document.querySelector('.js-moves').innerHTML=` You : <img src="Images/${Pmove}-emoji.png">  and 
        Computer : <img src="Images/${computerMove}-emoji.png"> `;

        updateScore();
        
      }  

      function pickCmove() {
        let computerMove;
        const randomNumber = Math.random();

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'Rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'Paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'Scissors';
        }
        
        return computerMove;
      }

