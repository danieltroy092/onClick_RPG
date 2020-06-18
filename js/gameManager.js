let GameManager = {
  setGameStart: function (classType) {
    this.resetPlayer(classType);
    this.setPreFight(classType);
  },
  resetPlayer: function (classType) {
    // Create Player
    switch (classType) {
      case 'Warrior': // Class Type
        player = new Player(classType, 200, 0, 200, 100, 50); //  set stats
        break;
      case 'Mage': // Class Type
        player = new Player(classType, 80, 0, 50, 200, 50); //  set stats
        break;
      case 'Rogue': // Class Type
        player = new Player(classType, 100, 0, 100, 150, 200); //  set stats
        break;
      case 'Hunter': // Class Type
        player = new Player(classType, 200, 0, 50, 200, 100); //  set stats
        break;
    }

    // Manipulate the DOM to set values for player attributes per classType
    let getInterface = document.querySelector('.interface');
    getInterface.innerHTML =
      '<img src="img/player/' +
      classType.toLowerCase() +
      '.png" class="img-avatar"><div><h3>' +
      classType +
      '</h3><p>Health: ' +
      player.health +
      '</p><p>Mana: ' +
      player.mana +
      '</p><p>Strength: ' +
      player.strength +
      '</p><p>Agility: ' +
      player.agility +
      '</p><p>Speed: ' +
      player.speed +
      '</p></div>';
  },
  // Set Environment
  setPreFight: function () {
    let getHeader = document.querySelector('.header');
    let getActions = document.querySelector('.actions');
    let getArena = document.querySelector('.arena');
    getHeader.innerHTML = '<p>Quest: Locate Enemy!</p>';
    getActions.innerHTML =
      '<a href="#" class="btn-prefight" onClick="GameManager.setFight()">Locate Enemy!</a>';
    getArena.style.visibility = 'visible';
  },

  // Set Fight
  setFight: function () {
    let getHeader = document.querySelector('.header');
    let getActions = document.querySelector('.actions');
    let getEnemy = document.querySelector('.enemy');

    // Create enemy
    let enemy00 = new Enemy('Goblin', 100, 0, 50, 200, 200); // Class & Stats
    let enemy01 = new Enemy('Orc', 150, 0, 100, 50, 50); // Class & Stats
    let enemy02 = new Enemy('Beast', 200, 0, 150, 100, 100); // Class & Stats

    // Randomise Enemy
    let pickRandomEnemy = Math.floor(Math.random() * Math.floor(3));
    switch (pickRandomEnemy) {
      case 0:
        enemy = enemy00; // Goblin
        break;
      case 1:
        enemy = enemy01; // Orc
        break;
      case 2:
        enemy = enemy02; // Beast
        break;
    }
    // Manipulate the DOM to set values for enemy attributes per enemyType
    getHeader.innerHTML = '<p>Task: Choose your move!</p>';
    getActions.innerHTML =
      '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
    getEnemy.innerHTML =
      '<img src="img/enemy/' +
      enemy.enemyType.toLowerCase() +
      '.png" class="img-avatar"><div><h3>' +
      enemy.enemyType +
      '</h3><p>Health: ' +
      enemy.health +
      '</p><p>Mana: ' +
      enemy.mana +
      '</p><p>Strength: ' +
      enemy.strength +
      '</p><p>Agility: ' +
      enemy.agility +
      '</p><p>Speed: ' +
      enemy.speed +
      '</p></div>';
  },
};
