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
  }

  update() {
    // Handle all the logic in the game
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
