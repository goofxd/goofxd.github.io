var bus;

function addBus() {
	bus = game.add.sprite(0, 0, 'bus');
	bus.frame = 1;
	bus.position.setTo(sprt.x - 300, sprt.y + 30 - 400);
	bus.anchor.setTo(0.5, 1);
	var angel;
	angel = bus.addChild(game.make.sprite(-40, -110, 'angel'));
	angel.animations.add('idle', null, 12);
	angel.play('idle', null, true);
	angel.anchor.setTo(0.5, 1);
	angel.scale.x = -1;
	angel = bus.addChild(game.make.sprite(40, -110, 'angel'));
	angel.animations.add('idle', null, 12);
	angel.play('idle', null, true);
	angel.anchor.setTo(0.5, 1);
	bus.stat = 'intro';
	bus.fly = 'in';
	game.camera.focusOnXY(sprt.x, sprt.y + 0);
	sprt.visible = false;
	sprt.noControl = true;
	sprt.xx = 0;
	bus.ct = 30;
}

function callBus() {
	bus.revive();
	bus.position.setTo(sprt.x - 300, sprt.y + 30 - 400);
	bus.frame = 0;
	bus.stat = 'outro';
	bus.fly = 'in';
	bus.ct = 9;
	world.q = 0;
}

function busCode() {
	if (!bus.stat) {
		return;
	}
	if (bus.ct > 0) {
		bus.ct--;
		if (bus.ct == 7) {
			fxPlay(sfx.fxBus);
		}
		return true;
	}
	if (bus.fly == 'in') {
		bus.xx = (sprt.x - bus.x) / 18;
		if (bus.xx < 7) {
			bus.xx = 7;
		}
		bus.x += bus.xx;
		bus.yy = (sprt.y - bus.y + 30) / 8;
		bus.y += bus.yy;
		if (bus.x > sprt.x - 8) {
			bus.fly = 'out';
			bus.yy = -0.1;
			if (bus.stat == 'intro') {
				bus.frame = 0;
				sprt.visible = true;
				sprt.noControl = false;
			}
			if (bus.stat == 'outro') {
				bus.frame = 1;
				sprt.visible = false;
			}
		}
		return true;
	}
	if (bus.fly == 'out') {
		bus.x += bus.xx;
		bus.y += bus.yy;
		bus.xx += 0.4;
		bus.yy = bus.yy * 1.3;
		if (bus.yy < -12) {
			bus.yy = -12;
		}
		if (bus.y < game.camera.y - 200) {
			bus.yy = -12;
			bus.fly = null;
			if (bus.stat == 'intro') {
				bus.stat = null;
				bus.kill();
			}
			if (bus.stat == 'outro') {
				world.doneCT = 999;
			}
		}
	}
}