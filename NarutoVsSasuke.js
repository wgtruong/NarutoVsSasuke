let narutoNature;
let sasukeNature;
let narutoHealth = 100;
let sasukeHealth = 100;

game();
console.log("");

function computerPlay() {
    randomNumber = Math.floor(Math.random() * 5);

    switch(randomNumber) {
        case 0:
            sasukeNature = "fire";
            break;
        case 1:
            sasukeNature = "wind";
            break;
        case 2:
            sasukeNature = "lightning";
            break;
        case 3:
            sasukeNature = "earth";
            break;
        case 4:
            sasukeNature = "water";
            break;
    }
}

function playRound() {

    if (narutoNature == "fire" && sasukeNature == "wind") {
        sasukeHealth -= 20;
        console.log("Fire is super effective versus wind! You deal 20 damage to Sasuke.");
    }
    else if (narutoNature == "wind" && sasukeNature == "lightning") {
        sasukeHealth -= 20;
        console.log("Wind is super effective versus lightning! You deal 20 damage to Sasuke.");
    }
    else if (narutoNature == "lightning" && sasukeNature == "earth") {
        sasukeHealth -= 20;
        console.log("Lightning is super effective versus earth! You deal 20 damage to Sasuke.");
    }
    else if (narutoNature == "earth" && sasukeNature == "water") {
        sasukeHealth -= 20;
        console.log("Earth is super effective versus water! You deal 20 damage to Sasuke.");
    }
    else if (narutoNature == "water" && sasukeNature == "fire") {
        sasukeHealth -= 20;
        console.log("Water is super effective versus fire! You deal 20 damage to Sasuke.");
    }
    else if (sasukeNature == "fire" && narutoNature == "wind") {
        narutoHealth -= 20;
        console.log("Wind is weak against fire! You took 20 damage from Sasuke.");
    }
    else if (sasukeNature == "wind" && narutoNature == "lightning") {
        narutoHealth -= 20;
        console.log("Lightning is weak against wind! You took 20 damage from Sasuke.");
    }
    else if (sasukeNature == "lightning" && narutoNature == "earth") {
        narutoHealth -= 20;
        console.log("Earth is weak against lightning! You took 20 damage from Sasuke.");
    }
    else if (sasukeNature == "earth" && narutoNature == "water") {
        narutoHealth -= 20;
        console.log("Water is weak against earth! You took 20 damage from Sasuke.");
    }
    else if (sasukeNature == "water" && narutoNature == "fire") {
        narutoHealth -= 20;
        console.log("Fire is weak against water! You took 20 damage from Sasuke.");
    }
    else {
        narutoHealth -= 10;
        sasukeHealth -= 10;
        console.log("You both did 10 damage to each other.")
    }
}

function game() {
    while(narutoHealth > 0 && sasukeHealth > 0) {

        narutoNature = prompt ("Pick a chakra nature for this round(fire, wind, lightning, earth, water).");
        narutoNature.toLowerCase();
        computerPlay();
        playRound();
        if (narutoHealth <= 0 && sasukeHealth <= 0) {
            narutoHealth = 0;
            sasukeHealth = 0;
            console.log("");
            console.log("You and Sasuke were evenly matched and both lost an arm!");  
            alert("You and Sasuke were evenly matched and both lost an arm!");        
            break;
        }
        if (narutoHealth <= 0) {
            narutoHealth = 0;
            console.log("");
            console.log("Sadly you were not strong enough to defeat Sasuke. Keep training!");
            alert("Sadly you were not strong enough to defeat Sasuke. Keep training!");
            break;
        }
        if (sasukeHealth <= 0) {
            sasukeHealth = 0;
            console.log("");
            console.log("Congratulations you defeated Sasuke and kept your nindo way!");
            alert("Congratulations you defeated Sasuke and kept your nindo way!");    
            break;       
        }
        console.log("Your current health: " + narutoHealth + "%");
        console.log("Sasuke's current health: " + sasukeHealth + "%");
        console.log("");
    }  
}