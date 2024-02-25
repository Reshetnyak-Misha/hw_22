let money = 1000;
let step = +prompt("enter your step");
let bid = prompt("color");
while(money > 0) {
    let rand = Math.floor(Math.random() * 2);
    if (rand === 0) {
        rand = "red";
    } else {
        rand = "black";
    }
    if (bid === rand) {
        alert("you win", money);
        money += step;
    } else {
        alert("you lose", money);
        money -= step;
        step *= 2;
    }
    alert(money);
}

alert(`The casino always wins, now you should ${money * -1}. They've already left for you!`)