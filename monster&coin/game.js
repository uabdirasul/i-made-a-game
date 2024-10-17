class mainScene {
  preload() {
    // Load all the assets
    this.load.image("monster", "assets/monster.png");
    this.load.image("coin", "assets/coin.png");

    // Load the sound file (ensure it's in the correct folder)
    this.load.audio("coinSound", "assets/coin-collect-sound.mp3");
  }

  create() {
    // Create the monster and coin sprites
    this.monster = this.physics.add.sprite(100, 100, "monster");
    this.coin = this.physics.add.sprite(300, 300, "coin");

    // Set the size of the monster and coin
    this.monster.setDisplaySize(50, 50);
    this.coin.setDisplaySize(40, 40);

    // Initialize score
    this.score = -10;

    // Style for the score text
    let style = { font: "20px Arial", fill: "#fff" };

    // Display the score
    this.scoreText = this.add.text(20, 20, "score: " + this.score, style);

    // Load the sound into the scene
    this.coinSound = this.sound.add("coinSound");

    // Moving the "monster" :)
    this.arrow = this.input.keyboard.createCursorKeys();

    // Set world bounds
    this.physics.world.setBounds(0, 0, 700, 400);

    // Enable bounds for the monster
    this.monster.setCollideWorldBounds(true);

    // Ensure the AudioContext resumes on user interaction
    this.input.once("pointerdown", () => {
      this.sound.context.resume();
    });
  }

  hit() {
    // Change the position x and y of the coin randomly
    this.coin.x = Phaser.Math.Between(100, 600);
    this.coin.y = Phaser.Math.Between(100, 300);

    // Increment the score by 10
    this.score += 10;

    // Display the updated score
    this.scoreText.setText("score: " + this.score);

    // Play the coin collection sound
    this.coinSound.play();
  }

  update() {
    // Handle all the logic in the game

    // Handle horizontal movements
    if (this.arrow.right.isDown) {
      this.monster.x += 3;
    } else if (this.arrow.left.isDown) {
      this.monster.x -= 3;
    }

    // Do the same for vertical movements
    if (this.arrow.down.isDown) {
      this.monster.y += 3;
    } else if (this.arrow.up.isDown) {
      this.monster.y -= 3;
    }

    // If the monster is overlapping with the coin
    if (this.physics.overlap(this.monster, this.coin)) {
      this.hit();
    }
  }
}

new Phaser.Game({
  width: 700,
  height: 400,
  backgroundColor: "#3498db",
  scene: mainScene,
  physics: { default: "arcade" },
  parent: "game"
});
