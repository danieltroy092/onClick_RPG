let GameManager = {
  setGameStart: function (classType) {
    this.resetPlayer(classType);
    this.setPreFight(classType);
  },
  resetPlayer: function (classType) {
    // starting player stats
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
  setPreFight: function () {},
};
