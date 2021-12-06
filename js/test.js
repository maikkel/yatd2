import HelloWorld from "./test/HelloWorld.js";
import NormalMap from "./test/NormalMap.js";
import Tilemap from "./test/Tilemap.js";


const zoomFactor = 2;

const config = {
    type: Phaser.WEBGL,
    width: Math.floor(window.innerWidth / zoomFactor),
    height: Math.floor(window.innerHeight / zoomFactor),
    scene: [HelloWorld, NormalMap, Tilemap],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    }
}




console.log(config)

const game = new Phaser.Game(config);
let currentScene = game.scenes.getScenes()[0].name;

window.addEventListener("resize", () => {
    let w = Math.floor(window.innerWidth / zoomFactor);
    let h = Math.floor(window.innerHeight / zoomFactor);

    game.scale.resize(w, h);
});

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.onclick = (event) => {
        console.log(currentScene)
        const sceneName = button.dataset.scene;
        game.scene.switch(currentScene, sceneName);
        currentScene = sceneName;
    }
});

const fps = document.querySelectorAll(".fps span");
setInterval(() => {
    fps[0].innerHTML = Math.floor(game.loop.actualFps);
},1000);
