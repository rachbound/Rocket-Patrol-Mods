// Rachel Trieu
// Rocket Patrol Mods
// 4/15/2022
// took ~6-7 hours
//
// Point break Down:
// Implement a simultaneous two-player mode (30)
// Implement a new timing/scoring mechanism that adds time to the clock for successful hits (20) 
// Use Phaser's particle emitter to create a particle explosion when the rocket hits the spaceship (20)
// Implement parallax scrolling (10) 
// Display the time remaining (in seconds) on the screen (10)
// Allow the player to control the Rocket after it's fired (5)
// Track a high score that persists across scenes and display it in the UI (5)
//
// I would like to give credit to my groupmate, Tai Wen Lee, for walking me through the code and helping me out.

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}
 
let game = new Phaser.Game(config);
 
// reserve keyboard bars
let keyF, keyR, keyLEFT, keyRIGHT, keyUP, keyA, keyD, keyW;
 
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let highscore = 0;