class mainScene {
  // Methods for the game:
  preload() {
    // This method is called in the beginning and load all the assets
  }
  create() {
    // This method is called after preload, it will create our scene
  }
  update() {
    // This method is called every 60s after create, it will handle all the logic in the game.
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
