//Creates the user's robot's stats
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10

//Creates the enemy robot stats
var enemyName = "Roboto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome To Robot Gladiators!");

    //Fight or Skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this round? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight = "FIGHT" || promptFight = "fight") {

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
    else if (promptFight = "SKIP" || promptFight = "skip") {
        //Confirm skip
        var confirmSkip = window.confirm("Are you sure you'd like to skip?");
            if (confirmSkip) {

                window.alert(playerName + " has chosen to skip the fight for $2!");
                var playerMoney = playerMoney - 2;
            }
            else {
                fight()
            }
    }
    else {
        window.alert("You need to choose a valid option. Try again!");
    }
}

//LEFT OFF AT 3.1.7
fight()