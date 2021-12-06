export default class TileMap extends Phaser.Scene {
    constructor() {
        super('TileMap')
    }

    preload() {
        this.load.image({
            key: 'tiles',
            url: '../../assets/tiles/tiles.png',
            normalMap: '../../assets/tiles/tiles_normal.png'
        });
    };

    create() {
        const map = this.make.tilemap({ tileWidth: 16, tileHeight: 16, width: 20, height: 20 });

        const tileset = map.addTilesetImage('tiles', null, 16, 16, 0, 0);

        const layer1 = map.createBlankLayer('layer1', tileset);
        layer1.setPipeline('Light2D');

        layer1.randomize(0, 0, 20, 20, [...Array(79).keys()]);

        const layer2 = map.createBlankLayer('layer2', tileset);
        layer2.setPipeline('Light2D');

        layer2.randomize(0, 0, 20, 20, [...Array(79).keys()].map(value => value + 80 ));

        layer1.putTilesAt([
            [  1,  3 ],
            [ 65, 67 ]
        ], 4, 4);
        layer2.putTilesAt([
            [ 81, 83 ],
            [145, 147 ]
        ], 6, 4);

        const light  = this.lights.addLight(0, 0, 200);

        this.lights.enable().setAmbientColor(0x555555);

        this.input.on('pointermove', function (pointer) {
            light.x = pointer.x;
            light.y = pointer.y;
        });
    };
}