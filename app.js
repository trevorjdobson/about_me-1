'use strict';

var userScore = 0;

var user = prompt('Hi stranger, I\'m Michael. Who might I have the honor of addressing?');
alert('Welcome  ' + user + '! I assume your here because you want to get to know me! Soooo....lets make this introduction fun with a guessing game!!!');
console.log('You\'ll be joined by ' + user + ' for this game.');

var whereFrom = prompt('Was Michael born in Washington? Y/N?').toLowerCase();
console.log('Q2. Was Mike born in Washington? User says: ' + whereFrom + '.');

if (whereFrom === 'no' || whereFrom === 'n') {
  userScore++;
} else {
  alert('Nope! He\'s actually from Michigan. He\'s lived here for about 2 1/2 years.');
  userScore = 0;
};

alert('You\'ve guessed correctly ' + userScore + ' time.');

var petStatus = prompt('Does Mike have any pets? Y/N?').toLowerCase();
console.log('Q3. Does Mike have any pets? User says: ' + petStatus + '.');

if (petStatus === 'no' || petStatus === 'n' ) {
  userScore++;
} else {
  alert('Ohhhh wrong again! He does not. He has lived with lots of roommates who have cats though, so....vicariously livin is he!!!');
  userScore = 0;
}

alert('You\'ve guessed correctly ' + userScore + ' times.');

var martian = prompt('Would Mike volunteer to live on Mars? Y/N?').toLowerCase();
console.log('Q4. Mike wants to be a Martian? User says: ' + martian + '.');

if (martian === 'yes' || martian === 'y' ) {
  userScore++;
} else {
  alert('Actually, he wouldn\'t be opposed to the idea. I mean it would be kinda cool right!?!?!');
  userScore = 0;
}
alert('You\'ve guessed correctly' + userScore + ' times.');

var codeLove = prompt('Does Mike enjoy coding? Y/N?').toLowerCase();
console.log('Q4. Mike enjoys coding at this point? User says: ' + codeLove + '.');

if (codeLove === 'yes' || codeLove === 'y' ) {
  userScore++;
} else {
  alert('So far he does.....so far...ask me again later.');
  userScore = 0;
}
alert('You\'ve guessed correctly' + userScore + ' times!');
