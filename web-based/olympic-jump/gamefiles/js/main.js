var game;
window.onload = function() {
	setTimeout(function() {
		window.scrollTo(0, 1);
		initGameStates()
	}, 100)
};
var MainGame = {
	Config: {
		GAME_WIDTH: 536,
		GAME_HEIGHT: 370
	},
	weakDevice: false,
	orientation: 1,
	style: {
		font: "24px dereza_boldregular",
		fill: "#FFFFFF",
		align: "center"
	},
	orientated: false,
	onDesktop: false,
	debug: false,
	test: false,
	fadeColor: 0,
	textFPS: null,
	showFPS: false,
	isPaused: false,
	isGoAway: false,
	isMusicMuted: false,
	isMusicPlaying: -1,
	nextState: null,
	widthInPixels: 0,
	modeGod: false,
	gameOver: false,
	s_musicM: null,
	s_musicG: null,
	counterAttempts: 0,
	clickOne: false,
	firstGo: true,
	showTutorial: true,
	resizeGame: function() {
		var ratio = window.innerWidth /
			window.innerHeight;
		var standardWidth = 536;
		var standardHeight = 370;
		var maxWidth = 900;
		var maxHeight = 370;
		var standardRatio = standardWidth / standardHeight;
		if (ratio > standardRatio) {
			game.scale.setGameSize(Math.min(maxWidth, Math.ceil(standardHeight * ratio)), standardHeight);
			if (MainGame.state == "Game") game.world.setBounds(Math.ceil((game.width - standardWidth) * -.5), 0, MainGame.widthInPixels, game.height);
			else game.world.setBounds(Math.ceil((game.width - standardWidth) * -.5), 0, game.width, game.height)
		} else {
			game.scale.setGameSize(standardWidth,
				Math.min(maxHeight, Math.ceil(standardWidth * (window.innerHeight / window.innerWidth))));
			game.world.setBounds(0, 0, game.width, game.height)
		}
		MainGame.midX = 268
	},
	coolMathApi: function(vNum, vValue) {
		if (typeof parent.cmgGameEvent === "function") switch (vNum) {
			case 0:
				if (parent.cmgGameEvent) parent.cmgGameEvent("start");
				break;
			case 1:
				if (parent.cmgGameEvent) parent.cmgGameEvent("start", vValue);
				break;
			case 2:
				if (parent.cmgGameEvent) parent.cmgGameEvent("replay", vValue);
				break
		}
	}
};
window.addEventListener("keydown", function(e) {
	if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) e.preventDefault()
}, false);

function initGameStates() {
	game = new Phaser.Game(536, 370, Phaser.CANVAS);
	game.state.add("Boot", MainGame.Boot, true);
	game.state.add("Preloader", MainGame.Preloader);
	game.state.add("Menu", MainGame.MainMenu);
	game.state.add("LevelMenu", MainGame.LevelMenu);
	game.state.add("Game", MainGame.Game);
	game.state.add("Credits", MainGame.Credits)
}

function unlockAllLevels() {
	localStorage["jumper-levelMax"] = 10;
	if (MainGame.state == "LevelMenu") goToState("LevelMenu")
}

function showFps() {
	game.time.advancedTiming = true;
	MainGame.textFPS = game.add.text(20, 320, "FPS", {
		font: "25px Arial",
		fill: "#FFFFFF",
		align: "center"
	});
	MainGame.textFPS.fixedToCamera = true
}

function trace(a) {
	console.log(a)
}

function clearGame() {
	game.tweens.removeAll();
	goToState("levelmenu")
}

function goToState(pNextState) {
	game.tweens.removeAll();
	var spr_bg = this.game.add.graphics(0, 0);
	spr_bg.beginFill(MainGame.fadeColor, 1);
	spr_bg.drawRect(0, 0, this.game.width, this.game.height);
	spr_bg.alpha = 0;
	spr_bg.endFill();
	MainGame.nextState = pNextState;
	var s = this.game.add.tween(spr_bg);
	s.to({
		alpha: 1
	}, 400, null);
	s.onComplete.add(this.changeState, this);
	s.start()
}

function goChangeState(pNextState) {
	game.tweens.removeAll();
	var spr_bg = this.game.state.states.game.fixedScreen.add(this.game.add.graphics(0, 0));
	spr_bg.beginFill(MainGame.fadeColor, 1);
	spr_bg.drawRect(0, 0, this.game.width, this.game.height);
	spr_bg.alpha = 0;
	spr_bg.endFill();
	MainGame.nextState = pNextState;
	var s = this.game.add.tween(spr_bg);
	s.to({
		alpha: 1
	}, 400, null);
	s.onComplete.add(this.changeState, this);
	s.start()
}

function changeState() {
	this.game.state.start(MainGame.nextState);
	if (MainGame.isNextLevel) this.game.state.start("game");
	this.fadeOut()
}

function fadeOut() {
	var spr_bg = this.game.add.graphics(0, 0);
	spr_bg.beginFill(MainGame.fadeColor, 1);
	spr_bg.drawRect(0, 0, this.game.width, this.game.height);
	spr_bg.alpha = 1;
	spr_bg.endFill();
	game.add.tween(spr_bg).to({
		alpha: 0
	}, 300, Phaser.Easing.Linear.None).start()
}

function clearSaves() {
	for (var j = 1; j <= 10; j++) localStorage["jumper-" + "level_" + j] = null;
	localStorage["jumper-levelMax"] = null
}

function muteSounds(btn) {
	if (game.sound.mute) btn.frameName = "btn_sound_0000";
	else btn.frameName = "btn_sound_0001";
	game.sound.mute = !game.sound.mute;
	MainGame.isMusicMuted = game.sound.mute
}

function playMusic(num) {
	if (MainGame.isMusicPlaying == num) return;
	if (game.device.webAudio) {
		stopMusic();
		switch (num) {
			case 0:
				MainGame.s_musicM.play("", 0, 1, true);
				break;
			case 1:
				MainGame.s_musicG.play("", 0, .4, true);
				break
		}
		MainGame.isMusicPlaying = num
	} else {
		MainGame.s_musicM.play("", 0, 1, true);
		MainGame.isMusicPlaying = num
	}
}

function stopMusic() {
	if (game.device.webAudio) {
		MainGame.isMusicPlaying = -1;
		if (MainGame.s_musicM != null) MainGame.s_musicM.stop();
		if (MainGame.s_musicG != null) MainGame.s_musicG.stop()
	}
}

