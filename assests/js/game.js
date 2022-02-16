//Function To Get Player Name
var getPlayerName = function() {
    var name = "";

    while(name === "" || name === null) {
        name = window.prompt("What Is Your Robot Name?");
    }

    console.log("Your Robot's Name Is " + name);
    return name;
}

var fightOrSkip = function() {
    //Ask Player If They Would Like To Fight Or Skip
    var promptFight = window.prompt("Would You Like To FIGHT Or SKIP This Battle?").toLowerCase();

    //Recursive Loop To Check Input
    if (promptFight === "" || promptFight === null){
        window.alert("You need to provide a vallid answer! Please try again.");
        return fightOrSkip();
    }

    if (promptFight === "skip") {
        var confirmSkip = window.confirm("Are You Sure You'd Like To Quit?");

        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerInfo.playerMoney = playerInfo.money - 10;
            
            return true;
        }
    }

    return false;

}

// Fight function (now with parameter for enemy's name)
var fight = function(enemy) {
    var isPlayerTurn = true;

    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }

    while (playerInfo.health > 0 && enemy.health > 0) {
        if (isPlayerTurn) {

            if (fightOrSkip()) {
                break;
            }
        }

    // Remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    console.log(playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.');

    // Check enemy's health
    if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');

        // Award player money for winning
        playerInfo.money = playerInfo.money + 20;

        // Leave while() loop since enemy is dead
        break;
    } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // Remove players's health by subtracting the amount set in the enemy.attack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.');

     // Check player's health
    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!');

        // Leave while() loop if player is dead
        break;
    } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
        }

        isPlayerTurn = !isPlayerTurn;
    }
};



// Function To Start Game
var startGame = function() {
    // Resets Player Stats
    playerInfo.reset();

    // Fight each enemy-robot by looping over them and fighting them one at a time
    for (var i = 0; i < enemyInfo.length; i++) {
        // If player is still alive, keep fighting
        if (playerInfo.health > 0) {
            // Let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

            // Pick new enemy to fight based on the index of the enemy.names array
            var pickedEnemyObj = enemyInfo[i];

            // Reset enemy.health before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);

            // Pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
            fight(pickedEnemyObj);

            // Enter shop if not last enemy
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                // Asks player if they want to enter the shop
                var shopConfirm = window.confirm("The fight is over, visit the shop before the next round?");

                if (shopConfirm) {
                    shop();
                }
            }
        }

        // If player isn't alive, stop the game
        else {
            window.alert('You have lost your robot in battle! Game Over!');
            break;
        }
    }

    // End Game Function
    endGame();
};

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    // check localStorage for high score, if it's not there, use 0
    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
        highScore = 0;
    }
    // if player has more money than the high score, player has new high score!
    if (playerInfo.money > highScore) {
        localStorage.setItem("highscore", playerInfo.money);
        localStorage.setItem("name", playerInfo.name);

        alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
    } 
    else {
        alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    } 
    else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    console.log("You have entered the shop!");

    // Ask player what they want to do
    var ShopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE.");

    shopOptionPrompt = parseInt(shopOptionPrompt);

    switch (ShopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;

        case 2:
            playerInfo.upgradeAttack();
            break;

        case 3:
            window.alert(playerInfo.name + " left the store.");

            // Leave shop
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }

};

// Function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max-min + 1) + min);

    return value;
};

//Define Player and Enemies
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } 
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } 
        else {
            window.alert("You don't have enough money!");
        }
    }
};

var enemyInfo = [
    {
        name: "Roberto",
        attack: randomNumber(10,14),
        shield: {
            type: "wood",
            strength: 10,
        }
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
];

// Start the game when the site loads
startGame();
