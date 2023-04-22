var GameOverState = {
    preload: function() {
        world = this;
        settings(this);
        game.stage.backgroundColor = "#FFFFFF";
    },
    create: function() {
        game.sound.stopAll();
        world.fxFail = this.add.audio('fxFail');
        world.fxClose1 = this.add.audio('fxClose1');
        world.fxClose2 = this.add.audio('fxClose2');
        fxPlay(world.fxFail);
        this.black = world.game.add.sprite(0, 0, 'black');
        this.black.fixedToCamera = true;
        this.bb = this.game.add.sprite(0, 0, 'burgerBar');
        this.bb.anchor.setTo(0.5, 1);
        var del = this.game.add.sprite(0, 0, 'goPlat');
        del.anchor.setTo(0.5, 0);
        this.burgerLock = this.game.add.sprite(0, -40, 'burgerLock');
        this.burgerLock.anchor.setTo(0.5, 1);
        var del = this.game.add.sprite(0, 0, 'burgerBarGO');
        del.anchor.setTo(0.5, 1);
        game.world.setBounds(-99999, -99999, 9999999, 9999999);
        world.ct = 50;
        world.f = 0;
        world.fun = [goWait, goClose, goWait, goShowClick, goNull];
    },
    update: function() {
        goBG();
        world.fun[world.f]();
    }
};
function goClick(pointer) {
    if (rotDevice) {
        return;
    } 
    levl = 0;
    clickSound();
    newState();
}
function goBG() {
    world.black.width = game.camera.width;
    world.black.height = game.camera.height + 10;
    game.camera.focusOnXY(world.bb.x, world.bb.y - 15);
}
function goWait() {
    world.ct--;
    if (world.ct < 0) {
        world.f++;
        world.ct = 0;
        if (world.f == 1) {
            fxPlay(world.fxClose1);
        }
    }
}
function goClose() {
    world.burgerLock.y += 1.5;
    if (world.burgerLock.y > 0) {
        world.burgerLock.y = 0;
        world.f++;
        fxPlay(world.fxClose2);
        var del = world.game.add.sprite(0, -40, 'goTL');
        del.anchor.setTo(0.5, 1);
        world.ct = 80;
    }
}
function goShowClick() {
    var c2c = world.game.add.sprite(0, 17, 'c2c');
    c2c.animations.add('idle', null, 1);
    c2c.play('idle', null, true);
    c2c.anchor.setTo(0.5, 0);
    game.input.onDown.add(goClick);
    world.f++;
}
function goNull() {}
