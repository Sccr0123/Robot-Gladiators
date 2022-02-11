//Creates the user's robot's stats
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10

//Creates the enemy robot stats
var enemyNames = ["Roboto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//Creates rounds
var rounds = 0;

//Creates fight()
var fight = function(enemyName) {
    window.alert("Welcome To Robot Gladiators! Round " + (i+1) + ("!"));
    enemyName = enemyNames[i];

    while (enemyHealth > 0 && playerHealth > 0){

        //Fight or Skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this round? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "FIGHT" || promptFight === "fight") {

            //Enemy Attack
            enemyHealth = enemyHealth - playerAttack;
            //Log resulting attack results
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.")

            //Checks enemy health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                window.prompt("You Have Defeated " + enemyName + "!")
                break;
            }
            else {
                window.alert(enemyName + " still has " + enemyHealth +" health left.");
            }

            //User Attack
            playerHealth = playerHealth - enemyAttack;
            //Log resulting attack results
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")

            //Checks player health
            if (playerHealth > 0) {
                window.alert(playerName + " still has " + playerHealth +" health left.");
            }
            else {
                window.alert(playerName + " has died!");
                break;
            }
            
            console.log();
        }
        else if (promptFight === "SKIP" || promptFight === "skip") {
            //Confirm skip
            var confirmSkip = window.confirm("Are you sure you'd like to skip?");
                if (confirmSkip) {

                    window.alert(playerName + " has chosen to skipped the fight for $10!");
                    var playerMoney = playerMoney - 10;

                    //Shows remaining money
                    console.log("You have $" + playerMoney + " remaining!");
                    break;
                }
                else {
                    fight()
                }
        }
        else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }
}

//Game
for (i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        fight(enemyNames[i]);
        enemyHealth = 50;
    }

    else  {
        break;
    }

}

if (playerHealth <= 0) {
    window.alert("YOU DIED! GAME OVER!")
}
else {
    window.alert("Congrats, You Have Defeated The Robots! Game Over!")
}

