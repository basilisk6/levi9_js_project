/* Class Round*/
function Round (){
    this._mPlayerSign = null;
    this._mOpponentSign = null;
}

Round.prototype.setSigns = function(playerSign, opponentSign){
    if (playerSign === undefined){
        playerSign = null;
    }
    if (opponentSign === undefined){
        opponentSign = null;
    }

    this._mPlayerSign = playerSign;
    this._mOpponentSign = opponentSign;
}

Round.prototype.getPlayerSign = function(){
    return this._mPlayerSign;
}

Round.prototype.getOpponentSign = function(){
    return this._mOpponentSign;
}

Round.prototype.getOutcome = function(){
    if (this._mPlayerSign === null || this._mOpponentSign === null){
        return RoundOutcome.createNotPlayed();
    } 
    var signComparison = this._mPlayerSign.compare(this._mOpponentSign);
    if (signComparison.isWin()){
        return RoundOutcome.createPlayerWin();
    } else if (signComparison.isLoss()){
        return RoundOutcome.createOpponentWin();
    } else if (signComparison.isTied()){
        return RoundOutcome.createTie();
    }
}
/* End of Class Round */

/* Class RoundOutcome */
function RoundOutcome(outcome){
    this._mOutcome = outcome;
}

RoundOutcome.PLAYER_WIN = 1;
RoundOutcome.TIE = 0;
RoundOutcome.PLAYER_LOSE = -1;
RoundOutcome.NOT_PLAYED = 2;

RoundOutcome.prototype.didPlayerWin = function(){
    return this._mOutcome === RoundOutcome.PLAYER_WIN;
}

RoundOutcome.prototype.isItTie = function(){
    return this._mOutcome === RoundOutcome.TIE;
}

RoundOutcome.prototype.didOpponentWin = function(){
    return this._mOutcome === RoundOutcome.PLAYER_LOSE;
}

RoundOutcome.prototype.stillNotPlayed = function(){
    return this._mOutcome === RoundOutcome.NOT_PLAYED;
} 

/* Functions that are more suitable for creating for RoundOutcome */
RoundOutcome.createPlayerWin = function(){
    return new RoundOutcome(RoundOutcome.PLAYER_WIN);
}

RoundOutcome.createTie = function(){
    return new RoundOutcome(RoundOutcome.TIE);
}

RoundOutcome.createOpponentWin = function(){
    return new RoundOutcome(RoundOutcome.PLAYER_LOSE);
}

RoundOutcome.createNotPlayed = function(){
    return new RoundOutcome(RoundOutcome.NOT_PLAYED);
} 
/* End of Class RoundOutcome */