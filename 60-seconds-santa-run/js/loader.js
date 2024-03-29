var LoaderState = {
	preload: function() {
		game.renderer.renderSession.roundPixels = true;
		Phaser.Canvas.setImageRenderingCrisp(game.canvas);
		game.stage.smoothed = false;
		world = this;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		game.stage.backgroundColor = "#000000";
		this.lode = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loading1');
		this.lode.anchor.setTo(0.5);
		this.preloadBar = this.add.sprite(this.game.world.centerX - 120, this.game.world.centerY, 'preloadBar');
		this.preloadBar.anchor.setTo(0, 0.5);
		this.preloadBar.sendToBack();
		this.lode.sendToBack();
		this.load.setPreloadSprite(this.preloadBar);
		game.load.image('brArwUp', 'assets/img/brArwUp.png');
		game.load.image('brArwLeft', 'assets/img/brArwLeft.png');
		game.load.image('brArwRight', 'assets/img/brArwRight.png');
		game.load.image('wellDone', 'assets/img/wellDone.png');
		game.load.image('bricks', 'assets/img/bricks.gif');
		game.load.image('cloud', 'assets/img/cloud.gif');
		game.load.image('bricks101', 'assets/img/bricks101.gif');
		game.load.image('bricks102', 'assets/img/bricks102.gif');
		game.load.image('bricks103', 'assets/img/bricks103.gif');
		game.load.image('busStop', 'assets/img/busStop.gif');
		game.load.image('spikes', 'assets/img/spikes.gif');
		game.load.image('burgerBar', 'assets/img/burgerBar.gif');
		game.load.image('burgerBarGO', 'assets/img/burgerBarGO.gif');
		game.load.image('burgerLock', 'assets/img/burgerLock.gif');
		game.load.image('goPlat', 'assets/img/goPlat.gif');
		game.load.image('splatterBrick1', 'assets/img/splatterBrick1.gif');
		game.load.image('splatterBrick2', 'assets/img/splatterBrick2.gif');
		game.load.image('lev1', 'assets/img/lev1.gif');
		game.load.image('lev2', 'assets/img/lev2.gif');
		game.load.image('lev3', 'assets/img/lev3.gif');
		game.load.image('lev4', 'assets/img/lev4.gif');
		game.load.image('lev5', 'assets/img/lev5.gif');
		game.load.image('lev6', 'assets/img/lev6.gif');
		game.load.image('lev7', 'assets/img/lev7.gif');
		game.load.image('lev8', 'assets/img/lev8.gif');
		game.load.image('lbg4', 'assets/img/lbg4.gif');
		game.load.image('lbg6', 'assets/img/lbg6.gif');
		game.load.image('clock1', 'assets/img/clock1.gif');
		game.load.image('goTL', 'assets/img/goTL.gif');
		game.load.image('clouds', 'assets/img/clouds.gif');
		game.load.image('btnPlay2', 'assets/img/btnPlay.gif');
		game.load.image('bbTitle', 'assets/img/bbTitle.gif');
		game.load.image('logoBR', 'assets/img/logoBR.gif');
		game.load.image('btnHome', 'assets/img/btnHome.gif');
		game.load.image('laserSocket', 'assets/img/laserSocket.gif');
		game.load.image('laserRay', 'assets/img/laserRay.png');
		game.load.spritesheet('toys', 'assets/img/toys.gif', 22, 22);
		game.load.spritesheet('laserAni', 'assets/img/laserAni.gif', 20, 20);
		game.load.spritesheet('clockBG', 'assets/img/clockBG.gif', 42, 42);
		game.load.spritesheet('c2c', 'assets/img/c2c.gif', 108, 55);
		game.load.spritesheet('btnMu', 'assets/img/btnMu.gif', 80, 80);
		game.load.spritesheet('btnFX', 'assets/img/btnFX.gif', 80, 80);
		game.load.spritesheet('btnSettings', 'assets/img/btnSettings.gif', 80, 80);
		game.load.spritesheet('sprt', 'assets/img/sprt.gif', 42, 42);
		game.load.spritesheet('cloudAni', 'assets/img/cloudAni.gif', 60, 60);
		game.load.spritesheet('tuts', 'assets/img/tuts.gif', 180, 90);
		game.load.spritesheet('bus', 'assets/img/bus.gif', 140, 120);
		game.load.spritesheet('angel', 'assets/img/angel.gif', 34, 32);
		game.load.image('bg0', 'assets/img/bg0.png');
		game.load.audio('fxLand', 'assets/sfx/fxLand.wav');
		game.load.audio('fxBus', 'assets/sfx/fxBus.wav');
		game.load.audio('fxsplatterBrick', 'assets/sfx/fxsplatterBrick.wav');
		game.load.audio('fxHup', 'assets/sfx/fxHup.wav');
		game.load.audio('fxNom', 'assets/sfx/fxNom.wav');
		game.load.audio('fxFail', 'assets/sfx/fxFail.wav');
		game.load.audio('fxClose1', 'assets/sfx/fxClose1.wav');
		game.load.audio('fxClose2', 'assets/sfx/fxClose2.wav');
		game.load.audio('muTitle', 'assets/msc/muTitle.mp3');
		game.load.audio('muIngame', 'assets/msc/muIngame.mp3');
		game.load.audio('fxJump', 'assets/sfx/fxJump.wav');
		for (var i = 1; i < 16; i++) {
			var nr = 100 + i;
			var sndName = 'fxAaa' + nr;
			game.load.audio(sndName, 'assets/sfx/' + sndName + '.wav');
		}
		game.load.audio('fxClick', 'assets/sfx/fxClick.wav');
		game.load.image('plat', 'assets/img/plat.gif');
		game.load.image('bg1', 'assets/img/bg1.png');
	},
	create: function() {
		world.lode.destroy();
		world.preloadBar.destroy();
		clickFX = game.add.audio('fxClick');
		game.btnPlay = world.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'btnPlay2');
		game.btnPlay.anchor.setTo(0.5, 0.5);
		game.btnPlay.sendToBack();
		game.btnPlay.inputEnabled = true;
		game.btnPlay.events.onInputDown.add(startGame, this);
		var topURL = 'run';
		try {
			topURL = window.top.location.hostname.split(".").splice(-2).join('.');
		} catch (err) {}
		if (arr.indexOf(topURL) < 0) {
			game.destroy();
		}
	},
	update: function() {
		game.btnPlay.y = screenHeight / 2;
	}
};

function startGame(pointer) {
newState();
}