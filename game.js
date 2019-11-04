// Class Game 
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

/* Start of making parts for UI */ 
// Function that makes whole window that contains of three parts. ###### DONE #####
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

// Function for making game play area: Player and opponent playboards, as well as gameboard. ###### DONE #####
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

// Function for adding signs to playboards.
function _makeOptionsBars(){
    // Opponent area 
    var opponentOptionsBar = document.createElement('div');
    opponentOptionsBar.classList.add('options-bar');
    opponentOptionsBar.style.transform = 'rotateX(180deg) rotateY(180deg)';

    /* Jel moze da se napravi ovakva funkcija? Msm cilj je smanjiti ponavljanja.

    _createOptionsBar(signs){
        for (sign of signs){
            var s = document.createElement('div')
            s.classList.add(sign)
        }
    }
    var opponentOptionsBar = _createOptionsBar(['rock', 'paper', 'scissors', 'lizard', 'spock']) 
    return { ... _createOptionsBar() }
    
    Isto ovako i za playera */

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
    // Player area
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

// Function that represents interactor of the game. Divided into several states. Each state got his own options.
function _makeInteractor(){
    var interactor = document.createElement('div');

    // States
    var startState = _startState();
    var roundState = _roundState();
    var nextRoundState = _nextRoundState(); 
    var tiedRoundState = _tiedRoundState();
    var endState = _endState();

    interactor.append(startState.startState, roundState.roundState, nextRoundState.nextRoundState, 
                      tiedRoundState.tiedRoundState, endState.endState);
    return {
        interactor:interactor,
        ... startState,
        ... roundState,
        ... nextRoundState,
        ... tiedRoundState,
        ... endState
    }
}

// Start state of interactor.
function _startState(){
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
    return {
        startState:startState,
        startButton:startButton,
        stopButton:stopButton,
    }
}

// Round state of interactor.
function _roundState(){
    var roundState = document.createElement('div');
    roundState.classList.add('hidden');
    roundState.id = 'round-state';
    roundState.innerText = 'Choose your sign.';

    return {
        roundState:roundState
    }
}

// Next round state of interactor.
function _nextRoundState(){
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
    return {
        nextRoundState:nextRoundState,
        nextRoundButtonStart:nextRoundButtonStart,
        nextRoundButtonStop:nextRoundButtonStop
    }
}

// State of interactor when the game is tie.
function _tiedRoundState(){
    var tiedRoundState = document.createElement('div');
    tiedRoundState.id = 'tied-state';
    tiedRoundState.classList.add('hidden');

    var tiedRoundStateText = document.createElement('div');
    tiedRoundStateText.innerText = 'The Round is draw. Play again: ';
    tiedRoundStateText.style.marginRight = '0.5vw';
    
    var tiedRoundStateButton = document.createElement('button');
    tiedRoundStateButton.classList.add('interactor-button');
    tiedRoundStateButton.innerText = 'Go!';

    tiedRoundState.append(tiedRoundStateText, tiedRoundStateButton);
    return {
        tiedRoundState:tiedRoundState,
        tiedRoundStateButton:tiedRoundStateButton
    }
}

// End state of interactor.
function _endState(){
    var endState = document.createElement('div');
    endState.classList.add('hidden');
    endState.innerText = 'Thanks for playing!';
    return {
        endState:endState
    }
}

// Function that makes board of the game. It contains rounds and result/score.
function _makeBoard(){
    var board = document.createElement('div');
    board.classList.add('board')

    var roundsContainer = document.createElement('div');
    roundsContainer.classList.add('rounds-container');

    var scoreContainer = _makeScoreContainer();

    board.append(roundsContainer, scoreContainer.scoreContainer);
    return {
        board:board,
        roundsContainer: roundsContainer,
        ... scoreContainer
    }
}

// Function that makes score container for board.
function _makeScoreContainer(){
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
    return {
        scoreContainer:scoreContainer,
        opponentScore:opponentScore,
        playerScore:playerScore
    }
}

// function that makes round of the game. ###### DONE #####
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
    opponentSign.style.transform = 'rotateX(180deg) rotateY(180deg)';

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
/* End of making parts for UI */

// UI maker.
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
    this._bindHandlers();
}

// Function that handles all bind functions
Game.prototype._bindHandlers = function(){
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
    this._mUi.playAgainButton.onclick = this.restart.bind(this);
}

