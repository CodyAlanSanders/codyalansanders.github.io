//Quiz begins. Set # of answers correct at 0.
var correct = 0;

//Ask questions.
var question1 = prompt("Who manufactures the popular racing wheels RFP-1s?")
if (question1.toUpperCase() === 'ENKEI') {
  correct++;
  console.log("Number correct: " + correct);
}

var question2 = prompt("For its 2015 model year, the Ford Mustang celebrated it's __ year anniversary?")
if (question2 === '50') {
  correct++;
  console.log("Number correct: " + correct);
}

var question3 = prompt("The Bugatti Veyron utilizes a W-shaped engine layout comprised of how many cylinders?")
if (question3 === '16') {
  correct++;
  console.log("Number correct: " + correct);
}

var question4 = prompt("The Mitsubishi Lancer Evolution model spanned how many generations?")
if (question4 === '10') {
  correct++;
  console.log("Number correct: " + correct);
}

var question5 = prompt("Subaru's variant of the FT-86 platform became known as the Subaru _____?")
if (question5.toUpperCase() === 'BRZ') {
  correct++;
  console.log("Number correct: " + correct);
}

if (correct === 5) {
    alert("Gold Trophy- just like you couldn't get in Gran Turismo's license tests.");  
} else if (correct === 4 || correct === 3) {
    alert("Silver Trophy- at least, as seen on a nice set of Enkeis, silver is a classy color.");
} else if (correct === 2 || correct === 1) {
    alert("Bronze Trophy- you need to play more Forza.");
} else {
    alert("You got absolutely no automotive questions right. Go back to playing Call of Duty, bro.");
}
  