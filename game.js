/* Class Game */
function Game(rootId) {
    this._mUi = {};
    this._mRounds = [];
    this._mResult = {
        player : 0,
        opponent : 0,
    };

    this._mRoot = document.getElementById(rootId);

    this._mDidGameFinished = false;
    this._mDidGameStarted = false;
}


/* Start of making UI */
function _makeRootContainer(){
    var window = document.createElement('div');
    window.id = 'window';

    var windowFillerLeft = document.createElement('div');
    windowFillerLeft.classList.add('window-filler');

    var windowFillerRight = document.createElement('div');
    windowFillerRight.classList.add('window-filler');

    var gameContainer = document.createElement('div');
    gameContainer.classList.add('game-container');

    window.append(windowFillerLeft, gameContainer, windowFillerRight);

    return {
        window:window,
        windowFillerLeft:windowFillerLeft,   
        windowFillerRight:windowFillerRight,
        gameContainer:gameContainer
    }
}

function _makeGameContainer(){
    var optionsBars = _makeOptionsBars();

    var opponentText = document.createElement('div');
    opponentText.innerText = 'Opponent';
    opponentText.style.textAlign = 'center';

    var playAgainButton = document.createElement('button');
    playAgainButton.classList.add('interactor-button', 'hidden');
    playAgainButton.innerText = 'Play again?';
    playAgainButton.style.width = '30%';

    var playerText = document.createElement('div');
    playerText.innerText = 'You';
    playerText.style.textAlign = 'center';


    return {
        ... optionsBars,
        opponentText:opponentText,
        playAgainButton:playAgainButton,
        playerText:playerText
    }
}

function _makeOptionsBars(){
    /* Opponent area */
    var opponentOptionsBar = document.createElement('div');
    opponentOptionsBar.classList.add('options-bar');
    opponentOptionsBar.style.transform = 'rotateX(180deg) rotateY(180deg)';

    var opponentRockSign = document.createElement('div');
    opponentRockSign.classList.add('rock');

    var opponentPaperSign = document.createElement('div');
    opponentPaperSign.classList.add('paper');

    var opponentScissorsSign = document.createElement('div');
    opponentScissorsSign.classList.add('scissors');

    var opponentLizardSign = document.createElement('div');
    opponentLizardSign.classList.add('lizard');

    var opponentSpockSign = document.createElement('div');
    opponentSpockSign.classList.add('spock');

    opponentOptionsBar.append(opponentRockSign, opponentPaperSign, opponentScissorsSign, opponentLizardSign, opponentSpockSign);
    
    /* Player area */
    var playerOptionsBar = document.createElement('div');
    playerOptionsBar.classList.add('options-bar');

    var playerRockSign = document.createElement('div');
    playerRockSign.classList.add('rock');

    var playerPaperSign = document.createElement('div');
    playerPaperSign.classList.add('paper');

    var playerScissorsSign = document.createElement('div');
    playerScissorsSign.classList.add('scissors');

    var playerLizardSign = document.createElement('div');
    playerLizardSign.classList.add('lizard');

    var playerSpockSign = document.createElement('div');
    playerSpockSign.classList.add('spock');

    playerOptionsBar.append(playerRockSign, playerPaperSign, playerScissorsSign, playerLizardSign, playerSpockSign);
    
    return {
        opponentOptionsBar:opponentOptionsBar,
        opponentRockSign:opponentRockSign,
        opponentPaperSign:opponentPaperSign,
        opponentScissorsSign:opponentScissorsSign,
        opponentLizardSign:opponentLizardSign,
        opponentSpockSign:opponentSpockSign,

        playerOptionsBar:playerOptionsBar,
        playerRockSign:playerRockSign,
        playerPaperSign:playerPaperSign,
        playerScissorsSign:playerScissorsSign,
        playerLizardSign:playerLizardSign,
        playerSpockSign:playerSpockSign
    }
}

