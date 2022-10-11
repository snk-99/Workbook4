let myScore = [92, 98, 84, 76, 89, 99, 100];
let yourScore = [82, 98, 94, 88, 92, 100, 100];
let scoreLength = myScore.length
let sum = 0
function getAverage() {
    for (let i = 0; i < scoreLength; i++) {
        sum += myScore[i];
    }
    console.log(sum);

    let average = sum / scoreLength;
    console.log(`Average:${average.toFixed(2)}`);
}

getAverage(myScore)



