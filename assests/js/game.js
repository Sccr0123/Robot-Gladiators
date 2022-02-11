//Creates the user's robot's stats
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//Creates the enemy robot stats
var enemyName = "Roboto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome To Robot Gladiators!");

    //Enemy Attack
    enemyHealth = enemyHealth - playerAttack;
    //Log resulting attack results
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.")

    //Checks enemy health
    if (enemyHealth <= 0) {
        wiindow.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth +" health left.");
    }

    //User Attack
    playerHealth = playerHealth - enemyAttack;
    //Log resulting attack results
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")

    //Checks player health
    if (playerHealth <= 0) {
        wiindow.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth +" health left.");
    }
}


//LEFT OFF AT 3.1.7
fight()