// Next couple of functions are handlers for interactor. They contain indicators for UI setting and drawing. 
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

Game.prototype._handleChooseSign = function(signConstructor){
    this.playSign(new signConstructor());
}

// Function for getting sign for your opponent
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

// Function that gives API.
Game.prototype.start = function(){
    this._makeUi();
}

// Function that starts round.
Game.prototype.startRound = function(){
    if(this._mRounds.length > 0){
        var lastRound = this._mRounds[this._mRounds.length - 1]
        if (lastRound.getOutcome().isItTie()){
            lastRound.setSigns(null, null);    
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

// Function that plays signs, and depending of the outcome calls function that updates score.
Game.prototype.playSign = function(playerSign){
    var opponentSign = getRandomSign();
    var lastRound = this._mRounds[this._mRounds.length-1];
    
    if (lastRound.getOutcome().stillNotPlayed()){
        lastRound.setSigns(playerSign, opponentSign);
        this.updateScore(lastRound.getOutcome());
        this._draw();
    }

}

// Function that updates score of the game depending on the outcome of the round.
Game.prototype.updateScore = function(outcome){
    if (outcome.didOpponentWin()){
        this._mResult.opponent++;
    } else if (outcome.didPlayerWin()){
        this._mResult.player++;
    }
}

// Function that restarts the game.
Game.prototype.restart = function(){
    this._mUi.roundsContainer.innerHTML = '';

    this._mUi.rounds = [];
    this._mRounds = [];
    this._mResult = {
        player : 0,
        opponent : 0,
    };

    this._mDidGameFinished = false;
    this._mDidGameStarted = false;
    this._draw();
}

// Function that draws the UI depending on the state of the game.
Game.prototype._draw = function(){
    if (this._mDidGameStarted === false && this._mDidGameFinished === false){
        hideElements([this._mUi.endState, this._mUi.roundState, this._mUi.nextRoundState]);
        showElements([this._mUi.startState]);

        hideElements([this._mUi.playAgainButton]);
        this._mUi.playerScore.innerText = this._mResult.player;
        this._mUi.opponentScore.innerText = this._mResult.opponent;
    }

    if (this._mDidGameFinished){
        hideElements([this._mUi.startState, this._mUi.roundState, this._mUi.nextRoundState]);
        showElements([this._mUi.endState]);

        showElements([this._mUi.playAgainButton]);
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
                setOutcomeDetails(currentRoundUi, currentRound, undefined, undefined);
            } else if (currentRoundOutcome.didPlayerWin()){
                setOutcomeDetails(currentRoundUi, currentRound, 'red', 'green'); 
            }  else if (currentRoundOutcome.didOpponentWin()){
                setOutcomeDetails(currentRoundUi, currentRound, 'green', 'red');
            } else {
                setOutcomeDetails(currentRoundUi, currentRound, undefined, undefined);    
            }
        }

        this._mUi.playerScore.innerText = this._mResult.player;
        this._mUi.opponentScore.innerText = this._mResult.opponent;
    }
}

// Function that sets details of the outcome in UI. It sets color and signs both of opponent and player.
function setOutcomeDetails(currentRoundUi, currentRound, opponentColor, playerColor){
    currentRoundUi.statusBoxOpponent.style.background = opponentColor;
    currentRoundUi.statusBoxPlayer.style.background = playerColor;
    
    var opponentUrl = currentRound.getOpponentSign() !== null ? currentRound.getOpponentSign().getImgUrl() : 'images/question.png';
    var playerUrl = currentRound.getPlayerSign() !== null ? currentRound.getPlayerSign().getImgUrl() : 'images/question.png';

    currentRoundUi.opponentSign.style.backgroundImage = 'url("'+opponentUrl+'")';
    currentRoundUi.playerSign.style.backgroundImage = 'url("'+playerUrl+'")';
}

// Function that hides elements. Mainly used for the interactor part.
function hideElements(elements){
    for (var el of elements) {
        if (el !== undefined && el !== null && el.classList !== undefined){
            el.classList.add('hidden');
        }
    }
}

// Function that shows elements. Mainly used for the interactor part.
function showElements(elements){
    for (var el of elements) {
        if (el !== undefined && el !== null && el.classList !== undefined){
            el.classList.remove('hidden');
        }
    }
}