function _makeInteractor(){
    var interactor = document.createElement('div');

    var startState = document.createElement('div');
    startState.id = 'start-state';

    var startText = document.createElement('div');
    startText.innerText = 'Hi, are you ready to begin?'
    startText.style.textAlign = 'center';
    startText.style.marginRight = '0.5vw';

    var startButton = document.createElement('button');
    startButton.classList.add('interactor-button');
    startButton.innerText = 'Y';
    startButton.style.marginRight = '0.5vw';

    var stopButton = document.createElement('button');
    stopButton.classList.add('interactor-button');
    stopButton.innerText = 'N';
    
    startState.append(startText, startButton, stopButton);

    var roundState = document.createElement('div');
    roundState.classList.add('hidden');
    roundState.id = 'round-state';
    roundState.innerText = 'Choose your sign.';

    var nextRoundState = document.createElement('div');
    nextRoundState.classList.add('hidden');
    nextRoundState.id = 'next-round-state';

    var nextRoundText = document.createElement('div');
    nextRoundText.innerText = 'Start next round:';
    nextRoundText.style.marginRight = '0.5vw';
    
    var nextRoundButtonStart = document.createElement('button');
    nextRoundButtonStart.classList.add('interactor-button');
    nextRoundButtonStart.innerText = 'Y';
    nextRoundButtonStart.style.marginRight = '0.5vw';

    var nextRoundButtonStop = document.createElement('button');
    nextRoundButtonStop.classList.add('interactor-button');
    nextRoundButtonStop.innerText = 'N';

    nextRoundState.append(nextRoundText, nextRoundButtonStart, nextRoundButtonStop);

    var tiedRoundState = document.createElement('div');
    tiedRoundState.id = 'tied-state';
    tiedRoundState.classList.add('hidden');

    var tiedRoundStateText = document.createElement('div');
    tiedRoundStateText.innerText = 'The Round is draw. Play again: ';
    
    var tiedRoundStateButton = document.createElement('button');
    tiedRoundStateButton.classList.add('interactor-button');
    tiedRoundStateButton.innerText = 'Go!';

    tiedRoundState.append(tiedRoundStateText, tiedRoundStateButton);

    var endState = document.createElement('div');
    endState.classList.add('hidden');
    endState.innerText = 'Thanks for playing!';

    interactor.append(startState, roundState, nextRoundState, tiedRoundState, endState);
    return {
        interactor:interactor,
        startState:startState,
        roundState:roundState,
        nextRoundState:nextRoundState,
        startButton:startButton,
        stopButton:stopButton,
        nextRoundButtonStart:nextRoundButtonStart,
        nextRoundButtonStop:nextRoundButtonStop,
        tiedRoundState:tiedRoundState,
        tiedRoundStateButton:tiedRoundStateButton,
        endState:endState
    }
}

function _makeBoard(){
    var board = document.createElement('div');
    board.classList.add('board')

    var roundsContainer = document.createElement('div');
    roundsContainer.classList.add('rounds-container');

    var scoreContainer = document.createElement('div');
    scoreContainer.classList.add('score-container');

    var scoreText = document.createElement('div');
    scoreText.innerText = 'Result';
    scoreText.style.textAlign = 'center';
    scoreText.style.marginBottom = '2vh';

    var opponentScore = document.createElement('div');
    opponentScore.classList.add('score-box');

    var playerScore = document.createElement('div');
    playerScore.classList.add('score-box');

    scoreContainer.append(scoreText, opponentScore, playerScore);

    board.append(roundsContainer, scoreContainer);
    return {
        board:board,
        roundsContainer: roundsContainer,
        scoreText:scoreText,
        scoreContainer: scoreContainer,
        opponentScore: opponentScore,
        playerScore: playerScore
    }
}

function _makeRound(roundNumber){
    var roundContainer = document.createElement('div');
    roundContainer.classList.add('round-container');
    
    var roundNumberText = document.createElement('div');
    roundNumberText.innerText = 'Round ' + roundNumber.toString();
    roundNumberText.style.textAlign = 'center';

    var statusBoxOpponent = document.createElement('div');
    statusBoxOpponent.classList.add('status-box');

    var opponentSign = document.createElement('div');
    opponentSign.classList.add('chosen-sign');

    var playerSign = document.createElement('div');
    playerSign.classList.add('chosen-sign');

    var statusBoxPlayer = document.createElement('div');
    statusBoxPlayer.classList.add('status-box');

    roundContainer.append(roundNumberText, statusBoxOpponent, opponentSign, playerSign, statusBoxPlayer);

    return {
        roundContainer:roundContainer,
        statusBoxOpponent:statusBoxOpponent, 
        opponentSign:opponentSign, 
        playerSign:playerSign,
        statusBoxPlayer:statusBoxPlayer
    }
}

