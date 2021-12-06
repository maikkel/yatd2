export default class NormalMap extends Phaser.Scene {
    constructor() {
        super('NormalMap')
    }

    preload() {
        this.load.image({
            key: 'tiles',
            url: '../../assets/tiles/tiles.png',
            normalMap: '../../assets/tiles/tiles_normal.png'
        });
    };

    create() {
        this.add.image(12, 50, 'tiles').setOrigin(0).setPipeline('Light2D');

        const light  = this.lights.addLight(0, 0, 200);

        this.lights.enable().setAmbientColor(0x555555);

        this.input.on('pointermove', function (pointer) {

            light.x = pointer.x;
            light.y = pointer.y;
        });
    };
}