/* Class Rock */
function RockSign(){
    Sign.call(this, RockSign.NAME, 'images/rock.png');
}
RockSign.NAME = 'rock';

/* Class RockSign inheritated Class Sign */
RockSign.prototype = Object.create(Sign.prototype)

RockSign.prototype.compare = function(otherSign){
    if((otherSign.getName() === ScissorsSign.NAME) || (otherSign.getName() === LizardSign.NAME)){
        return SignCompareOutcome.createWin();
    } else if ((otherSign.getName() === SpockSign.NAME) || (otherSign.getName() === PaperSign.NAME)){
        return SignCompareOutcome.createLoss();
    } else {
        return SignCompareOutcome.createTie();
    }
}
/* End of Class Rock */

/* Class Paper */
function PaperSign(){
    Sign.call(this, PaperSign.NAME, 'images/paper.png');
}
PaperSign.NAME = 'paper';

/* Class PaperSign inheritated Class Sign */
PaperSign.prototype = Object.create(Sign.prototype)

PaperSign.prototype.compare = function(otherSign){
    if((otherSign.getName() === RockSign.NAME) || (otherSign.getName() === SpockSign.NAME)){
        return SignCompareOutcome.createWin();
    } else if ((otherSign.getName() === ScissorsSign.NAME) || (otherSign.getName() === LizardSign.NAME)){
        return SignCompareOutcome.createLoss();
    } else {
        return SignCompareOutcome.createTie();
    }
}
/* End of Class Paper */

/* Class Scissors */
function ScissorsSign(){
    Sign.call(this, ScissorsSign.NAME, 'images/scissors.png');
}
ScissorsSign.NAME = 'scissors';

/* Class ScissorsSign inheritated Class Sign */
ScissorsSign.prototype = Object.create(Sign.prototype)

ScissorsSign.prototype.compare = function(otherSign){
    if((otherSign.getName() === PaperSign.NAME) || (otherSign.getName() === LizardSign.NAME)){
        return SignCompareOutcome.createWin();
    } else if ((otherSign.getName() === SpockSign.NAME) || (otherSign.getName() === RockSign.NAME)){
        return SignCompareOutcome.createLoss();
    } else {
        return SignCompareOutcome.createTie();
    }
}
/* End of Class Scissors */

/* Class Lizard */
function LizardSign(){
    Sign.call(this, LizardSign.NAME, 'images/lizard.png');
}
LizardSign.NAME = 'lizard';

/* Class LizardSign inheritated Class Sign */
LizardSign.prototype = Object.create(Sign.prototype)

LizardSign.prototype.compare = function(otherSign){
    if((otherSign.getName() === PaperSign.NAME) || (otherSign.getName() === SpockSign.NAME)){
        return SignCompareOutcome.createWin();
    } else if ((otherSign.getName() === RockSign.NAME) || (otherSign.getName() === ScissorsSign.NAME)){
        return SignCompareOutcome.createLoss();
    } else {
        return SignCompareOutcome.createTie();
    }
}
/* End of Class Lizard */

/* Class Spock */
function SpockSign(){
    Sign.call(this, SpockSign.NAME, 'images/spock.png');
}
SpockSign.NAME = 'spock';

/* Class SpockSign inheritated Class Sign */
SpockSign.prototype = Object.create(Sign.prototype)

SpockSign.prototype.compare = function(otherSign){
    if((otherSign.getName() === RockSign.NAME) || (otherSign.getName() === ScissorsSign.NAME)){
        return SignCompareOutcome.createWin();
    } else if ((otherSign.getName() === PaperSign.NAME) || (otherSign.getName() === LizardSign.NAME)){
        return SignCompareOutcome.createLoss();
    } else {
        return SignCompareOutcome.createTie();
    }
}
/* End of Class Spock */