/* End of making UI */
Game.prototype._makeUi = function(){
    this._mUi = {
        ... _makeRootContainer(),
        ... _makeGameContainer(),
        ... _makeBoard(),
        ... _makeInteractor(),
        rounds: []
    }
    this._mUi.gameContainer.append(this._mUi.opponentOptionsBar, this._mUi.opponentText, 
                                                this._mUi.playAgainButton, this._mUi.board, this._mUi.interactor, 
                                                this._mUi.playerText, this._mUi.playerOptionsBar);
    this._mRoot.append(this._mUi.window);
    this._mUi.stopButton.onclick = this._handleStartNoButton.bind(this);
    this._mUi.startButton.onclick = this._handleStartYesButton.bind(this);
    this._mUi.playerRockSign.onclick = this._handleChooseSign.bind(this, RockSign);
    this._mUi.playerPaperSign.onclick = this._handleChooseSign.bind(this, PaperSign);
    this._mUi.playerScissorsSign.onclick = this._handleChooseSign.bind(this, ScissorsSign);
    this._mUi.playerLizardSign.onclick = this._handleChooseSign.bind(this, LizardSign);
    this._mUi.playerSpockSign.onclick = this._handleChooseSign.bind(this, SpockSign);

    this._mUi.nextRoundButtonStart.onclick = this._handleNextRoundYesButton.bind(this);
    this._mUi.nextRoundButtonStop.onclick = this._handleNextRoundNoButton.bind(this);

    this._mUi.tiedRoundStateButton.onclick = this._handleTiedRoundButton.bind(this);
}

Game.prototype._handleStartNoButton = function(){
    this._mDidGameFinished = true;
    this._draw();
} 

Game.prototype._handleStartYesButton = function(){
    this._mDidGameStarted = true;
    this.startRound();    
    this._draw();
}

Game.prototype._handleNextRoundNoButton = function(){
    this._mDidGameFinished = true;
    this._draw();
}

Game.prototype._handleNextRoundYesButton = function(){
    this.startRound();
}

Game.prototype._handleTiedRoundButton = function(){
    this.startRound();
}

function getRandomSign(){
    var r = Math.floor(Math.random() * 5);
    switch(r){
        case 0:
            return new RockSign();
        case 1:
            return new PaperSign();
        case 2:
            return new ScissorsSign();
        case 3:
            return new LizardSign();
        case 4:
            return new SpockSign();
    }
}

Game.prototype._handleChooseSign = function(signConstructor){
    this.playSign(new signConstructor());

}

Game.prototype.start = function(){
    this._makeUi();
}

Game.prototype.startRound = function(){
    if(this._mRounds.length > 0){
        var lastRound = this._mRounds[this._mRounds.length - 1]
        if (lastRound.getOutcome().isItTie()){
            lastRound.setSigns(null, null);    
            console.log('hi');
            this._draw();
            return;
        }
    }

    lastRound = _makeRound(this._mRounds.length+1);

    this._mUi.rounds.push(lastRound);
    this._mRounds.push(new Round());
    this._mUi.roundsContainer.append(lastRound.roundContainer);
    lastRound.roundContainer.scrollIntoView();
    this._draw();
}

Game.prototype.playSign = function(playerSign){
    var opponentSign = getRandomSign();
    var lastRound = this._mRounds[this._mRounds.length-1];
    
    if (lastRound.getOutcome().stillNotPlayed()){
        lastRound.setSigns(playerSign, opponentSign);
        this.updateScore(lastRound.getOutcome());
        this._draw();
    }

}

