
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    scene: [ Menu ],
}
let game = new Phaser.Game(config);
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

