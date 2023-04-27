var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var previousshots = []; // массив для хранения ранее введенных значений

while (isSunk == false) {
    guess = prompt("Готовсь, цельсь, огонь! (введите номер от 0-6):");
    if (isNaN(guess)) {
        alert("Введите число!");
    } else if (guess < 0 || guess > 6) {
        alert("Пожалуйста, введите правильное значение!");
    } else if(previousshots.includes(guess)) { // проверяем наличие введенного значения в массиве
        alert("Вы уже вводили это значение, пожалуйста, введите другое значение!");
    } else {    
        guesses = guesses + 1;
        previousshots.push(guess); // добавляем введенное значение в массив
        
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Попал!");
            hits = hits + 1; 
            if (hits == 3) {
                isSunk = true;
                alert("Вы потопили мой линкор!");
            }
        } else {
           alert("Промах");
        }
    }
}
var stats = "Вы потратили " + guesses + " попыток чтобы потопить Линкор, " +
"это означает, что ваша точность была " + (3/guesses);
alert(stats);