var TitleState = {
	preload: function() {
		world = this;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		game.stage.backgroundColor = "#000000";
	},
	create: function() {
		tim = 0;
		var logo = this.game.add.sprite(screenWidth / 2, 0, 'logoBR');
		logo.anchor.setTo(0.5, 0);
		world.titleClouds = game.add.tileSprite(logo.left + 5, 0, logo.width - 10, 115, 'clouds');
		world.titleClouds.sendToBack();
		sprt = this.game.add.sprite(logo.left + 42, 100, 'sprt');
		sprt.animations.add('run', [5, 6, 7, 8, 9, 10], 12, true);
		sprt.anchor.setTo(0.5, 1);
		sprt.play('run');
		this.bb = this.game.add.sprite(logo.left - 60, screenHeight, 'bbTitle');
		this.bb.anchor.setTo(0, 0.5);
		muPlay('muTitle', 1, true);
		this.btnPlay = world.game.add.sprite(logo.right - 70, screenHeight - 60, 'btnPlay2');
		this.btnPlay.anchor.setTo(0.5, 0.5);
		this.btnPlay.inputEnabled = true;
		this.btnPlay.events.onInputDown.add(gotoL1, this);
		game.btnMu = addButtonsTitle('btnMu', -120);
		game.btnFX = addButtonsTitle('btnFX', -200);
		setMuFXBtns();
		game.input.onDown.add(muteButtons);
	},
	update: function() {
		world.titleClouds.tilePosition.x -= 1.5;
		var midY = Math.ceil((screenHeight - 120) / 2) + 120;
		this.btnPlay.y = midY;
		game.btnMu.y = midY;
		game.btnFX.y = midY;
		this.bb.y = midY;
	}
};

function addButtonsTitle(nam, xOff) {
	var b = game.add.sprite(world.btnPlay.x + xOff, screenHeight - 60, nam);
	b.anchor.setTo(0.5, 0.5);
	b.inputEnabled = true;
	return b;
}

function gotoL1() {
	clickSound();
	levl = 1;
	newState();
}