function playSound(num) {
	switch (num) {
		case 1:
			MainGame.s_sounds1.play();
			break;
		case 2:
			MainGame.s_sounds2.play();
			break;
		case 3:
			MainGame.s_sounds3.play();
			break
	}
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

function shuffleArr(o) {
	for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o
};
MainGame.Credits = function(game) {
	this.musicButton = null;
	this.backButton = null
};
MainGame.Credits.prototype = {
	create: function() {
		var b = game.add.sprite(MainGame.midX, 0, "bg_credits");
		b.anchor.setTo(.5, 0);
		this.musicButton = game.add.sprite(497 - 70, 40, "ss_main", "btn_sound_0000");
		this.musicButton.anchor.setTo(.5, .5);
		this.musicButton.inputEnabled = true;
		this.musicButton.events.onInputDown.add(muteSounds, this);
		if (MainGame.isMusicMuted) this.musicButton.frameName = "btn_sound_0001";
		this.backButton = game.add.sprite(497, 40, "ss_main", "btn_home_0000");
		this.backButton.anchor.setTo(.5, .5);
		this.backButton.inputEnabled =
			true;
		this.backButton.events.onInputDown.add(this.goToMenu, this);
		this.isUnlock = 0;
		this.btn1 = game.add.sprite(268 - 90, 100, "ss_main", "btn_home_0000");
		this.btn1.anchor.setTo(.5, .5);
		this.btn1.inputEnabled = true;
		this.btn1.events.onInputDown.add(this.clickBtn1, this);
		this.btn1.alpha = 0;
		this.btn2 = game.add.sprite(268 + 90, 100, "ss_main", "btn_home_0000");
		this.btn2.anchor.setTo(.5, .5);
		this.btn2.inputEnabled = true;
		this.btn2.events.onInputDown.add(this.clickBtn2, this);
		this.btn2.alpha = 0
	},
	clickBtn1: function() {
		this.isUnlock =
			1
	},
	clickBtn2: function() {
		if (this.isUnlock == 1) unlockAllLevels()
	},
	goToMenu: function() {
		this.state.start("Menu")
	}
};
MainGame.Game = function(game) {
	this.layerGame = null;
	this.layerBonuses = null;
	this.map = null;
	this.layer = null;
	this.player = null;
	this.isPlayerAdded = false;
	this.platforms = null;
	this.fields = null;
	this.exitPortal = null;
	this.playerMaxX = null;
	this.finishLine = null;
	this.jumping = false;
	this.deltaJump = 0;
	this.kletka = null;
	this.gotExtraJump = false;
	this.isFlappyMode = false;
	this.counterJumps = 0;
	this.tutoralTime = false;
	this.tutorialWindow = null
};
MainGame.Game.prototype = {
	create: function() {
		MainGame.state = "Game";
		MainGame.gameOver = false;
		this.createLevel();
		this.fixedScreen = this.layerTop.add(game.add.group());
		this.fixedScreen.x = MainGame.sdvigX;
		if (MainGame.isGDapiLoaded) gdApi.play()
	},
	createLevel: function() {
		MainGame.debug = false;
		MainGame.sdvigX = Math.abs(Math.ceil((game.width - 536) * -.5));
		var bg = game.add.image(MainGame.midX + MainGame.sdvigX, 0, "bg_back" + this.game.state.states.LevelMenu.levelNum);
		bg.anchor.setTo(.5, 0);
		bg.fixedToCamera = true;
		bg.width = game.width;
		bg.height = game.height;
		game.physics.startSystem(Phaser.Physics.ARCADE);
		var mapName = this.game.state.states.LevelMenu.level;
		this.map = game.add.tilemap(mapName);
		this.map.addTilesetImage("tails", "tile-set");
		MainGame.widthInPixels = this.map.widthInPixels;
		if (!game.device.desktop || game.device.ie || MainGame.test) {
			this.layerBack = game.add.group();
			var b = this.layerBack.add(game.add.image(0, 0, mapName));
			b.scale.setTo(2);
			console.log("version for low d")
		} else this.map.createLayer("back");
		game.world.setBounds(Math.ceil((game.width -
			536) * -.5), 0, MainGame.widthInPixels, game.height);
		this.layerBonuses = game.add.group();
		this.layerBonuses.enableBody = true;
		this.fields = game.add.group();
		this.fields.enableBody = true;
		this.layerGame = game.add.group();
		this.platforms = game.add.group();
		this.platforms.enableBody = true;
		this.addPlayer(2, 5);
		this.gotExtraJump = false;
		this.isFlappyMode = false;
		this.jumping = false;
		this.counterJumps = 0;
		MainGame.counterAttempts++;
		game.input.onDown.add(this.jumpStart, this);
		game.input.onUp.add(this.jumpStop, this);
		playMusic(1);
		this.layerTop =
			game.add.group();
		this.layerTop.fixedToCamera = true;
		if (mapName === null) {
			this.game.state.start("levelmenu");
			return
		} else {
			switch (mapName) {
				case "level_1":
					this.showTutorial(1);
					this.addBox(0, 210, 750, 90);
					this.addBox(840, 210, 269, 90);
					this.addBox(1200, 210, 209, 90);
					this.addBox(1470, 210, 570, 90);
					this.addBox(2190, 0, 119, 120);
					this.addBox(2790, 180, 89, 120);
					this.addBox(2940, 150, 89, 120);
					this.addBox(2640, 210, 89, 90);
					this.addBox(2040, 240, 539, 90);
					this.addBox(3090, 120, 89, 120);
					this.addBox(3240, 90, 89, 120);
					this.addBox(3450, 150,
						150, 60);
					this.addBox(3660, 180, 59, 60);
					this.addBox(3750, 210, 59, 60);
					this.addBox(4110, 210, 59, 60);
					this.addBox(3840, 180, 239, 60);
					this.addBox(4200, 240, 209, 60);
					this.addBox(4440, 210, 29, 90);
					this.addBox(4710, 210, 29, 90);
					this.addBox(4770, 210, 29, 90);
					this.addBox(4500, 240, 179, 60);
					this.addBox(4830, 210, 449, 90);
					this.addBox(5340, 180, 29, 90);
					this.addBox(5430, 180, 29, 90);
					this.addBox(5490, 210, 29, 90);
					this.addBox(5550, 240, 209, 60);
					this.addBox(5790, 240, 209, 60);
					this.addBox(6030, 240, 209, 60);
					this.addBox(6300, 240, 59, 60);
					this.addBox(6390,
						240, 59, 60);
					this.addBox(6480, 240, 59, 60);
					this.addBox(6570, 240, 59, 60);
					this.addBox(6660, 240, 149, 60);
					this.addBox(6840, 240, 149, 60);
					this.addBox(7050, 210, 59, 90);
					this.addBox(7170, 210, 59, 90);
					this.addBox(7290, 210, 30, 90);
					break;
				case "level_2":
					this.showTutorial(2);
					this.addBox(0, 180, 359, 90);
					this.addBox(840, 240, 479, 60);
					this.addBox(1380, 210, 89, 90);
					this.addBox(360, 210, 119, 60);
					this.addBox(690, 240, 89, 60);
					this.addBox(1620, 90, 89, 210);
					this.addBox(1800, 210, 29, 90);
					this.addBox(1830, 0, 89, 120);
					this.addBox(1920, 0, 59, 90);
					this.addBox(2280,
						150, 29, 90);
					this.addBox(1860, 240, 629, 60);
					this.addBox(2220, 210, 59, 30);
					this.addBox(2640, 240, 239, 60);
					this.addBox(3060, 180, 29, 120);
					this.addBox(2940, 240, 89, 60);
					this.addBox(3120, 210, 89, 60);
					this.addBox(3240, 180, 29, 120);
					this.addBox(3420, 180, 29, 120);
					this.addBox(3300, 210, 89, 60);
					this.addBox(3660, 120, 89, 60);
					this.addBox(3810, 120, 89, 60);
					this.addBox(3480, 240, 509, 60);
					this.addBox(4770, 210, 269, 90);
					this.addBox(5190, 210, 89, 90);
					this.addBox(5430, 210, 329, 90);
					this.addBox(6E3, 60, 449, 120);
					this.addBox(5970, 240, 89, 60);
					this.addBox(6090,
						240, 89, 60);
					this.addBox(6210, 240, 89, 60);
					this.addBox(6330, 240, 209, 60);
					this.addBox(6600, 210, 89, 90);
					this.addBox(6750, 120, 89, 180);
					this.addBox(6960, 210, 29, 60);
					this.addBox(7080, 210, 29, 60);
					this.addBox(7170, 180, 29, 60);
					this.addBox(7290, 120, 29, 60);
					break;
				case "level_3":
					this.showTutorial(3);
					this.addBox(30, 210, 299, 90);
					this.addBox(270, 0, 59, 120);
					this.addBox(390, 180, 59, 120);
					this.addBox(600, 120, 269, 60);
					this.addBox(480, 150, 59, 150);
					this.addBox(1200, 150, 149, 60);
					this.addBox(1410, 210, 29, 90);
					this.addBox(1710, 240, 29, 60);
					this.addBox(1560, 0, 59, 90);
					this.addBox(1710, 0, 59, 120);
					this.addBox(1830, 240, 149, 60);
					this.addBox(2010, 210, 89, 90);
					this.addBox(2100, 240, 149, 60);
					this.addBox(2340, 210, 29, 90);
					this.addBox(2460, 180, 29, 120);
					this.addBox(2580, 150, 29, 150);
					this.addBox(2700, 120, 29, 180);
					this.addBox(2880, 240, 269, 60);
					this.addBox(3210, 180, 89, 120);
					this.addBox(3360, 120, 89, 180);
					this.addBox(3540, 240, 269, 60);
					this.addBox(3630, 120, 419, 60);
					this.addBox(3630, 60, 119, 60);
					this.addBox(3570, 30, 179, 60);
					this.addBox(3540, 0, 209, 60);
					this.addBox(3840, 240,
						89, 60);
					this.addBox(3960, 240, 239, 60);
					this.addBox(4260, 210, 89, 90);
					this.addBox(4380, 150, 89, 150);
					this.addBox(4500, 90, 89, 210);
					this.addBox(4650, 90, 29, 60);
					this.addBox(4710, 120, 29, 60);
					this.addBox(4770, 150, 29, 60);
					this.addBox(4830, 180, 29, 60);
					this.addBox(4980, 0, 239, 90);
					this.addBox(5040, 60, 179, 60);
					this.addBox(5400, 210, 59, 90);
					this.addBox(5700, -30, 569, 60);
					this.addBox(6300, 240, 239, 60);
					this.addBox(6660, 240, 29, 60);
					this.addBox(5700, 240, 569, 60);
					this.addBox(6810, 210, 29, 90);
					this.addBox(7110, 0, 29, 60);
					this.addBox(7110,
						180, 29, 120);
					this.addBox(7230, 0, 29, 90);
					this.addBox(7230, 210, 29, 90);
					this.addBox(7350, 210, 29, 90);
					this.addBox(5850, 210, 59, 60);
					this.addBox(5940, 150, 59, 90);
					this.addBox(6030, 90, 59, 150);
					this.addBox(6120, 150, 59, 90);
					this.addBox(6210, 210, 59, 60);
					break;
				case "level_4":
					this.showTutorial(4);
					this.addBox(0, 210, 539, 90);
					this.addBox(420, 0, 59, 120);
					this.addBox(600, 210, 89, 90);
					this.addBox(840, 0, 89, 120);
					this.addBox(750, 210, 179, 90);
					this.addBox(1020, 210, 29, 89);
					this.addBox(1140, 150, 29, 149);
					this.addBox(1260, 90, 29, 149);
					this.addBox(1410,
						0, 209, 119);
					this.addBox(1560, 240, 179, 59);
					this.addBox(1800, 180, 89, 119);
					this.addBox(1950, 150, 59, 149);
					this.addBox(2070, 120, 59, 179);
					this.addBox(2190, 90, 59, 209);
					this.addBox(2340, 180, 179, 59);
					this.addBox(2520, 30, 119, 89);
					this.addBox(2640, 180, 179, 59);
					this.addBox(2340, 240, 479, 59);
					this.addBox(3360, 240, 509, 59);
					this.addBox(3570, 180, 299, 59);
					this.addBox(3690, 120, 179, 59);
					this.addBox(4020, 0, 29, 119);
					this.addBox(4170, 0, 29, 29);
					this.addBox(4170, 210, 29, 89);
					this.addBox(4320, 0, 59, 29);
					this.addBox(4440, 150, 119, 89);
					this.addBox(4410,
						240, 179, 59);
					this.addBox(4680, 240, 389, 59);
					this.addBox(5130, 240, 119, 59);
					this.addBox(5190, 0, 59, 149);
					this.addBox(5370, 240, 29, 59);
					this.addBox(5520, 240, 449, 59);
					this.addBox(5640, 150, 329, 59);
					this.addBox(5760, 60, 209, 59);
					this.addBox(6E3, 180, 119, 119);
					this.addBox(6150, 150, 89, 89);
					this.addBox(6360, 150, 149, 59);
					this.addBox(6420, 0, 89, 149);
					this.addBox(6150, 240, 569, 59);
					this.addBox(6780, 210, 89, 89);
					this.addBox(6900, 150, 209, 59);
					this.addBox(6900, 210, 89, 89);
					this.addBox(7440, 0, 59, 299);
					this.addBox(1260, 240, 209, 59);
					this.addBonus(10,
						6, 3, 1);
					this.addField(1, 15, 4, 10, 90);
					this.addBonus(21, 6, 3, 2);
					this.addField(2, 29, 4, 10, 90);
					this.addBonus(42, 2, 3, 3);
					this.addField(3, 43, 3, 120, 10);
					this.addBonus(81, 5, 3, 4);
					this.addField(4, 84, 6, 120, 10);
					this.addBonus(167, 7, 3, 5);
					this.addField(5, 174, 5, 10, 90);
					this.addBonus(202, 5, 3, 6);
					this.addField(6, 208, 5, 120, 10);
					this.addBonus(242, 4, 3, 7);
					this.addField(7, 237, 5, 330, 10);
					break;
				case "level_5":
					this.addBox(0, 240, 359, 60);
					this.addBox(420, 0, 59, 60);
					this.addBox(540, 0, 89, 60);
					this.addBox(420, 210, 59, 90);
					this.addBox(510, 180,
						29, 120);
					this.addBox(570, 210, 29, 90);
					this.addBox(630, 180, 29, 120);
					this.addBox(690, 210, 59, 90);
					this.addBox(840, 210, 209, 90);
					this.addBox(960, 150, 89, 60);
					this.addBox(1050, 240, 209, 60);
					this.addBox(1260, 150, 29, 150);
					this.addBox(1110, 60, 59, 60);
					this.addBox(960, 0, 209, 60);
					this.addBox(1500, 150, 29, 90);
					this.addBox(1500, 240, 359, 60);
					this.addBox(1830, 180, 29, 60);
					this.addBox(1890, 210, 239, 90);
					this.addBox(2280, 0, 509, 60);
					this.addBox(2340, 60, 89, 60);
					this.addBox(2520, 60, 89, 60);
					this.addBox(2700, 60, 89, 60);
					this.addBox(2430, 240, 89,
						60);
					this.addBox(2610, 240, 89, 60);
					this.addBox(2790, 240, 89, 60);
					this.addBox(2940, 210, 329, 90);
					this.addBox(3060, 120, 29, 90);
					this.addBox(3060, -30, 29, 60);
					this.addBox(3270, 240, 209, 60);
					this.addBox(3480, 210, 569, 90);
					this.addBox(3600, 150, 269, 60);
					this.addBox(3690, 120, 89, 60);
					this.addBox(3870, 180, 89, 60);
					this.addBox(4050, 240, 59, 60);
					this.addBox(3870, -30, 749, 60);
					this.addBox(4500, 210, 119, 90);
					this.addBox(4470, 240, 29, 60);
					this.addBox(4890, 180, 89, 60);
					this.addBox(5010, 0, 29, 60);
					this.addBox(5070, 240, 89, 60);
					this.addBox(5220,
						210, 269, 60);
					this.addBox(5280, 0, 149, 90);
					this.addBox(5280, 90, 89, 60);
					this.addBox(5940, 210, 269, 60);
					this.addBox(6300, 210, 269, 60);
					this.addBox(6660, 210, 269, 60);
					this.addBox(7020, 210, 29, 90);
					this.addBox(7110, 180, 29, 120);
					this.addBox(7200, 150, 29, 150);
					this.addBox(7290, 240, 149, 60);
					this.addBonus(94, 7, 3, 1);
					this.addField(1, 102, 1, 10, 90);
					this.addBonus(145, 3, 3, 2);
					this.addField(2, 151, 1, 10, 180);
					break;
				case "level_6":
					this.addBox(0, 180, 239, 30);
					this.addBox(840, 210, 89, 120);
					this.addBox(990, 150, 89, 180);
					this.addBox(0, 270, 749,
						60);
					this.addBox(0, 210, 299, 60);
					this.addBox(300, 240, 59, 30);
					this.addBox(1140, 150, 209, 60);
					this.addBox(1260, 0, 89, 90);
					this.addBox(1380, 180, 89, 60);
					this.addBox(1260, 210, 89, 120);
					this.addBox(1650, 180, 239, 150);
					this.addBox(2040, 0, 59, 180);
					this.addBox(2010, 240, 89, 90);
					this.addBox(2130, 270, 780, 60);
					this.addBox(2220, 120, 299, 90);
					this.addBox(3570, 180, 149, 150);
					this.addBox(3780, 150, 59, 60);
					this.addBox(3390, 180, 149, 150);
					this.addBox(4530, 0, 269, 90);
					this.addBox(4530, 90, 599, 60);
					this.addBox(3900, 120, 29, 60);
					this.addBox(3990, 90,
						29, 60);
					this.addBox(4050, 120, 29, 60);
					this.addBox(4110, 150, 29, 60);
					this.addBox(4170, 180, 29, 60);
					this.addBox(4230, 210, 29, 60);
					this.addBox(4290, 240, 29, 60);
					this.addBox(4950, 240, 179, 90);
					this.addBox(5010, 150, 119, 30);
					this.addBox(5190, 240, 149, 90);
					this.addBox(5370, 240, 149, 90);
					this.addBox(5640, 240, 29, 90);
					this.addBox(5760, 240, 29, 90);
					this.addBox(5880, 240, 29, 90);
					this.addBox(6060, 0, 89, 90);
					this.addBox(6240, 0, 89, 90);
					this.addBox(6420, 0, 89, 90);
					this.addBox(6630, 0, 89, 60);
					this.addBox(6060, 270, 89, 60);
					this.addBox(6240, 270, 89,
						60);
					this.addBox(6420, 270, 89, 60);
					this.addBox(6600, 180, 419, 90);
					this.addBox(7050, 150, 29, 180);
					this.addBox(7110, 180, 29, 150);
					this.addBox(7170, 210, 29, 120);
					this.addBox(7230, 240, 29, 90);
					this.addBox(7290, 270, 29, 60);
					this.addBox(7350, 240, 29, 90);
					this.addBox(7410, 210, 29, 120);
					this.addBox(6930, 0, 89, 30);
					this.addBox(6930, 120, 89, 30);
					this.addBox(6840, 150, 179, 30);
					this.addBonus(88, 8, 3, 1);
					this.addField(1, 93, 7, 180, 10);
					this.addBonus(95, 6, 3, 2);
					this.addField(2, 100, 6, 180, 10);
					this.addBonus(102, 5, 3, 3);
					this.addField(3, 107, 5, 150,
						10);
					this.addBonus(200, 6, 3, 4);
					this.addField(4, 203, 3, 10, 180);
					this.addBonus(206, 6, 3, 5);
					this.addField(5, 209, 3, 10, 180);
					this.addBonus(212, 6, 3, 6);
					this.addField(6, 215, 3, 10, 180);
					this.addBonus(228, 3, 3, 7);
					this.addField(7, 232, 1, 10, 90);
					break;
				case "level_7":
					this.addBox(0, 210, 239, 120);
					this.addBox(300, 180, 29, 150);
					this.addBox(360, 210, 29, 60);
					this.addBox(480, 210, 29, 60);
					this.addBox(570, 240, 59, 90);
					this.addBox(690, 210, 59, 120);
					this.addBox(810, 270, 89, 60);
					this.addBox(930, 270, 359, 60);
					this.addBox(1380, 270, 29, 60);
					this.addBox(1470,
						240, 29, 90);
					this.addBox(1560, 210, 29, 120);
					this.addBox(1650, 180, 29, 150);
					this.addBox(1740, 180, 299, 60);
					this.addBox(1890, 150, 149, 30);
					this.addBox(2070, 180, 29, 150);
					this.addBox(2070, 120, 59, 60);
					this.addBox(2190, 90, 59, 60);
					this.addBox(2190, 150, 29, 180);
					this.addBox(2310, 180, 89, 150);
					this.addBox(2460, 180, 29, 150);
					this.addBox(2550, 240, 209, 90);
					this.addBox(2550, 210, 89, 30);
					this.addBox(2820, 240, 59, 60);
					this.addBox(2910, 210, 59, 60);
					this.addBox(3E3, 180, 59, 60);
					this.addBox(3090, 180, 59, 60);
					this.addBox(3180, 210, 59, 60);
					this.addBox(3270,
						240, 59, 60);
					this.addBox(3360, 0, 59, 120);
					this.addBox(3510, 180, 89, 60);
					this.addBox(3360, 210, 209, 120);
					this.addBox(3660, 150, 59, 60);
					this.addBox(3660, 210, 29, 120);
					this.addBox(3780, 180, 29, 150);
					this.addBox(3780, 120, 59, 60);
					this.addBox(4800, 240, 149, 90);
					this.addBox(4710, 60, 29, 30);
					this.addBox(4680, 0, 89, 60);
					this.addBox(4980, 0, 89, 60);
					this.addBox(5250, 0, 89, 90);
					this.addBox(5220, 180, 269, 150);
					this.addBox(5550, 180, 449, 60);
					this.addBox(6060, 0, 89, 90);
					this.addBox(6060, 240, 89, 90);
					this.addBox(6180, 240, 89, 90);
					this.addBox(6870,
						240, 299, 90);
					this.addBox(7200, 210, 29, 120);
					this.addBox(7260, 240, 29, 90);
					this.addBox(5010, 60, 29, 30);
					this.addBonus(104, 5, 3, 1);
					this.addField(1, 113, 4, 10, 90);
					this.addBonus(133, 5, 3, 2);
					this.addField(2, 130, 6, 330, 10);
					this.addBonus(138, 5, 3, 3);
					this.addField(3, 141, 7, 180, 10);
					this.addBonus(198, 5, 3, 4);
					this.addField(4, 203, 3, 10, 150);
					this.addBonus(213, 6, 3, 5);
					this.addField(5, 210, 7, 330, 10);
					this.addBonus(218, 6, 3, 6);
					this.addField(6, 221, 8, 180, 10);
					break;
				case "level_8":
					this.addBox(0, 210, 359, 90);
					this.addBox(780, 120, 29, 60);
					this.addBox(840,
						90, 29, 60);
					this.addBox(900, 60, 29, 60);
					this.addBox(990, -30, 29, 60);
					this.addBox(960, 120, 29, 180);
					this.addBox(1020, 150, 29, 150);
					this.addBox(390, 180, 89, 120);
					this.addBox(510, 120, 89, 180);
					this.addBox(660, 90, 59, 210);
					this.addBox(1140, 150, 29, 150);
					this.addBox(1200, 240, 89, 60);
					this.addBox(1440, 150, 89, 150);
					this.addBox(1590, 180, 29, 60);
					this.addBox(1650, 150, 29, 60);
					this.addBox(1710, 120, 29, 60);
					this.addBox(1770, 150, 89, 90);
					this.addBox(1980, 150, 59, 60);
					this.addBox(2160, 150, 59, 60);
					this.addBox(2340, 150, 59, 60);
					this.addBox(2520,
						150, 59, 60);
					this.addBox(2700, 0, 239, 90);
					this.addBox(3480, 120, 29, 180);
					this.addBox(3540, 150, 29, 150);
					this.addBox(3060, 0, 89, 90);
					this.addBox(3150, -30, 209, 60);
					this.addBox(3060, 210, 89, 90);
					this.addBox(3150, 180, 239, 120);
					this.addBox(3300, 120, 89, 60);
					this.addBox(3660, 150, 29, 150);
					this.addBox(3750, 180, 239, 60);
					this.addBox(4020, 210, 89, 90);
					this.addBox(4230, 150, 89, 150);
					this.addBox(4200, -30, 89, 60);
					this.addBox(4680, 210, 89, 90);
					this.addBox(4800, 210, 89, 90);
					this.addBox(4860, 30, 89, 120);
					this.addBox(4920, 210, 89, 90);
					this.addBox(5070,
						210, 149, 90);
					this.addBox(5370, 210, 89, 90);
					this.addBox(5610, 210, 149, 90);
					this.addBox(5670, 150, 89, 60);
					this.addBox(5820, 180, 299, 60);
					this.addBox(6270, 90, 59, 210);
					this.addBox(6390, 120, 89, 180);
					this.addBox(6510, 180, 89, 120);
					this.addBox(6630, 120, 89, 180);
					this.addBox(6780, 90, 59, 210);
					this.addBox(6870, 240, 89, 60);
					this.addBox(7020, 0, 89, 120);
					this.addBox(7110, 0, 89, 90);
					this.addBox(7200, 0, 89, 120);
					this.addBox(7350, 240, 59, 90);
					this.addBox(7410, 120, 89, 210);
					this.addBox(7440, 60, 59, 60);
					this.addBox(7470, 0, 59, 60);
					this.addBonus(173,
						6, 3, 1);
					this.addField(1, 174, 7, 150, 10);
					this.addBonus(181, 6, 3, 2);
					this.addField(2, 182, 7, 150, 10);
					break;
				case "level_9":
					this.addBox(0, 210, 299, 90);
					this.addBox(540, 240, 29, 60);
					this.addBox(0, 90, 179, 60);
					this.addBox(360, 150, 89, 150);
					this.addBox(780, 0, 29, 60);
					this.addBox(990, 120, 89, 180);
					this.addBox(1380, 240, 89, 60);
					this.addBox(1380, 0, 89, 150);
					this.addBox(990, -30, 89, 60);
					this.addBox(2070, 210, 29, 90);
					this.addBox(1770, 0, 89, 60);
					this.addBox(1770, 210, 89, 90);
					this.addBox(2040, 120, 149, 60);
					this.addBox(2100, 0, 179, 60);
					this.addBox(2220,
						150, 59, 150);
					this.addBox(2460, 150, 59, 150);
					this.addBox(2550, 180, 59, 120);
					this.addBox(2760, 120, 209, 90);
					this.addBox(2880, 60, 89, 60);
					this.addBox(3E3, 30, 89, 60);
					this.addBox(2130, 240, 29, 60);
					this.addBox(3120, 60, 29, 240);
					this.addBox(3180, -30, 29, 60);
					this.addBox(3240, 0, 29, 60);
					this.addBox(3180, 90, 29, 210);
					this.addBox(3240, 120, 29, 180);
					this.addBox(3300, 150, 29, 150);
					this.addBox(3300, 0, 29, 90);
					this.addBox(3360, 0, 29, 120);
					this.addBox(3360, 180, 29, 120);
					this.addBox(3420, 210, 29, 90);
					this.addBox(3480, 240, 29, 60);
					this.addBox(3660,
						0, 29, 60);
					this.addBox(3600, 0, 29, 90);
					this.addBox(3540, 0, 29, 120);
					this.addBox(3480, 0, 29, 180);
					this.addBox(3420, 0, 29, 150);
					this.addBox(3720, -30, 29, 60);
					this.addBox(3600, 240, 149, 60);
					this.addBox(3780, 240, 209, 60);
					this.addBox(3960, 150, 29, 90);
					this.addBox(4320, 240, 89, 60);
					this.addBox(4470, 150, 29, 150);
					this.addBox(4560, 120, 89, 180);
					this.addBox(4710, 150, 29, 90);
					this.addBox(4710, 240, 359, 60);
					this.addBox(5040, -30, 29, 60);
					this.addBox(5040, 150, 29, 90);
					this.addBox(5280, 210, 29, 90);
					this.addBox(5100, 180, 119, 60);
					this.addBox(5400,
						150, 29, 150);
					this.addBox(5520, 240, 269, 60);
					this.addBox(5520, 90, 29, 150);
					this.addBox(5820, 210, 89, 90);
					this.addBox(5940, 150, 89, 150);
					this.addBox(6060, 90, 89, 210);
					this.addBox(6180, 120, 299, 60);
					this.addBox(6510, 150, 299, 60);
					this.addBox(6900, 240, 329, 60);
					this.addBox(7020, 0, 29, 150);
					this.addBox(7080, 0, 29, 180);
					this.addBox(7140, 0, 29, 120);
					this.addBox(7290, 240, 89, 60);
					this.addBonus(126, 7, 3, 1);
					this.addField(1, 133, 8, 240, 10);
					this.addBonus(165, 6, 3, 2);
					this.addField(2, 168, 1, 10, 120);
					this.addBonus(227, 3, 3, 3);
					this.addField(3,
						234, 5, 10, 90);
					this.addBonus(229, 3, 3, 4);
					this.addField(4, 236, 6, 10, 60);
					this.addBonus(230, 4, 3, 5);
					this.addField(5, 238, 4, 10, 120);
					break;
				case "level_10":
					this.addBox(0, 180, 299, 60);
					this.addBox(510, 180, 29, 60);
					this.addBox(450, 240, 149, 60);
					this.addBox(870, 210, 239, 90);
					this.addBox(1110, 240, 59, 60);
					this.addBox(990, 60, 89, 60);
					this.addBox(1290, 210, 149, 90);
					this.addBox(1620, 210, 179, 90);
					this.addBox(2130, 240, 59, 60);
					this.addBox(2100, 210, 29, 90);
					this.addBox(2460, 0, 29, 60);
					this.addBox(2460, 210, 29, 90);
					this.addBox(2580, 210, 239, 90);
					this.addBox(2730, 150, 89, 60);
					this.addBox(2820, 180, 450, 60);
					this.addBox(3270, 0, 89, 90);
					this.addBox(3180, -30, 89, 60);
					this.addBox(3480, 210, 89, 90);
					this.addBox(3600, 210, 59, 90);
					this.addBox(3720, 210, 29, 90);
					this.addBox(3810, 180, 449, 60);
					this.addBox(4320, 150, 90, 60);
					this.addBox(4470, 120, 89, 60);
					this.addBox(4590, 90, 89, 60);
					this.addBox(4770, 240, 359, 60);
					this.addBox(5250, 0, 209, 120);
					this.addBox(5520, 240, 89, 60);
					this.addBox(5220, 240, 269, 60);
					this.addBox(5220, 210, 29, 30);
					this.addBox(5670, 0, 29, 90);
					this.addBox(5790, 0, 29, 60);
					this.addBox(5340, 210, 29, 30);
					this.addBox(5460, 210, 29, 30);
					this.addBox(5910, 0, 29, 90);
					this.addBox(5700, 240, 209, 60);
					this.addBox(5670, 150, 29, 150);
					this.addBox(5910, 150, 29, 150);
					this.addBox(6030, 150, 29, 90);
					this.addBox(6240, 150, 29, 90);
					this.addBox(6240, -30, 29, 60);
					this.addBox(6360, 150, 29, 60);
					this.addBox(6480, 150, 29, 60);
					this.addBox(6030, 240, 449, 60);
					this.addBox(6570, 210, 749, 90);
					this.addBox(6720, 180, 570, 60);
					this.addBox(6840, 150, 419, 60);
					this.addBox(6960, 120, 269, 60);
					this.addBox(7080, 90, 119, 60);
					this.addBox(6630, 0,
						119, 120);
					this.addBox(6750, 0, 119, 90);
					this.addBox(6870, 0, 119, 60);
					this.addBox(6990, -30, 239, 60);
					this.addBox(7320, 240, 179, 60);
					this.addBox(7440, 180, 59, 60);
					this.addBox(7230, 0, 59, 60);
					this.addBox(7260, 30, 59, 60);
					this.addBox(7290, 60, 59, 60);
					this.addBox(7320, 90, 59, 60);
					this.addBox(7350, 120, 149, 60);
					this.addBonus(34, 6, 3, 1);
					this.addField(1, 37, 7, 180, 10);
					this.addBonus(44, 6, 3, 2);
					this.addField(2, 48, 7, 180, 10);
					this.addBonus(99, 5, 3, 3);
					this.addField(3, 107, 1, 10, 150);
					this.addBonus(101, 5, 3, 4);
					this.addField(4, 110, 3, 10, 90);
					this.addBonus(103,
						5, 3, 5);
					this.addField(5, 109, 6, 210, 10);
					break
			}
			this.addEntities()
		}
		delete this.map
	},
	showTutorial: function(vNum) {
		if (!MainGame.showTutorial) return;
		game.input.onDown.addOnce(this.hideTutorial, this);
		this.tutoralTime = true;
		this.player.body.velocity.x = 0;
		this.player.animations.paused = true;
		this.tutorialWindow = this.layerTop.add(game.add.group());
		this.tutorialWindow.x = MainGame.sdvigX;
		var bb = this.tutorialWindow.add(game.add.image(268, 0, "bg_blur"));
		bb.anchor.setTo(.5, 0);
		bb.width = game.width;
		bb.height = game.height;
		var t;
		if (vNum == 1) t = this.tutorialWindow.add(game.add.image(268, 175, "ss_main", "tutorial1_0000"));
		else if (vNum == 2) t = this.tutorialWindow.add(game.add.image(268, 100, "ss_main", "tutorial2_0000"));
		else if (vNum == 3) t = this.tutorialWindow.add(game.add.image(268, 100, "ss_main", "tutorial3_0000"));
		else if (vNum == 4) t = this.tutorialWindow.add(game.add.image(268, 100, "ss_main", "tutorial4_0000"));
		t.anchor.setTo(.5, .5)
	},
	hideTutorial: function() {
		this.player.animations.paused = false;
		this.player.body.velocity.x = 180;
		this.tutoralTime =
			false;
		this.tutorialWindow.destroy();
		MainGame.showTutorial = false
	},
	addPlayer: function(vX, vY) {
		this.player = this.layerGame.add(game.add.sprite(vX * 30, vY * 30, "ss_main"));
		this.player.animations.add("sir_jump", Phaser.Animation.generateFrameNames("sir_jump_", 0, 14, "", 4), 30);
		this.player.animations.add("sir_fly", Phaser.Animation.generateFrameNames("sir_fly_", 0, 14, "", 4), 30);
		this.player.animations.play("sir_jump", 30, true);
		game.physics.enable(this.player);
		this.player.anchor.setTo(.5, 0);
		this.player.body.gravity.y =
			2100;
		this.player.body.collideWorldBounds = false;
		this.player.body.setSize(20, 23, 0, 0);
		this.player.body.velocity.x = 180;
		game.camera.follow(this.player);
		this.isPlayerAdded = true
	},
	addEntities: function() {
		var tile;
		var mapLayer;
		var c = this.map.layers.length;
		for (var i = 0; i < c; i++)
			if (this.map.layers[i].name === "entities") mapLayer = this.map.layers[i];
		if (mapLayer != undefined) {
			for (var y = 0; y < mapLayer.data.length; y++)
				for (var x = 0; x < mapLayer.data[y].length; x++) {
					tile = mapLayer.data[y][x];
					if (tile !== null) switch (tile.index) {
						case 193:
							this.addBonus(x,
								y, 1);
							break;
						case 194:
							this.addBonus(x, y, 2);
							break;
						case 195:
							this.addBonus(x, y, 3);
							break;
						case 196:
							this.addExit(x, y);
							break;
						case 197:
							this.addSpine(x, y, 1);
							break;
						case 198:
							this.addSpine(x, y, 2);
							break
					}
				}
			mapLayer.visible = false
		}
	},
	addBox: function(vX, vY, vW, vH) {
		if (MainGame.debug) return;
		var box = this.platforms.create(vX, vY);
		box.body.immovable = true;
		box.height = vH;
		box.width = vW
	},
	addField: function(vNum, vX, vY, vW, vH) {
		var vType;
		if (vW < vH) vType = 1;
		else vType = 2;
		if (vW < 30) vW = 30;
		if (vH < 30) vH = 30;
		var box = this.fields.add(game.add.tileSprite(vX *
			30, vY * 30, vW, vH, "block" + vType));
		box.body.immovable = true;
		box.filedType = vType;
		box.name = "field" + vNum
	},
	addExit: function(vX, vY) {
		this.exitPortal = this.layerBonuses.add(game.add.sprite(vX * 30 + 30 / 2, vY * 30 + 30 / 2, "ss_main"));
		this.exitPortal.animations.add("exit", Phaser.Animation.generateFrameNames("exit_", 0, 20, "", 4), 30);
		this.exitPortal.animations.play("exit", 30, true);
		this.exitPortal.anchor.setTo(.5, .5);
		game.physics.enable(this.exitPortal);
		this.exitPortal.body.setSize(18, 18, -1, -1);
		this.exitPortal.type = 100;
		this.finishLine =
			vX * 30 + 15
	},
	addBonus: function(vX, vY, vType, vField) {
		var bonus;
		if (vType == 1) bonus = this.layerBonuses.add(game.add.sprite(vX * 30 + 30 / 2, vY * 30 + 30 / 2, "ss_main", "bonus1_0000"));
		else if (vType == 2) {
			bonus = this.layerBonuses.add(game.add.sprite(vX * 30 + 30 / 2, vY * 30 + 30 / 2, "ss_main"));
			bonus.animations.add("bonus2", Phaser.Animation.generateFrameNames("bonus2_", 0, 7, "", 4), 30);
			bonus.animations.play("bonus2", 30, true)
		} else if (vType == 3) {
			bonus = this.layerBonuses.add(game.add.sprite(vX * 30 + 30 / 2, vY * 30 + 30 / 2, "ss_main", "bonus3_0000"));
			bonus.nameField =
				"field" + vField
		}
		bonus.taken = false;
		bonus.type = vType;
		bonus.anchor.setTo(.5, .5);
		game.physics.enable(bonus);
		bonus.body.setSize(15, 15, 0, 0)
	},
	addSpine: function(vX, vY, vType) {
		var sdvigY = 0;
		if (vType === 1) sdvigY = 11;
		else sdvigY = -5;
		var t_kletka = this.layerBonuses.add(game.add.sprite(vX * 30 + 30 / 2, vY * 30 + 30 / 2 + sdvigY, "ss_main", "pike" + vType + "_0000"));
		t_kletka.anchor.setTo(.5, .5);
		if (vType === 1) t_kletka.body.setSize(10, 20, 0, 2);
		else t_kletka.body.setSize(10, 20, 0, -2);
		t_kletka.type = -1
	},
	createButtonsFinish: function(vNum) {
		var bb =
			this.fixedScreen.add(game.add.image(MainGame.midX, 0, "bg_blur"));
		bb.anchor.setTo(.5, 0);
		bb.width = game.width;
		bb.height = game.height;
		var btnHome = this.fixedScreen.add(game.add.image(497, 40, "ss_main", "btn_home_0000"));
		btnHome.anchor.setTo(.5, .5);
		btnHome.inputEnabled = true;
		btnHome.events.onInputDown.add(this.goToMenu, this);
		btnHome.y = -100;
		game.add.tween(btnHome).to({
			y: 40
		}, 1E3, Phaser.Easing.Elastic.Out).start();
		var thisPos = Math.floor(this.playerMaxX * 100 / this.finishLine);
		var highScore = 0;
		if (vNum == 1) {
			var textWD =
				this.fixedScreen.add(game.add.image(268, 75, "ss_main", "text_welldone_0000"));
			textWD.anchor.setTo(.5, .5);
			textWD.y = -100;
			game.add.tween(textWD).to({
				y: 75
			}, 1E3, Phaser.Easing.Elastic.Out).start();
			var btnReplay = this.fixedScreen.add(game.add.image(268, 280, "ss_main", "btn_continue_0000"));
			btnReplay.anchor.setTo(.5, .5);
			btnReplay.inputEnabled = true;
			btnReplay.events.onInputDown.add(this.goToMenu, this);
			btnReplay.y = 550;
			game.add.tween(btnReplay).to({
				y: 280
			}, 1E3, Phaser.Easing.Elastic.Out).start();
			for (var j = 0; j < 10; j++) {
				var skok =
					localStorage["jumper-" + "level_" + j];
				if (skok != undefined && skok != "null") highScore += Number(skok)
			}
			var textC1 = this.fixedScreen.add(game.add.bitmapText(268 - 55, 170 - 50, "bmf_myra", "jumps: " + String(this.counterJumps), 24));
			var textC2 = this.fixedScreen.add(game.add.bitmapText(268 - 55, 200 - 50, "bmf_myra", "attempts: " + String(MainGame.counterAttempts), 24));
			var textC3 = this.fixedScreen.add(game.add.bitmapText(268 - 55, 230 - 50, "bmf_myra", "high score: " + String(highScore), 24));
			var newRecord = this.fixedScreen.add(game.add.image(268 +
				140, 225 - 46, "ss_main", "newhighscore_0000"));
			game.add.tween(newRecord).to({
				alpha: .1
			}, 250, Phaser.Easing.Linear.None, true, 0, -1, true)
		} else {
			var btnReplay = this.fixedScreen.add(game.add.image(268, 280, "ss_main", "btn_replayB_0000"));
			btnReplay.anchor.setTo(.5, .5);
			btnReplay.inputEnabled = true;
			btnReplay.events.onInputDown.add(this.replayGame, this);
			btnReplay.y = 550;
			game.add.tween(btnReplay).to({
				y: 280
			}, 1E3, Phaser.Easing.Elastic.Out).start();
			var textScore = this.fixedScreen.add(game.add.bitmapText(268, 55, "bmf_myra",
				String(thisPos) + "%", 54));
			textScore.anchor.setTo(.5, 0);
			textScore.y = -100;
			game.add.tween(textScore).to({
				y: 55
			}, 1E3, Phaser.Easing.Elastic.Out).start();
			var isNewRecord = false;
			if (thisPos >= 100) thisPos = 99;
			var skokNow = localStorage["jumper-" + this.game.state.states.LevelMenu.level];
			if (skokNow != undefined && skokNow != "null") {
				if (skokNow < thisPos) {
					localStorage["jumper-" + this.game.state.states.LevelMenu.level] = thisPos;
					isNewRecord = true
				}
			} else localStorage["jumper-" + this.game.state.states.LevelMenu.level] = thisPos;
			for (var j =
					0; j < 10; j++) {
				var skok = localStorage["jumper-" + "level_" + j];
				if (skok != undefined && skok != "null") highScore += Number(skok)
			}
			var textC1 = this.fixedScreen.add(game.add.bitmapText(268 - 55, 170 - 50, "bmf_myra", "jumps: " + String(this.counterJumps), 24));
			var textC2 = this.fixedScreen.add(game.add.bitmapText(268 - 55, 200 - 50, "bmf_myra", "attempts: " + String(MainGame.counterAttempts), 24));
			var textC3 = this.fixedScreen.add(game.add.bitmapText(268 - 55, 230 - 50, "bmf_myra", "high score: " + String(highScore), 24));
			if (isNewRecord) {
				var newRecord =
					this.fixedScreen.add(game.add.image(268 + 140, 225 - 46, "ss_main", "newhighscore_0000"));
				game.add.tween(newRecord).to({
					alpha: .1
				}, 250, Phaser.Easing.Linear.None, true, 0, -1, true)
			}
		}
	},
	goToMenu: function() {
		this.state.start("LevelMenu")
	},
	replayGame: function() {
		MainGame.coolMathApi(2, this.game.state.states.LevelMenu.levelNum);
		this.state.start("Game")
	},
	update: function() {
		if (MainGame.gameOver) return;
		game.physics.arcade.collide(this.player, this.platforms, this.collideGround);
		game.physics.arcade.collide(this.player, this.fields,
			this.collideFields);
		game.physics.arcade.overlap(this.player, this.layerBonuses, this.getBonus, null, this);
		if (game.input.activePointer.isDown && this.jumping) {
			this.player.body.velocity.y = -385;
			if (this.deltaJump - this.player.y > 80) this.jumping = false
		}
		if (this.player.y > 300 || this.player.y < -170) {
			this.playerMaxX = this.player.x;
			this.player.body.velocity.x = 0;
			MainGame.gameOver = true;
			this.loseGame()
		}
	},
	collideGround: function(player, object) {
		if (game.state.states.Game.player.body.touching.right) {
			game.state.states.Game.getBobo();
			return
		}
		if (game.state.states.Game.isFlappyMode && !game.state.states.Game.player.body.touching.up) game.state.states.Game.stopFlappyMode()
	},
	collideGround2: function(player, object) {
		if (game.state.states.Game.isFlappyMode) {
			if (!game.state.states.Game.player.body.blocked.up) game.state.states.Game.stopFlappyMode()
		} else if (game.state.states.Game.player.body.blocked.right) {
			game.state.states.Game.getBobo();
			return
		}
	},
	collideFields: function(player, object) {
		if (object.filedType == 1)
			if (MainGame.debug) {
				if (game.state.states.Game.player.body.blocked.down) game.state.states.Game.getBobo()
			} else game.state.states.Game.getBobo();
		else game.state.states.Game.player.body.velocity.x = 180
	},
	getSpline: function(player, object) {
		game.state.states.Game.getBobo()
	},
	getBobo: function() {
		if (MainGame.gameOver) return;
		if (MainGame.modeGod) return;
		this.playerMaxX = this.player.x;
		this.player.body.velocity.x = 50;
		this.player.body.velocity.y = -600;
		MainGame.gameOver = true;
		this.player.animations.paused = true;
		game.camera.follow(null);
		game.time.events.add(800, this.loseGame, this)
	},
	loseGame: function() {
		this.createButtonsFinish(2)
	},
	fnPause: function() {
		if (!game.sound.mute) {
			MainGame.isGoAway =
				true;
			game.sound.mute = true
		} else MainGame.isGoAway = false
	},
	fnResume: function() {
		if (MainGame.isGoAway) game.sound.mute = false
	},
	getBonus: function(player, object) {
		if (object.taken) return;
		object.taken = true;
		var typeObj = object.type;
		if (typeObj == 100) {
			this.playerMaxX = this.player.x;
			this.player.body.velocity.x = 0;
			this.player.body.velocity.y = 0;
			this.player.body.gravity.y = 0;
			this.player.animations.paused = true;
			MainGame.gameOver = true;
			localStorage["jumper-" + this.game.state.states.LevelMenu.level] = 100;
			var maxLevel = 1;
			var nextLevel =
				Number(this.game.state.states.LevelMenu.levelNum) + 1;
			var sMax = localStorage["jumper-levelMax"];
			if (sMax != undefined && sMax != "null") maxLevel = sMax;
			if (nextLevel > 10) nextLevel = 10;
			if (maxLevel < nextLevel) localStorage["jumper-levelMax"] = nextLevel;
			this.createButtonsFinish(1)
		} else if (typeObj == 1) {
			this.stopFlappyMode();
			var tweenB = game.add.tween(object).to({
				alpha: .3
			}, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
			var tweenB = game.add.tween(object.scale).to({
				x: 1.2,
				y: 1.2
			}, 150, Phaser.Easing.Linear.None, true, 0, 1, true);
			tweenB.onComplete.add(function() {
				object.kill()
			});
			this.gotExtraJump = true;
			if (this.jumping) this.jumpStart()
		} else if (typeObj == 2) {
			var tweenB2 = game.add.tween(object.scale).to({
				x: 1.7,
				y: 1.7
			}, 300, Phaser.Easing.Linear.None, true);
			game.add.tween(object).to({
				alpha: .3
			}, 300, Phaser.Easing.Linear.None, true);
			tweenB2.onComplete.add(function() {
				object.kill()
			});
			this.isFlappyMode = true;
			this.player.animations.play("sir_fly", 30, true)
		} else if (typeObj == 3) {
			var tweenB3 = game.add.tween(object.scale).to({
				x: 1.7,
				y: 1.7
			}, 300, Phaser.Easing.Linear.None, true);
			game.add.tween(object).to({
					alpha: .3
				},
				300, Phaser.Easing.Linear.None, true);
			tweenB3.onComplete.add(function() {
				object.kill()
			});
			var ourField = this.isFounded(object.nameField);
			if (ourField != null) {
				var tweenF1 = game.add.tween(ourField).to({
					alpha: 0
				}, 100, Phaser.Easing.Linear.None, true);
				tweenF1.onComplete.add(function() {
					tweenF2.start()
				});
				var tweenF2 = game.add.tween(ourField).to({
					alpha: .9
				}, 100, Phaser.Easing.Linear.None);
				tweenF2.onComplete.add(function() {
					ourField.kill()
				})
			}
		} else if (typeObj == -1) game.state.states.Game.getBobo()
	},
	isFounded: function(vNameField) {
		var len =
			this.fields.length;
		for (var i = 0; i < len; i++)
			if (this.fields.children[i].name == vNameField) return this.fields.children[i];
		return null
	},
	stopFlappyMode: function() {
		this.isFlappyMode = false;
		this.player.animations.play("sir_jump", 30, true);
		this.player.body.velocity.x = 180
	},
	jumpStart: function() {
		if (this.tutoralTime) return;
		if (this.player.body.touching.down || this.gotExtraJump || this.isFlappyMode) {
			this.jumping = true;
			if (this.gotExtraJump) this.gotExtraJump = false;
			this.deltaJump = this.player.y;
			this.counterJumps++
		}
	},
	jumpStop: function() {
		if (this.tutoralTime) return;
		this.jumping = false
	},
	pauseGame: function() {
		if (this.gameStop) return;
		MainGame.isPaused = !MainGame.isPaused;
		game.paused = MainGame.isPaused;
		this.layerTop.visible = MainGame.isPaused;
		if (MainGame.isMusicMuted) game.sound.setMute();
		else game.sound.unsetMute();
		if (game.sound.mute) this.musicButton.loadTexture("btn_sound_0001");
		else this.musicButton.loadTexture("btn_sound_0000")
	}
};
MainGame.LevelMenu = function(game) {
	this.music = null;
	this.backButton = null;
	this.moreGames = null;
	this.level = null;
	this.levelNum = null
};
MainGame.LevelMenu.prototype = {
	create: function() {
		MainGame.state = "LevelMenu";
		var b = game.add.sprite(MainGame.midX, 0, "bg_levels");
		b.anchor.setTo(.5, 0);
		this.backButton = game.add.sprite(497, 40, "ss_main", "btn_home_0000");
		this.backButton.anchor.setTo(.5, .5);
		this.backButton.inputEnabled = true;
		this.backButton.events.onInputDown.add(this.goToMenu, this);
		var maxLevel = 1;
		var sMax = localStorage["jumper-levelMax"];
		if (sMax != undefined && sMax != "null") maxLevel = sMax;
		var button;
		var posY = -65;
		var posX = 0;
		for (var i = 1; i <= 10; i++) {
			if ((i -
					1) % 5 === 0) posY += 140;
			posX = (i - 1) % 5 * 107;
			button = game.add.sprite(posX, posY, "ss_main", "zamok_0000");
			button.level = "level_" + i;
			button.levelNum = i;
			if (i <= maxLevel) {
				button.inputEnabled = true;
				button.events.onInputDown.add(this.startGame, this);
				button.alpha = 0;
				var skok = localStorage["jumper-" + "level_" + i];
				if (skok != "null" && skok) {
					if (skok < 10) posX += 10;
					if (skok < 100) game.add.bitmapText(posX + 30, posY + 80, "bmf_myra", String(skok) + "%", 28);
					else game.add.sprite(posX + 37, posY + 80, "ss_main", "galka_0000")
				}
			}
		}
		MainGame.counterAttempts = 0;
		MainGame.showTutorial =
			true;
		playMusic(0);
		MainGame.resizeGame()
	},
	goToMenu: function(pointer) {
		this.state.start("Menu")
	},
	startGame: function(button) {
		this.game.state.states.LevelMenu.level = button.level;
		this.game.state.states.LevelMenu.levelNum = button.levelNum;
		MainGame.coolMathApi(1, button.levelNum);
		this.state.start("Game")
	}
};
MainGame.MainMenu = function(game) {
	this.music = null;
	this.background = null;
	this.playButton = null;
	this.moreGames = null;
	this.musicButton = null;
	this.creditsButton = null;
	this.box = null;
	this.bear = null
};
MainGame.MainMenu.prototype = {
	create: function() {
		MainGame.state = "Menu";
		if (MainGame.firsTime) {
			var splashka = game.add.sprite(MainGame.midX, 180, "splash");
			splashka.anchor.setTo(.5);
			splashka.scale.setTo(.5);
			var splashkaTween = game.add.tween(splashka).to({
				alpha: 0
			}, 300, Phaser.Easing.Linear.None, true, 1500);
			splashkaTween.onComplete.add(function() {
				splashka.destroy();
				this.initMenu()
			}, this);
			MainGame.firsTime = false
		} else this.initMenu()
	},
	getDomain: function(url, subdomain) {
		subdomain = subdomain || false;
		url = url.replace(/(http?:\/\/)?(www.)?/i,
			"");
		if (!subdomain) {
			url = url.split(".");
			url = url.slice(url.length - 2).join(".")
		}
		if (url.indexOf("/") !== -1) return url.split("/")[0];
		return url
	},
	initMenu: function() {
		if (this.getDomain(document.domain) == "github.com" || this.getDomain(document.domain) == "github.io" || this.getDomain(document.domain) == "nsbrotherhood.com" || this.getDomain(document.domain) == "cmatgame.local" || this.getDomain(document.domain) == "localhost");
		else {
			var t = game.add.text(MainGame.midX, 150, "site-lock for\ncoolmath-games.com", MainGame.style);
			t.anchor.setTo(.5);
			return
		}
		var b = game.add.sprite(MainGame.midX, 0, "bg_menu");
		b.anchor.setTo(.5,
			0);
		var sir_menu = game.add.sprite(MainGame.midX, 160, "ss_main", "sir_menu_0000");
		sir_menu.anchor.setTo(.5, .5);
		game.add.tween(sir_menu).to({
			y: "+10"
		}, 800, Phaser.Easing.Linear.None, true, 0, -1, true);
		this.playButton = game.add.sprite(MainGame.midX, 315, "ss_main", "btn_start_0000");
		this.playButton.anchor.setTo(.5, .5);
		this.playButton.inputEnabled = true;
		this.playButton.events.onInputDown.add(this.startGame, this);
		this.creditsButton = game.add.sprite(497, 40, "ss_main", "btn_options_0000");
		this.creditsButton.anchor.setTo(.5,
			.5);
		this.creditsButton.inputEnabled = true;
		this.creditsButton.events.onInputDown.add(this.goCredits, this);
		game.add.tween(this.playButton.scale).to({
			x: 1.05,
			y: 1.05
		}, 500, Phaser.Easing.Linear.None, true, 0, -1, true);
		MainGame.counterAttempts = 0;
		game.input.onDown.addOnce(this.playOnce);
		MainGame.resizeGame()
	},
	playOnce: function() {
		if (!MainGame.firstGo) return;
		MainGame.firstGo = false;
		playMusic(0)
	},
	goCredits: function(pointer) {
		this.state.start("Credits")
	},
	startGame: function(pointer) {
		MainGame.coolMathApi(0);
		game.state.start("LevelMenu")
	}
};
MainGame.Preloader = function(game) {
	this.background = null;
	this.preloadBar = null;
	this.ready = false
};
MainGame.Preloader.prototype = {
	preload: function() {
		MainGame.state = "Preloader";
		this.background = this.add.sprite(this.world.centerX - 220, this.world.centerY + 10, "preloaderBackground");
		this.preloadBar = this.add.sprite(this.world.centerX - 220, this.world.centerY + 10, "preloaderBar");
		this.load.setPreloadSprite(this.preloadBar);
		game.load.audio("music-menu", ["assets/audio/ogg/m_menu.ogg", "assets/audio/m4a/m_menu.m4a"]);
		if (this.game.device.webAudio) game.load.audio("music-ingame", ["assets/audio/ogg/m_ingame.ogg", "assets/audio/m4a/m_ingame.m4a"]);
		this.load.image("splash", "assets/CoolmathGames.png?r=1");
		game.load.image("bg_back1", "assets/backgrounds/bg1.png?r=2");
		game.load.image("bg_back2", "assets/backgrounds/bg2.png?r=2");
		game.load.image("bg_back3", "assets/backgrounds/bg3.png?r=2");
		game.load.image("bg_back4", "assets/backgrounds/bg4.png?r=2");
		game.load.image("bg_back5", "assets/backgrounds/bg5.png?r=2");
		game.load.image("bg_back6", "assets/backgrounds/bg6.png?r=2");
		game.load.image("bg_back7", "assets/backgrounds/bg7.png?r=2");
		game.load.image("bg_back8",
			"assets/backgrounds/bg8.png?r=2");
		game.load.image("bg_back9", "assets/backgrounds/bg9.png?r=2");
		game.load.image("bg_back10", "assets/backgrounds/bg10.png?r=2");
		game.load.image("bg_blur", "assets/backgrounds/bg_blur.png?r=1");
		game.load.image("bg_menu", "assets/backgrounds/bg_menu.png?r=2");
		game.load.image("bg_levels", "assets/backgrounds/bg_levels.png?r=1");
		game.load.image("bg_credits", "assets/backgrounds/bg_credits.png?r=1");
		game.load.image("ground", "assets/entities/platform.png");
		game.load.image("block1",
			"assets/entities/block1.png");
		game.load.image("block2", "assets/entities/block2.png");
		game.load.atlasJSONHash("ss_main", "assets/entities/ss_main.png?r=2", "assets/entities/ss_main.json?r=2");
		game.load.bitmapFont("bmf_myra", "assets/fonts/bmf_myra_0.png", "assets/fonts/bmf_myra.fnt");
		for (var i = 1; i <= 10; i++) game.load.tilemap("level_" + i, "assets/levels/level_" + i + ".json?r=" + Math.random(), null, Phaser.Tilemap.TILED_JSON);
		game.load.image("tile-set", "assets/tiles/tails.png");
		if (!game.device.desktop || game.device.ie ||
			MainGame.test)
			for (var i = 1; i <= 10; i++) game.load.image("level_" + i, "assets/levels/level_" + i + ".png?r=" + Math.random())
	},
	create: function() {
		MainGame.s_musicM = game.add.audio("music-menu", 1, true);
		if (this.game.device.webAudio) MainGame.s_musicG = game.add.audio("music-ingame", 1, true);
		this.preloadBar.cropEnabled = false
	},
	update: function() {
		if (this.ready == false) {
			this.ready = true;
			game.state.start("Menu")
		}
	}
};
MainGame.Boot = function(game) {};
MainGame.Boot.prototype = {
	init: function() {
		this.input.maxPointers = 2;
		this.game.raf.forceSetTimeOut = true;
		game.stage.disableVisibilityChange = true;
		this.game.forceSingleUpdate = true;
		MainGame.firsTime = true;
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.setResizeCallback(this.resizeGame);
		game.scale.pageAlignHorizontally = true;
		if (game.device.desktop) MainGame.onDesktop = true;
		else {
			game.scale.pageAlignVertically = true;
			game.scale.forceLandscape = true;
			if (MainGame.orientation == 0) game.scale.forceOrientation(false, true);
			else game.scale.forceOrientation(true,
				false);
			game.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
			game.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
			game.scale.onOrientationChange.add(this.changeOrientation, this)
		}
		this.game.onPause.add(this.onGamePause, this);
		this.game.onResume.add(this.onGameResume, this)
	},
	preload: function() {
		this.load.image("preloaderBackground", "assets/preloader_back.png?r=2");
		this.load.image("preloaderBar", "assets/preloader_bar.png?r=2")
	},
	create: function() {
		this.state.start("Preloader")
	},
	onGamePause: function() {
		if (!game.device.webAudio) return;
		if (!game.sound.mute) {
			MainGame.isGoAway = true;
			game.sound.mute = true
		} else MainGame.isGoAway = false
	},
	onGameResume: function() {
		if (!game.device.webAudio) return;
		if (MainGame.isGoAway) game.sound.mute = false
	},
	changeOrientation: function() {},
	resizeGame: function() {
		if (MainGame.old_w != window.innerWidth || MainGame.old_h != window.innerHeight) {
			MainGame.old_w = window.innerWidth;
			MainGame.old_h = window.innerHeight;
			MainGame.resizeGame()
		}
	},
	enterIncorrectOrientation: function() {
		setTimeout(function() {
			window.scrollTo(0,
				1)
		}, 100);
		MainGame.orientated = false;
		document.getElementById("orientation").style.display = "block";
		if (!game.device.android) {
			document.getElementById("orientation").style.width = window.innerWidth + "px";
			document.getElementById("orientation").style.height = window.innerHeight + "px"
		}
	},
	leaveIncorrectOrientation: function() {
		MainGame.orientated = true;
		if (MainGame.loadIncorrect) window.location.reload();
		document.getElementById("orientation").style.display = "none"
	}
};