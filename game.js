/* Class Game */
function Game(rootId) {
    this._mUi = {};
    this._mRounds = [];
    this._mResult = {
        player : 0,
        opponent : 0,
    };

    this._mRoot = document.getElementById(rootId);
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
    playAgainButton.style.visibility = 'hidden';

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
    interactor.innerText = 'Greetings.'
    interactor.style.textAlign = 'center';

    return {
        interactor:interactor
    }
}

function _makeBoard(){
    var board = document.createElement('div');
    board.classList.add('board')

    var roundsContainer = document.createElement('div');
    roundsContainer.classList.add('rounds-container');

    var scoreContainer = document.createElement('div');
    scoreContainer.classList.add('score-container');

    var opponentScore = document.createElement('div');
    opponentScore.classList.add('score-box');

    var playerScore = document.createElement('div');
    playerScore.classList.add('score-box');

    scoreContainer.append(opponentScore, playerScore);

    board.append(roundsContainer, scoreContainer);
    return {
        board:board,
        roundsContainer: roundsContainer,
        scoreContainer: scoreContainer,
        opponentScore: opponentScore,
        playerScore: playerScore
    }
}

/* End of making UI */
Game.prototype._makeUi = function(){
    this._mUi = {
        ... _makeRootContainer(),
        ... _makeGameContainer(),
        ... _makeBoard(),
        ... _makeInteractor(),
        // rounds: [{roundTitle: div, roundOpWinBox: div, }, {roundTitle: div, roundOpWinBox: div, }, {roundTitle: div, roundOpWinBox: div, }, {}, {}, {}]
    }
    this._mUi.gameContainer.append(this._mUi.opponentOptionsBar, this._mUi.opponentText, 
                                                this._mUi.playAgainButton, this._mUi.board, this._mUi.interactor, 
                                                this._mUi.playerText, this._mUi.playerOptionsBar);
    this._mRoot.append(this._mUi.window);
}


Game.prototype.start = function(){
    this._makeUi();
}

Game.prototype.startRound = function(){

}

Game.prototype.playSign = function(sign){
}

Game.prototype.restart = function(){

}

/* End of Class Game */