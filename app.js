var cPoint = document.querySelector('.cPoint');
var pPoint = document.querySelector('.pPoint');
var computer = document.querySelector('.computer');
var player = document.querySelector('.player');
var winner = document.querySelector('.winner');
var reset = document.querySelector('.reset');
var pCount=0, cCount=0;
var res = document.querySelector('.reset')
function play(playerChoice){
	if(playerChoice=="rock"){
		//alert("rock");
		player.innerText = "Player: rock";
	}else if(playerChoice=="paper"){
		//alert("paper")
		player.innerText = "Player: paper";
	}else if(playerChoice=="scissors"){
		//alert("scissors")
		player.innerText = "Player: scissors";
	}
	var random = Math.floor(Math.random()*3);
	console.log(random);
	var computerChoise;
	if(random==0){
		computerChoise="rock";
		computer.innerText = "Computer: rock";
	}else if(random==1){
		computerChoise="paper";
		computer.innerText = "Computer: paper";
	}else if(random==2){
		computerChoise="scissors";
		computer.innerText = "Computer: scissors";
	}
	if((playerChoice=="paper" && computerChoise=="rock")
	  ||(playerChoice=="rock" && computerChoise=="scissors")
	  ||(playerChoice=="scissors" && computerChoise=="paper")){
		  winner.innerText = "Winner: player";
		  pCount++;
		  pPoint.innerText = "Player: "+pCount;
	  }else if(playerChoice==computerChoise){
		  winner.innerText = "Winner: "
	  }
	  else{
		  winner.innerText = "Winner: Computer"
		  cCount++;
		  cPoint.innerText = "computer: "+cCount;
	  }
}