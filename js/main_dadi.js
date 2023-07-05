let pcNumber = Math.round(Math.random() * 5) + 1;
console.log(pcNumber)

function casuale() {
    userNumber = Math.round(Math.random() * 5) + 1;
    document.getElementById("casuale").innerHTML = userNumber;
    if (pcNumber > userNumber) {
        console.log("hai perso")
        document.getElementById("result").innerHTML = "hai perso"
    } else if (pcNumber < userNumber) {
        console.log("hai vinto")
        document.getElementById("result").innerHTML = "hai vinto"
    } else if (pcNumber == userNumber) {
        console.log("tira dinuovo il dado")
        document.getElementById("result").innerHTML = "tira dinuovo il dado"
    }
}

