var rock = 0;
var paper = 1;
var scissors = 2;
var lizard = 3;
var spock = 4;

var round = 0;
var scoreOp = 0;
var scoreYou = 0;
var opChoice;

var resetInd = false;
var tieInd = false;
var gameOver = false;

function startGame(){
    document.getElementById('js_interactor').innerText = 'Choose your sign.';
    document.getElementById('start').style.display = 'none';
    document.getElementById('close').style.display = 'none';

    if (resetInd) {
        setSign('sign_'+(round+1), 'question');
        document.getElementById('op_sign_'+(round+1)).style.backgroundImage = 'url("images/question.png")';
        resetInd = false;
    }

    initStates();
    initResult('result_op', scoreOp);
    initResult('result_you', scoreYou);
}

function initStates(){
    round += 1;
    if(round > 3){
        return;
    }   
    
    addListener('rock', signClick('rock'));
    addListener('paper', signClick('paper'));
    addListener('scissors', signClick('scissors'));
    addListener('lizard', signClick('lizard'));
    addListener('spock', signClick('spock'));
}

function addListener(el, func){
    document.getElementById(el).addEventListener('click', func);
}

function removeListeners(){
    document.getElementById('rock').removeEventListener('click', signClick('rock'));
    document.getElementById('paper').removeEventListener('click', signClick('paper'));
    document.getElementById('scissors').removeEventListener('click', signClick('scissors'));
    document.getElementById('lizard').removeEventListener('click', signClick('lizard'));
    document.getElementById('spock').removeEventListener('click', signClick('spock'));
}

function initResult(el, score){
    document.getElementById(el).style.textAlign = 'center';
    document.getElementById(el).style.verticalAlign = 'middle';
    document.getElementById(el).style.lineHeight = '6.4vh';
    document.getElementById(el).innerText = score;
}

var functions = {}
function signClick(sign){
    if(functions[sign] === undefined)
    {
        functions[sign] = function(){ 
            setSign('sign_'+ (round), sign);
            opChoice = setOpSign('op_sign_' + (round));
            
            outcome(sign, opChoice);

            winner();
            if (gameOver){
                removeListeners();
                return;
            }
            
            nextRound();
            removeListeners();
        }; 
    }
    return functions[sign]; 
}

function setSign(sign, img){
    document.getElementById(sign).style.backgroundImage = 'url("images/'+img+'.png")';
}

function setOpSign(sign){
    var r = Math.floor(Math.random() * 5);
    switch(r){
        case 0:
            document.getElementById(sign).style.backgroundImage = 'url("images/rock.png")';
            return 'rock';
        case 1:
            document.getElementById(sign).style.backgroundImage = 'url("images/paper.png")';
            return 'paper';
        case 2:
            document.getElementById(sign).style.backgroundImage = 'url("images/scissors.png")';
            return 'scissors';
        case 3:
            document.getElementById(sign).style.backgroundImage = 'url("images/lizard.png")';
            return 'lizard';
        case 4:
            document.getElementById(sign).style.backgroundImage = 'url("images/spock.png")';
            return 'spock';
    }
}

function nextRound(){
    document.getElementById('start').style.textAlign = 'center';
    document.getElementById('yes').innerText = 'Go';
    document.getElementById('start').style.display = 'block';
    if (tieInd) {
        document.getElementById('js_interactor').innerText = "It's a tie! Round: " + (round+1) + ", again.";
        resetInd = true;
        tieInd = false;
    } else {
        document.getElementById('js_interactor').innerText = "Start round: " + (round+1);
    }
}

function outcome(x1, x2){
    if (x1 == x2){
        tie();
    } else if (x1 == 'rock' && (x2 == 'scissors' || x2 == 'lizard')){
        youWin();
    } else if (x1 == 'paper' && (x2 == 'rock' || x2 == 'spock')){
        youWin();
    } else if (x1 == 'scissors' && ( x2 == 'paper' || x2 == 'lizard' )){
        youWin();
    } else if (x1 == 'lizard' && ( x2 == 'spock' || x2 == 'paper' )){
        youWin();
    } else if (x1 == 'spock' && ( x2 == 'rock' || x2 == 'scissors' )){
        youWin();
    } else {
        youLose();
    }
}

function tie(){
    round--;
    tieInd = true;
}

function youWin(){
    document.getElementById('op_outcome_' + (round)).style.backgroundColor = 'red';
    document.getElementById('outcome_' + (round)).style.backgroundColor = 'green';

    scoreYou = parseInt(document.getElementById('result_you').innerText, 10) + 1;
    document.getElementById('result_you').style.textAlign = 'center';
    document.getElementById('result_you').innerText = scoreYou;
}

function youLose(){
    document.getElementById('op_outcome_' + (round)).style.backgroundColor = 'green';
    document.getElementById('outcome_' + (round)).style.backgroundColor = 'red';

    scoreOp = parseInt(document.getElementById('result_op').innerText, 10) + 1;
    document.getElementById('result_op').style.textAlign = 'center';
    document.getElementById('result_op').innerText = scoreOp;
}

function winner(){
    if(scoreOp == 2){
        document.getElementById('js_interactor').innerText = "Buzzinga, You lost.";
        gameOver = true;

        console.log(round);
        document.getElementById('restart-game').innerText = "Play again?";
        document.getElementById('restart-game').style.visibility = 'visible';
    } else if (scoreYou == 2){
        document.getElementById('js_interactor').innerText = "Congratulations! You win!";
        gameOver = true;
        
        console.log(round);
        document.getElementById('restart-game').innerText = "Play again?";
        document.getElementById('restart-game').style.visibility = 'visible';
    }
    
}

function newGame(){
    location.reload();
}

function closeGame(){
    document.getElementById('js_interactor').innerText = 'Thanks for playing.';
    document.getElementById('start').style.display = 'none';
    document.getElementById('close').style.display = 'none';
}

// #################### 

function showRules() {
    document.getElementById('ruleset').style.visibility = 'visible';
}

function hideRules() {
    document.getElementById('ruleset').style.visibility = 'hidden';
}