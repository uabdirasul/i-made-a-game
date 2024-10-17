class mainScene {
  // Methods for the game:
  preload() {
    // Load all the assets
    this.load.image("monster", "assets/monster.png");
    this.load.image("coin", "assets/coin.png");
  }

  create() {
    // Create the monster and coin sprites
    this.monster = this.physics.add.sprite(100, 100, "monster");
    this.coin = this.physics.add.sprite(300, 300, "coin");

    // Set the size of the monster and coin
    this.monster.setDisplaySize(50, 50); // Width, Height in pixels
    this.coin.setDisplaySize(30, 30); // Width, Height in pixels

    // Initialize score
    this.score = 0;

    // Style for the score text
    let style = { font: "20px Arial", fill: "#fff" };

    // Display the score
    this.scoreText = this.add.text(20, 20, "score: " + this.score, style);

    // Moving the "monster" :)
    this.arrow = this.input.keyboard.createCursorKeys();

    // Set world bounds
    this.physics.world.setBounds(0, 0, 700, 400); // Set bounds to match the game size

    // Enable bounds for the monster
    this.monster.setCollideWorldBounds(true); // Prevent the monster from going out of bounds
  }

  hit() {
    // Change the position x and y of the coin randomly
    this.coin.x = Phaser.Math.Between(100, 600);
    this.coin.y = Phaser.Math.Between(100, 300);

    // Increment the score by 10
    this.score += 10;

    // Display the updated score on the screen
    this.scoreText.setText("score: " + this.score);
  }

  update() {
    // Handle all the logic in the game

    // Handle horizontal movements
    if (this.arrow.right.isDown) {
      // If the right arrow is pressed, move to the right
      this.monster.x += 3;
    } else if (this.arrow.left.isDown) {
      // If the left arrow is pressed, move to the left
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
      // Call the new hit() method
      this.hit();
    }
  }
}

new Phaser.Game({
  width: 700, // Width of the game in pixels
  height: 400, // Height of the game in pixels
  backgroundColor: "#3498db", // The background color (blue)
  scene: mainScene, // The name of the scene we created
  physics: { default: "arcade" }, // The physics engine to use
  parent: "game" // Create the game inside the <div id="game">
});