Game.prototype.updateScore = function(outcome){
    if (outcome.didOpponentWin()){
        this._mResult.opponent++;
    } else if (outcome.didPlayerWin()){
        this._mResult.player++;
    }
}

Game.prototype.restart = function(){

}

Game.prototype._draw = function(){
    if (this._mDidGameFinished){
        hideElements([this._mUi.startState, this._mUi.roundState, this._mUi.nextRoundState]);
        showElements([this._mUi.endState]);
        return;
    }

    if (this._mDidGameStarted) {
        hideElements([this._mUi.startState, this._mUi.roundState, this._mUi.nextRoundState, this._mUi.tiedRoundState]);
        var lastRound = this._mRounds[this._mRounds.length - 1];

        var lastRoundOutome = lastRound.getOutcome();
        if (lastRoundOutome.didPlayerWin() || lastRoundOutome.didOpponentWin()){
            showElements([this._mUi.nextRoundState]);

        } else if (lastRoundOutome.isItTie()){
            showElements([this._mUi.tiedRoundState]);
        } else {
            showElements([this._mUi.roundState]);
        } 

        for (var roundIndex in this._mRounds){
            var currentRound = this._mRounds[roundIndex];
            var currentRoundUi = this._mUi.rounds[roundIndex];

            var currentRoundOutcome = currentRound.getOutcome();
            if (currentRoundOutcome.stillNotPlayed()){
                currentRoundUi.statusBoxOpponent.style.background = undefined;
                currentRoundUi.statusBoxPlayer.style.background = undefined;
                
                currentRoundUi.opponentSign.style.backgroundImage = 'url("images/question.png")';
                currentRoundUi.playerSign.style.backgroundImage = 'url("images/question.png")';
            } else if (currentRoundOutcome.didPlayerWin()){
                currentRoundUi.statusBoxOpponent.style.background = 'red';
                currentRoundUi.statusBoxPlayer.style.background = 'green';
                
                currentRoundUi.opponentSign.style.backgroundImage = 'url("'+currentRound.getOpponentSign().getImgUrl()+'")';
                currentRoundUi.playerSign.style.backgroundImage = 'url("'+currentRound.getPlayerSign().getImgUrl()+'")';    
            }  else if (currentRoundOutcome.didOpponentWin()){
                currentRoundUi.statusBoxOpponent.style.background = 'green';
                currentRoundUi.statusBoxPlayer.style.background = 'red';
                
                currentRoundUi.opponentSign.style.backgroundImage = 'url("'+currentRound.getOpponentSign().getImgUrl()+'")';
                currentRoundUi.playerSign.style.backgroundImage = 'url("'+currentRound.getPlayerSign().getImgUrl()+'")';    
            } else {
                currentRoundUi.statusBoxOpponent.style.background = undefined;
                currentRoundUi.statusBoxPlayer.style.background = undefined;
                
                currentRoundUi.opponentSign.style.backgroundImage = 'url("'+currentRound.getOpponentSign().getImgUrl()+'")';
                currentRoundUi.playerSign.style.backgroundImage = 'url("'+currentRound.getPlayerSign().getImgUrl()+'")';       
            }

        
        }

        this._mUi.playerScore.innerText = this._mResult.player;
        this._mUi.opponentScore.innerText = this._mResult.opponent;
    }
}

// function setOutcomeDetails(opponentColor, playerColor, opponentUrl, playerUrl){
//     currentRoundUi.statusBoxOpponent.style.background = opponentColor;
//     currentRoundUi.statusBoxPlayer.style.background = playerColor;
    
//     currentRoundUi.opponentSign.style.backgroundImage = 'url("'+currentRound.getOpponentSign().getImgUrl()+'")';
//     currentRoundUi.playerSign.style.backgroundImage = 'url("'+currentRound.getPlayerSign().getImgUrl()+'")';
// }

function hideElements(elements){
    for (var el of elements) {
        if (el !== undefined && el !== null && el.classList !== undefined){
            el.classList.add('hidden');
        }
    }
}

function showElements(elements){
    for (var el of elements) {
        if (el !== undefined && el !== null && el.classList !== undefined){
            el.classList.remove('hidden');
        }
    }
}