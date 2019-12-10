/* Class Sign */
function Sign(name, imgUrl){
    this._mName = name;
    this._mImgUrl = imgUrl;
}

/* Compares two signs and returns winner */
Sign.prototype.compare = function(otherSign){
    throw new Error('Not implemented');
}

Sign.prototype.getImgUrl = function(){
    return this._mImgUrl;
}

Sign.prototype.getName = function(){
    return this._mName;
}
/* End of Class Sign */

/* Class SignCompareOutcome */
function SignCompareOutcome(outcome){
    this._mOutcome = outcome;
}

/* Static variables in order to remove magic constants from code*/
SignCompareOutcome.LOSS = -1;
SignCompareOutcome.TIE = 0;
SignCompareOutcome.WIN = 1;

SignCompareOutcome.prototype.isLoss = function(){
    return this._mOutcome === SignCompareOutcome.LOSS;
}

SignCompareOutcome.prototype.isTied = function(){
    return this._mOutcome === SignCompareOutcome.TIE;
}

SignCompareOutcome.prototype.isWin = function(){
    return this._mOutcome === SignCompareOutcome.WIN;
}

/* Functions that are more suitable for creating for SignCompareOutcome  */
SignCompareOutcome.createLoss = function(){
    return new SignCompareOutcome(SignCompareOutcome.LOSS);
}

SignCompareOutcome.createTie = function(){
    return new SignCompareOutcome(SignCompareOutcome.TIE);
}

SignCompareOutcome.createWin = function(){
    return new SignCompareOutcome(SignCompareOutcome.WIN);
}
/* End of Class SignCompareOutcome */