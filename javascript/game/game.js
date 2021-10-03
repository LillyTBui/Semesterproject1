const gameState = {}

function preload(){
    this.load.image('rob', '../../images/sprite2.png');
    this.load.image('rectV', '../../images/rect1.jpg');
    this.load.image('rectH', '../../images/rect2.jpg');
}

function create(){
    gameState.rob = this.physics.add.sprite(40,470,'rob');
    gameState.rob.setInteractive();
    gameState.cursors = this.input.keyboard.createCursorKeys();

    gameState.rob.setCollideWorldBounds(true);

    const finish = this.physics.add.staticGroup();
    finish.create(-4.9, 90, 'rectV');

    const platforms = this.physics.add.staticGroup();
    platforms.create(25, 350, 'rectH');
    platforms.create(70, 350, 'rectH');
    platforms.create(120, 350, 'rectH');
    platforms.create(170, 350, 'rectH');
    platforms.create(210, 350, 'rectH');
    platforms.create(230, 350, 'rectH');
    platforms.create(250, 330, 'rectV');
    

    platforms.create(20, 170, 'rectH');
    platforms.create(130, 170, 'rectH');

    platforms.create(150, 370, 'rectV');
    platforms.create(80, 540, 'rectV');
    platforms.create(230, 540, 'rectV');

    platforms.create(250, 520, 'rectH');
    platforms.create(300, 520, 'rectH');
    platforms.create(330, 505, 'rectV');
    platforms.create(330, 470, 'rectV');
    platforms.create(330, 430, 'rectV');
    platforms.create(330, 390, 'rectV');

    platforms.create(150, 10, 'rectV');
    platforms.create(150, 40, 'rectV');
    platforms.create(150, 70, 'rectV');
    platforms.create(150, 100, 'rectV');
    platforms.create(150, 130, 'rectV');
    platforms.create(150, 150, 'rectV');


    platforms.create(250, 180, 'rectV');
    platforms.create(250, 210, 'rectV');
    platforms.create(250, 250, 'rectV');
    platforms.create(250, 290, 'rectV');

    platforms.create(420, 160, 'rectH');
    platforms.create(390, 160, 'rectH');
    platforms.create(340, 160, 'rectH');
    platforms.create(270, 160, 'rectH');
    platforms.create(310, 160, 'rectH');

    platforms.create(440, 370, 'rectV');
    platforms.create(440, 330, 'rectV');
    platforms.create(440, 290, 'rectV');
    platforms.create(440, 250, 'rectV');
    platforms.create(440, 220, 'rectV');
    platforms.create(440, 180, 'rectV');

    platforms.create(40, 190, 'rectV')
    platforms.create(40, 230, 'rectV')
    platforms.create(40, 270, 'rectV')
    platforms.create(40, 300, 'rectV')
    platforms.create(40, 330, 'rectV')
    
    this.physics.add.collider(gameState.rob, platforms);
    this.physics.add.collider(gameState.rob, finish, ()=>{
        this.physics.pause();
        gameState.endText = this.add.text(240,90, 'You made it!', {fontSize: '30px', fill: '#00FF00'});
    });
}

function update(){

        if(gameState.cursors.left.isDown){
            gameState.rob.setVelocityX(-70);
        }
        else if(gameState.cursors.right.isDown){
            gameState.rob.setVelocityX(70);
        }
        else if(gameState.cursors.up.isDown){
            gameState.rob.setVelocityY(-70);
        }
        else if(gameState.cursors.down.isDown){
            gameState.rob.setVelocityY(70);
        }
        else{
            gameState.rob.setVelocityX(0);
            gameState.rob.setVelocityY(0);
            
        }   
}

const config = {
    width: 550,
    height: 550,
    parent: "game-container",
    backgroundColor: "#bbbfc4",
    scene: {
        preload,
        create,
        update,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0},
            debug: false
        }
    }
}

const game = new Phaser.Game(config);