var sprt;
var plats;
var logs;
var spikes;
var bumpers;
var pars;
var sfx;
var levl = 1;
var p;
var gamePad;
var spaceKey;
var cursors;
var wasd;
var tuts;
var lasers;
var clouds;
var tim = 0;
var clck;
var maps = [null, {
	plats: [{
		x: -80,
		y: 80,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [797, 1035, 885],
		right: -40,
		bottom: 120
	}, {
		x: -120,
		y: -160,
		w: 40,
		h: 880,
		semi: undefined,
		del: undefined,
		txt: null,
		right: -80,
		bottom: 720
	}, {
		x: -40,
		y: 200,
		w: 1080,
		h: 80,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1040,
		bottom: 280
	}, {
		x: 1320,
		y: 40,
		w: 120,
		h: 440,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1440,
		bottom: 480
	}, {
		x: 840,
		y: 120,
		w: 160,
		h: 80,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1000,
		bottom: 200
	}, {
		x: 360,
		y: 280,
		w: 960,
		h: 80,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1320,
		bottom: 360
	}, {
		x: 720,
		y: 480,
		w: 40,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 760,
		bottom: 520
	}, {
		x: 680,
		y: 520,
		w: 40,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 720,
		bottom: 560
	}, {
		x: -80,
		y: 680,
		w: 640,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 560,
		bottom: 720
	}, {
		x: 360,
		y: 360,
		w: 80,
		h: 120,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 440,
		bottom: 480
	}, {
		x: -40,
		y: 480,
		w: 160,
		h: 80,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 120,
		bottom: 560
	}, {
		x: 480,
		y: 360,
		w: 80,
		h: 80,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 560,
		bottom: 440
	}, {
		x: 160,
		y: 480,
		w: 120,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 280,
		bottom: 520
	}, {
		x: -40,
		y: 280,
		w: 160,
		h: 120,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 120,
		bottom: 400
	}, {
		x: 240,
		y: 560,
		w: 80,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 320,
		bottom: 600
	}, {
		x: 240,
		y: 600,
		w: 120,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 360,
		bottom: 640
	}, {
		x: 200,
		y: 520,
		w: 80,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 280,
		bottom: 560
	}, {
		x: 1120,
		y: 80,
		w: 80,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1200,
		bottom: 120
	}, {
		x: 1440,
		y: 120,
		w: 120,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1560,
		bottom: 160
	}, {
		x: 1600,
		y: -280,
		w: 80,
		h: 1000,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1680,
		bottom: 720
	}, {
		x: 1480,
		y: 240,
		w: 120,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1600,
		bottom: 280
	}, {
		x: 1440,
		y: 360,
		w: 120,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1560,
		bottom: 400
	}, {
		x: 560,
		y: 560,
		w: 160,
		h: 160,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 720,
		bottom: 720
	}, {
		x: 760,
		y: 440,
		w: 280,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1040,
		bottom: 480
	}, {
		x: 1040,
		y: 480,
		w: 40,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1080,
		bottom: 520
	}, {
		x: 1080,
		y: 520,
		w: 40,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1120,
		bottom: 560
	}, {
		x: 1120,
		y: 560,
		w: 480,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1600,
		bottom: 600
	}, {
		x: 167,
		y: 151,
		w: 26,
		h: 40,
		semi: 1,
		del: undefined,
		txt: null,
		right: 193,
		bottom: 191
	}, {
		x: -40,
		y: 40,
		w: 120,
		h: 160,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 80,
		bottom: 200
	}],
	sprt: {
		x: 400,
		y: 200,
		xx: 1
	},
	spikes: [],
	xit: {
		x: 216,
		y: 480
	},
	yEnd: 920,
	grfx: {
		txt: 'lev1',
		x: -200,
		y: -160
	},
	lasers: [],
	tuts: [{
		nr: 1,
		x: 320,
		y: 40,
		right: 600,
		bottom: 200
	}, {
		nr: 2,
		x: 680,
		y: 40,
		right: 820,
		bottom: 200
	}, {
		nr: 4,
		x: -80,
		y: 320,
		right: 1000,
		bottom: 680
	}]
}, {
	plats: [{
		x: 160,
		y: 40,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		right: 200,
		bottom: 80
	}, {
		x: 120,
		y: 40,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [1064, 940, 965],
		right: 160,
		bottom: 80
	}, {
		x: 200,
		y: 40,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [1064, 940, 965],
		right: 240,
		bottom: 80
	}, {
		x: -120,
		y: -400,
		w: 40,
		h: 600,
		semi: undefined,
		del: undefined,
		txt: null,
		right: -80,
		bottom: 200
	}, {
		x: 760,
		y: -400,
		w: 40,
		h: 600,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 800,
		bottom: 200
	}, {
		x: 240,
		y: -120,
		w: 160,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 400,
		bottom: -80
	}, {
		x: 280,
		y: -80,
		w: 80,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 360,
		bottom: -40
	}, {
		x: 440,
		y: -40,
		w: 80,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 520,
		bottom: 0
	}, {
		x: 240,
		y: 40,
		w: 80,
		h: 160,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 320,
		bottom: 200
	}, {
		x: 40,
		y: 40,
		w: 80,
		h: 160,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 120,
		bottom: 200
	}, {
		x: 0,
		y: 120,
		w: 40,
		h: 80,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 40,
		bottom: 200
	}, {
		x: -80,
		y: 200,
		w: 840,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 760,
		bottom: 240
	}, {
		x: 600,
		y: 40,
		w: 80,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 680,
		bottom: 80
	}, {
		x: 480,
		y: 120,
		w: 80,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 560,
		bottom: 160
	}],
	sprt: {
		x: 360,
		y: 200,
		xx: 1
	},
	spikes: [],
	xit: {
		x: 180,
		y: 200
	},
	yEnd: 440,
	grfx: {
		txt: 'lev2',
		x: -160,
		y: -440
	},
	lasers: [],
	tuts: [{
		nr: 3,
		x: 220,
		y: -340,
		right: 520,
		bottom: -60
	}]
}, {
	plats: [{
		x: 400,
		y: 120,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [1064, 950, 960],
		right: 440,
		bottom: 160
	}, {
		x: 540,
		y: 240,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		right: 580,
		bottom: 280
	}, {
		x: 700,
		y: 360,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [1064, 950, 960],
		right: 740,
		bottom: 400
	}, {
		x: 840,
		y: 480,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		right: 880,
		bottom: 520
	}, {
		x: 980,
		y: 600,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [1064, 950, 960],
		right: 1020,
		bottom: 640
	}, {
		x: 880,
		y: 800,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		right: 920,
		bottom: 840
	}, {
		x: 760,
		y: 880,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [1064, 950, 960],
		right: 800,
		bottom: 920
	}, {
		x: 0,
		y: 0,
		w: 320,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 320,
		bottom: 40
	}, {
		x: 1080,
		y: 680,
		w: 240,
		h: 120,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1320,
		bottom: 800
	}, {
		x: 600,
		y: 960,
		w: 80,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 680,
		bottom: 1000
	}],
	sprt: {
		x: 80,
		y: 0,
		xx: 1
	},
	spikes: [{
		x: 1300,
		y: 680
	}, {
		x: 1260,
		y: 680
	}],
	xit: {
		x: 640,
		y: 960
	},
	yEnd: 1012,
	grfx: {
		txt: 'lev3',
		x: 0,
		y: 0
	},
	lasers: [],
	tuts: [{
		nr: 6,
		x: 0,
		y: -280,
		right: 320,
		bottom: 0
	}]
}, {
	plats: [{
		x: 440,
		y: 200,
		w: 40,
		h: 20,
		semi: 1,
		del: undefined,
		txt: 'cloud',
		cloudCT: [18],
		right: 480,
		bottom: 220
	}, {
		x: 480,
		y: 200,
		w: 40,
		h: 20,
		semi: 1,
		del: undefined,
		txt: 'cloud',
		cloudCT: [18],
		right: 520,
		bottom: 220
	}, {
		x: 800,
		y: 200,
		w: 40,
		h: 20,
		semi: 1,
		del: undefined,
		txt: 'cloud',
		cloudCT: [18],
		right: 840,
		bottom: 220
	}, {
		x: 880,
		y: 280,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		right: 920,
		bottom: 320
	}, {
		x: 880,
		y: 400,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [667, 940, 900],
		right: 920,
		bottom: 440
	}, {
		x: 840,
		y: 200,
		w: 40,
		h: 20,
		semi: 1,
		del: undefined,
		txt: 'cloud',
		cloudCT: [18],
		right: 880,
		bottom: 220
	}, {
		x: 280,
		y: 200,
		w: 160,
		h: 160,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 440,
		bottom: 360
	}, {
		x: 520,
		y: 200,
		w: 160,
		h: 160,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 680,
		bottom: 360
	}, {
		x: 680,
		y: 240,
		w: 200,
		h: 80,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 880,
		bottom: 320
	}, {
		x: 720,
		y: 480,
		w: 360,
		h: 160,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1080,
		bottom: 640
	}, {
		x: 920,
		y: 0,
		w: 160,
		h: 480,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1080,
		bottom: 480
	}],
	sprt: {
		x: 360,
		y: 200,
		xx: 1
	},
	spikes: [{
		x: 860,
		y: 240
	}, {
		x: 820,
		y: 240
	}, {
		x: 780,
		y: 240
	}, {
		x: 900,
		y: 480
	}],
	xit: {
		x: 790,
		y: 480
	},
	yEnd: 680,
	grfx: {
		txt: 'lev4',
		x: 280,
		y: -40
	},
	lbg: {
		txt: 'lbg4',
		x: 700,
		y: 200
	},
	lasers: [],
	tuts: [{
		nr: 5,
		x: 599.95,
		y: 1.05,
		right: 920,
		bottom: 279.95
	}]
}, {
	plats: [{
		x: 440,
		y: 400,
		w: 40,
		h: 20,
		semi: 1,
		del: undefined,
		txt: 'cloud',
		cloudCT: [18],
		right: 480,
		bottom: 420
	}, {
		x: 560,
		y: 80,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [750, 940, 840],
		right: 600,
		bottom: 120
	}, {
		x: 480,
		y: 480,
		w: 40,
		h: 20,
		semi: 1,
		del: undefined,
		txt: 'cloud',
		cloudCT: [18],
		right: 520,
		bottom: 500
	}, {
		x: 440,
		y: 320,
		w: 40,
		h: 20,
		semi: 1,
		del: undefined,
		txt: 'cloud',
		cloudCT: [18],
		right: 480,
		bottom: 340
	}, {
		x: 440,
		y: 240,
		w: 40,
		h: 20,
		semi: 1,
		del: undefined,
		txt: 'cloud',
		cloudCT: [18],
		right: 480,
		bottom: 260
	}, {
		x: 440,
		y: 160,
		w: 40,
		h: 20,
		semi: 1,
		del: undefined,
		txt: 'cloud',
		cloudCT: [18],
		right: 480,
		bottom: 180
	}, {
		x: 580,
		y: 40,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [1000, 885, 1000],
		right: 620,
		bottom: 80
	}, {
		x: 600,
		y: 80,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [1192, 940, 880],
		right: 640,
		bottom: 120
	}, {
		x: 120,
		y: 40,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [500, 1205, 840],
		right: 160,
		bottom: 80
	}, {
		x: 120,
		y: 0,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [792, 1205, 900],
		right: 160,
		bottom: 40
	}, {
		x: 120,
		y: 160,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [750, 940, 840],
		right: 160,
		bottom: 200
	}, {
		x: 120,
		y: 120,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [970, 885, 1000],
		right: 160,
		bottom: 160
	}, {
		x: -40,
		y: -160,
		w: 40,
		h: 360,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 0,
		bottom: 200
	}, {
		x: 1080,
		y: -200,
		w: 40,
		h: 640,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1120,
		bottom: 440
	}, {
		x: 560,
		y: 120,
		w: 160,
		h: 120,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 720,
		bottom: 240
	}, {
		x: 680,
		y: 200,
		w: 400,
		h: 80,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1080,
		bottom: 280
	}, {
		x: 720,
		y: 480,
		w: 40,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 760,
		bottom: 520
	}, {
		x: 680,
		y: 520,
		w: 40,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 720,
		bottom: 560
	}, {
		x: 760,
		y: 440,
		w: 320,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1080,
		bottom: 480
	}, {
		x: 120,
		y: 560,
		w: 560,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 680,
		bottom: 600
	}, {
		x: 360,
		y: 200,
		w: 80,
		h: 200,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 440,
		bottom: 400
	}, {
		x: 80,
		y: 280,
		w: 40,
		h: 320,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 120,
		bottom: 600
	}, {
		x: 480,
		y: 120,
		w: 80,
		h: 200,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 560,
		bottom: 320
	}, {
		x: 0,
		y: -41,
		w: 1080,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1080,
		bottom: -1
	}, {
		x: 280,
		y: 120,
		w: 160,
		h: 80,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 440,
		bottom: 200
	}, {
		x: 720,
		y: 0,
		w: 40,
		h: 160,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 760,
		bottom: 160
	}, {
		x: -40,
		y: 200,
		w: 240,
		h: 80,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 200,
		bottom: 280
	}],
	sprt: {
		x: 880,
		y: 440,
		xx: 1
	},
	spikes: [{
		x: 460,
		y: 560
	}, {
		x: 420,
		y: 560
	}, {
		x: 380,
		y: 560
	}, {
		x: 500,
		y: 560
	}, {
		x: 540,
		y: 560
	}, {
		x: 580,
		y: 560
	}, {
		x: 420,
		y: 120
	}],
	xit: {
		x: 320,
		y: 560
	},
	yEnd: 720,
	grfx: {
		txt: 'lev5',
		x: -80,
		y: -200
	},
	lasers: [{
		x: 320,
		y: 0,
		spd: 0,
		ct: 16,
		ctMax: 100,
		ctMid: 30,
		rot: 0
	}, {
		x: 600,
		y: 0,
		spd: 0,
		ct: 66,
		ctMax: 100,
		ctMid: 30,
		rot: 0
	}, {
		x: 960,
		y: 280,
		spd: 0,
		ct: 77,
		ctMax: 80,
		ctMid: 50,
		rot: 0
	}],
	tuts: []
}, {
	plats: [{
		x: 440,
		y: 480,
		w: 40,
		h: 20,
		semi: 1,
		del: undefined,
		txt: 'cloud',
		cloudCT: [18],
		right: 480,
		bottom: 500
	}, {
		x: 600,
		y: 400,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [750, 940, 840],
		right: 640,
		bottom: 440
	}, {
		x: 640,
		y: 400,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [978, 940, 840],
		right: 680,
		bottom: 440
	}, {
		x: 40,
		y: 240,
		w: 120,
		h: 80,
		semi: undefined,
		del: 1,
		txt: 'bricks102',
		right: 160,
		bottom: 320
	}, {
		x: 240,
		y: 360,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		right: 280,
		bottom: 400
	}, {
		x: 320,
		y: 480,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		right: 360,
		bottom: 520
	}, {
		x: 800,
		y: 400,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [500, 1205, 840],
		right: 840,
		bottom: 440
	}, {
		x: 1240,
		y: 360,
		w: 120,
		h: 80,
		semi: undefined,
		del: 1,
		txt: 'bricks102',
		right: 1360,
		bottom: 440
	}, {
		x: 760,
		y: 400,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [750, 940, 840],
		right: 800,
		bottom: 440
	}, {
		x: 600,
		y: 440,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [500, 1205, 840],
		right: 640,
		bottom: 480
	}, {
		x: 720,
		y: 400,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [978, 940, 840],
		right: 760,
		bottom: 440
	}, {
		x: 680,
		y: 400,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [1192, 1000, 800],
		right: 720,
		bottom: 440
	}, {
		x: 680,
		y: 160,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [1000, 0, 1030],
		right: 720,
		bottom: 200
	}, {
		x: 720,
		y: 160,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [1000, 0, 1030],
		right: 760,
		bottom: 200
	}, {
		x: 960,
		y: 440,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [1192, 1000, 800],
		right: 1000,
		bottom: 480
	}, {
		x: 1000,
		y: 440,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [1192, 1000, 800],
		right: 1040,
		bottom: 480
	}, {
		x: 280,
		y: 120,
		w: 320,
		h: 80,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 600,
		bottom: 200
	}, {
		x: 320,
		y: -40,
		w: 160,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 480,
		bottom: 0
	}, {
		x: 360,
		y: 0,
		w: 80,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 440,
		bottom: 40
	}, {
		x: 360,
		y: 240,
		w: 80,
		h: 120,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 440,
		bottom: 360
	}, {
		x: 320,
		y: 200,
		w: 120,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 440,
		bottom: 240
	}, {
		x: 360,
		y: 560,
		w: 200,
		h: 80,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 560,
		bottom: 640
	}, {
		x: 560,
		y: 480,
		w: 320,
		h: 80,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 880,
		bottom: 560
	}, {
		x: 640,
		y: 240,
		w: 160,
		h: 80,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 800,
		bottom: 320
	}, {
		x: 880,
		y: 320,
		w: 80,
		h: 200,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 960,
		bottom: 520
	}, {
		x: 1040,
		y: 240,
		w: 80,
		h: 240,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1120,
		bottom: 480
	}],
	sprt: {
		x: 320,
		y: 120,
		xx: 1
	},
	spikes: [{
		x: 400,
		y: 560
	}],
	xit: {
		x: 480,
		y: 120
	},
	yEnd: 720,
	grfx: {
		txt: 'lev6',
		x: 280,
		y: -40
	},
	lbg: {
		txt: 'lbg6',
		x: 70,
		y: 80
	},
	lasers: [{
		x: 400,
		y: 40,
		spd: 0,
		ct: 0,
		ctMax: 0,
		ctMid: 0,
		rot: 0
	}, {
		x: 740,
		y: 320,
		spd: 0,
		ct: 0,
		ctMax: 0,
		ctMid: 0,
		rot: 0
	}],
	tuts: []
}, {
	plats: [{
		x: 660,
		y: 440,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [1108, 1000, 1000],
		right: 700,
		bottom: 480
	}, {
		x: 1520,
		y: 720,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [500, 1205, 840],
		right: 1560,
		bottom: 760
	}, {
		x: 1080.2,
		y: 360,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [1106, 940, 840],
		right: 1120.2,
		bottom: 400
	}, {
		x: 1200.2,
		y: 360,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [978, 870, 840],
		right: 1240.2,
		bottom: 400
	}, {
		x: 920,
		y: 730,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [694, 1045, 840],
		right: 960,
		bottom: 770
	}, {
		x: 1560,
		y: 560,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [1175, 1000, 950],
		right: 1600,
		bottom: 600
	}, {
		x: 240,
		y: 520,
		w: 80,
		h: 80,
		semi: undefined,
		del: 1,
		txt: 'bricks101',
		right: 320,
		bottom: 600
	}, {
		x: 1000,
		y: 239,
		w: 320,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1320,
		bottom: 279
	}, {
		x: 760,
		y: 440,
		w: 680,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1440,
		bottom: 480
	}, {
		x: 1320,
		y: 160,
		w: 80,
		h: 160,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1400,
		bottom: 320
	}, {
		x: 1040,
		y: 640,
		w: 80,
		h: 80,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1120,
		bottom: 720
	}, {
		x: 880,
		y: 160,
		w: 120,
		h: 120,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1000,
		bottom: 280
	}, {
		x: 760,
		y: 840,
		w: 720,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1480,
		bottom: 880
	}, {
		x: 1320,
		y: 640,
		w: 80,
		h: 80,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1400,
		bottom: 720
	}, {
		x: 760,
		y: 640,
		w: 80,
		h: 80,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 840,
		bottom: 720
	}, {
		x: 1480,
		y: 800,
		w: 80,
		h: 80,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1560,
		bottom: 880
	}, {
		x: 640,
		y: 840,
		w: 80,
		h: 280,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 720,
		bottom: 1120
	}, {
		x: 760,
		y: 880,
		w: 80,
		h: 280,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 840,
		bottom: 1160
	}, {
		x: 440,
		y: 440,
		w: 80,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 520,
		bottom: 480
	}, {
		x: 600,
		y: 560,
		w: 80,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 680,
		bottom: 600
	}, {
		x: 880,
		y: 360,
		w: 80,
		h: 80,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 960,
		bottom: 440
	}, {
		x: 800,
		y: 480,
		w: 600,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 1400,
		bottom: 520
	}],
	sprt: {
		x: 480,
		y: 440,
		xx: 1
	},
	spikes: [{
		x: 860,
		y: 440
	}, {
		x: 980,
		y: 440
	}],
	xit: {
		x: 640,
		y: 560
	},
	yEnd: 1160,
	grfx: {
		txt: 'lev7',
		x: 440,
		y: 160
	},
	lasers: [{
		x: 1100,
		y: 280,
		spd: -2,
		ct: 0,
		ctMax: 0,
		ctMid: 0,
		rot: 0
	}, {
		x: 1160,
		y: 690,
		spd: 2,
		ct: 0,
		ctMax: 0,
		ctMid: 0,
		rot: 0
	}, {
		x: 1220,
		y: 280,
		spd: 2,
		ct: 0,
		ctMax: 0,
		ctMid: 0,
		rot: 0
	}, {
		x: 1000,
		y: 690,
		spd: -2,
		ct: 0,
		ctMax: 0,
		ctMid: 0,
		rot: 0
	}, {
		x: 520,
		y: 460,
		spd: 0,
		ct: 0,
		ctMax: 0,
		ctMid: 0,
		rot: -90
	}],
	tuts: []
}, {
	plats: [{
		x: -40,
		y: -160,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		hsl: [1000, 0, 1000],
		right: 0,
		bottom: -120
	}, {
		x: 120,
		y: -40,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		right: 160,
		bottom: 0
	}, {
		x: 240,
		y: -40,
		w: 40,
		h: 20,
		semi: 1,
		del: undefined,
		txt: 'cloud',
		cloudCT: [18],
		right: 280,
		bottom: -20
	}, {
		x: 240,
		y: 0,
		w: 40,
		h: 40,
		semi: undefined,
		del: 1,
		txt: null,
		right: 280,
		bottom: 40
	}, {
		x: -240,
		y: -40,
		w: 120,
		h: 80,
		semi: undefined,
		del: 1,
		txt: 'bricks103',
		right: -120,
		bottom: 40
	}, {
		x: 400,
		y: -80,
		w: 240,
		h: 40,
		semi: undefined,
		del: undefined,
		txt: null,
		right: 640,
		bottom: -40
	}],
	sprt: {
		x: -20,
		y: -480,
		xx: 1
	},
	spikes: [{
		x: -20,
		y: -80
	}, {
		x: 0,
		y: -60,
		rot: 90
	}, {
		x: -20,
		y: -40,
		flip: true
	}, {
		x: 200,
		y: 60
	}, {
		x: 220,
		y: 80,
		rot: 90
	}, {
		x: 200,
		y: 100,
		flip: true
	}, {
		x: -180,
		y: -280
	}, {
		x: -160,
		y: -260,
		rot: 90
	}, {
		x: -180,
		y: -240,
		flip: true
	}, {
		x: 280,
		y: -180
	}, {
		x: 300,
		y: -160,
		rot: 90
	}, {
		x: 280,
		y: -140,
		flip: true
	}, {
		x: -200,
		y: -260,
		rot: -90
	}, {
		x: -40,
		y: -60,
		rot: -90
	}, {
		x: 180,
		y: 80,
		rot: -90
	}, {
		x: 260,
		y: -160,
		rot: -90
	}],
	xit: {
		x: 0,
		y: -960
	},
	bb: {
		x: 520,
		y: -80
	},
	yEnd: 400,
	grfx: {
		txt: 'lev8',
		x: -200,
		y: -280
	},
	lasers: [],
	tuts: []
}];
var LevelState = {
	preload: function() {
		settings(this);
		game.stage.backgroundColor = "#000000";
	},
	create: function() {
		cursors = game.input.keyboard.createCursorKeys();
		wasd = {
			up: game.input.keyboard.addKey(Phaser.Keyboard.W),
			down: game.input.keyboard.addKey(Phaser.Keyboard.S),
			left: game.input.keyboard.addKey(Phaser.Keyboard.A),
			right: game.input.keyboard.addKey(Phaser.Keyboard.D),
		};
		sfx = new Object;
		sfx.fxBus = this.add.audio('fxBus');
		sfx.fxJump = this.add.audio('fxJump', 1.5);
		sfx.aaa = [];
		for (var i = 1; i < 16; i++) {
			var nr = 100 + i;
			var sndName = 'fxAaa' + nr;
			sfx.aaa.push(this.add.audio(sndName, 0.6));
		}
		sfx.fxLand = this.add.audio('fxLand');
		sfx.fxsplatterBrick = this.add.audio('fxsplatterBrick', 0.3);
		sfx.fxHup = this.add.audio('fxHup', 0.4);
		sfx.fxNom = this.add.audio('fxNom', 0.6, true);
		world = this;
		world.doneCT = null;
		world.q = null;
		pars = [];
		plats = [];
		logs = [];
		spikes = [];
		bumpers = [];
		clouds = [];
		lasers = [];
		game.input.onDown.add(controlDown, this);
		game.input.onUp.add(controlUp, this);
		sprt = this.game.add.sprite(this.game.world.centerX, 450, 'sprt');
		sprt.kolH = 30;
		sprt.kolW = 12;
		sprt.zf = 1;
		sprt.scale.setTo(sprt.zf, sprt.zf);
		sprt.animations.add('run', [5, 6, 7, 8, 9, 10], 14);
		sprt.animations.add('jump', [11], 1);
		sprt.animations.add('fall', [12], 1);
		sprt.animations.add('dd', [13], 1);
		sprt.animations.add('idle', [0, 1, 2, 3], 6);
		sprt.anchor.setTo(0.5, 0.98);
		sprt.spd = 4;
		sprt.xx = 0;
		sprt.yy = -1;
		sprt.hSize = sprt.width / 2;
		sprt.ju = true;
		sprt.jh = -12;
		iniLevel();
		muPlay('muIngame', 0.4, false);
		spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		spaceKey.hold = null;
		addBus();
		addGamepad();
		sprt.play('jump');
		game.camera.focusOnXY(sprt.x, sprt.y - 10);
		addClock();
	},
	update: function() {
		clockCode();
		cloudCode();
		laserCode();
		tutCode();
		if (sprt.y > world.yEnd + 800) {
			world.doneCT = 9999;
		}
		bgCode();
		if (bbCode()) {
			quakeCode();
			parCode();
			return;
		}
		if (busCode()) {
			quakeCode();
			parCode();
			return;
		}
		if (sprt.visible) {
			if (!sprt.dd || 1 == 1) {
				xitCode();
				controls();
				preSpikeCode();
				gravCode();
				leftRightCode();
				spikeCode();
				saniCode();
				if (sprt.y < world.yEnd + 200) {
					game.camera.focusOnXY(sprt.x, sprt.y - 10);
				}
			}
		}
		quakeCode();
		parCode();
	},
	render: function() {
		clck.y = game.camera.y + game.camera.height - 40;
		if (rotDevice) {
			rotDevice.x = game.camera.x;
			rotDevice.y = game.camera.y;
			game.world.bringToTop(rotDevice);
		}
		if (game.paused || rotDevice) {
			return;
		}
		if (world.doneCT) {
			if (world.doneCT > 120) {
				world.doneCT = null;
				if (!sprt.visible) {
					if (levl > game.ldat) {
						game.ldat = levl;
						if (game.storageAvailable) {
							localStorage.setItem('ldat', game.ldat);
						}
					}
				}
				newState();
			}
		}
	}
};

function bbCode() {
	if (!world.bb) {
		return;
	}
	if (world.bb.nom) {
		zoomBB();
		sprt.visible = false;
		goCode();
		return true;
	}
	if (sprtHitTest(world.bb)) {
		p.visible = false;
		hideGamePad();
		clck.visible = false;
		sprt.noControl = true;
		sprt.xx = 1;
		sprt.spd = (world.bb.x - sprt.x) / 24;
		if (sprt.spd > 3) {
			sprt.spd = 3;
		}
		sprt.spd = Math.ceil(sprt.spd * 2) * 0.5;
		if (sprt.x > world.bb.x - 1) {
			fxPlay(sfx.fxNom);
			if (mu) {
				mu.stop();
				mu.destroy();
				mu = null;
			}
			world.bb.nom = true;
			world.bb.yyb = 0;
			world.bb.ct1 = 0;
			world.bb.ct2 = 0;
		}
	}
}

function goCode() {
	world.bb.ct1++;
	addToys();
	if (world.bb.ct1 > 6) {
		var rnd = Math.random() * 0.3 - 0.15;
		world.bb.scale.x = 1 + rnd;
		world.bb.scale.y = 1 - rnd;
		world.bb.ct1 = 0;
		world.bb.ct2++;
		if (world.bb.ct1 == 0 && world.bb.ct2 == 15) {
			var wellDone = world.game.add.sprite(world.bb.x, world.bb.y - 130, 'wellDone');
			wellDone.anchor.setTo(0.5, 1);
		}
		if (world.bb.ct1 == 0 && world.bb.ct2 == 30) {
			var c2c = world.game.add.sprite(world.bb.x + 120, world.bb.y - 60, 'c2c');
			c2c.animations.add('idle', null, 1);
			c2c.play('idle', null, true);
			c2c.anchor.setTo(0, 0.5);
			sprt.gameDone = true;
		}
	}
}

function addToys() {
	var t = world.game.add.sprite(world.bb.x + Math.random() * 20 - 10, world.bb.y - Math.random() * 20, 'toys');
	t.frame = Math.floor(Math.random() * 7);
	t.anchor.setTo(0.5);
	t.xx = Math.random() * 12 - 6;
	t.yy = Math.random() * -10 - 4;
	t.rot = Math.random() * 20 - 10;
	pars.push(t);
}

function zoomBB() {
	sprt.x += (world.bb.x - sprt.x) / 12;
	var ybb = (world.bb.y - screenHeight / 2 + 20 - sprt.y) / 12;
	if (ybb < world.bb.yyb) {
		ybb = world.bb.yyb;
	}
	sprt.y += ybb;
	game.camera.focusOnXY(sprt.x, sprt.y - 10);
	world.bb.yyb -= 0.05;
}

function tutCode() {
	for (var i = 0; i < tuts.length; i++) {
		var tu = tuts[i];
		if (!sprt.noControl && sprtHitTest(tu)) {
			if (!tu.mc) {
				tu.mc = addTut(tu);
			}
			tu.mc.yy = (1 - tu.mc.cameraOffset.y) / 12;
			tu.mc.cameraOffset.y = Math.ceil(tu.mc.cameraOffset.y + tu.mc.yy);
		} else if (tu.mc && tu.mc.cameraOffset.y > -200) {
			tu.mc.yy -= 0.25;
			tu.mc.cameraOffset.y += tu.mc.yy;
		}
	}
}

function addTut(tu) {
	var t = 'tut1M';
	if (game.device.desktop) {
		t = 'tut1D';
	}
	var tutMC = world.game.add.sprite(game.camera.width / 2, 0, 'tuts');
	tutMC.frame = tu.nr - 1;
	tutMC.anchor.setTo(0.5, 0);
	tutMC.nr = 1;
	tutMC.fixedToCamera = true;
	tutMC.cameraOffset.y = -200;
	var angel;
	angel = tutMC.addChild(game.make.sprite(77, 44, 'angel'));
	angel.animations.add('idle', null, 12);
	angel.angle = 90;
	angel.play('idle', null, true);
	angel.anchor.setTo(0.5, 1);
	angel.scale.x = -1;
	angel = tutMC.addChild(game.make.sprite(-77, 44, 'angel'));
	angel.animations.add('idle', null, 12);
	angel.angle = -90;
	angel.play('idle', null, true);
	angel.anchor.setTo(0.5, 1);
	return tutMC;
}

function iniLevel() {
	var ldat = maps[levl];
	world.scroll = ldat.scroll;
	var spikeArray = ldat.spikes;
	var si = 0;
	for (var i = 0; i < spikeArray.length; i++) {
		var ob = spikeArray[i];
		var s = world.game.add.sprite(ob.x, ob.y, 'spikes');
		s.anchor.setTo(0.5, 1);
		s.kolSize = 20;
		s.kolSizeY = 12;
		s.l = s.x - s.kolSize;
		s.r = s.x + s.kolSize;
		s.t = s.y - s.kolSizeY;
		s.b = s.y;
		if (ob.flip) {
			s.scale.y = -1;
			s.l = s.x - s.kolSize;
			s.r = s.x + s.kolSize;
			s.t = s.y;
			s.b = s.y + s.kolSizeY;
			s.dwn = true;
		}
		if (ob.rot == 90) {
			s.angle = ob.rot;
			s.l = s.x;
			s.r = s.x + s.kolSizeY;
			s.t = s.y - s.kolSize;
			s.b = s.y + s.kolSize;
			s.dwn = true;
		}
		if (ob.rot == -90) {
			s.angle = ob.rot;
			s.l = s.x - s.kolSizeY;
			s.r = s.x;
			s.t = s.y - s.kolSize;
			s.b = s.y + s.kolSize;
			s.dwn = true;
		}
		spikes.push(s);
	}
	world.bb = null;
	if (ldat.bb) {
		world.bb = world.game.add.sprite(ldat.bb.x, ldat.bb.y, 'burgerBar');
		world.bb.anchor.setTo(0.5, 1);
		world.bb.sendToBack();
		var kolSize = 160;
		var kolSizeY = 20;
		world.bb.l = world.bb.x - kolSize;
		world.bb.r = world.bb.x + kolSize;
		world.bb.t = world.bb.y - kolSizeY;
		world.bb.b = world.bb.y;
	}
	var laserArray = ldat.lasers;
	for (var i = 0; laserArray && i < laserArray.length; i++) {
		var ob = laserArray[i];
		var b = world.game.add.sprite(ob.x, ob.y);
		b.anchor.setTo(0.5, 0);
		b.ray = b.addChild(game.make.sprite(0, 0, 'laserRay'));
		b.ray.anchor.setTo(0.5, 0);
		b.sock = b.addChild(game.make.sprite(0, 0, 'laserSocket'));
		b.sock.anchor.setTo(0.5, 0);
		b.ani = b.addChild(game.make.sprite(0, b.sock.height, 'laserAni'));
		b.ani.anchor.setTo(0.5, 1);
		b.ani.animations.add('idle', null, 12);
		b.ani.play('idle', null, true);
		b.spd = ob.spd;
		b.ct = ob.ct;
		b.ctMax = ob.ctMax;
		b.ctMid = ob.ctMid;
		b.angle = ob.rot;
		lasers.push(b);
		spikes.push(b);
	}
	var platArray = ldat.plats;
	for (var i = 0; i < platArray.length; i++) {
		var ob = platArray[i];
		var plat;
		if (ob.del) {
			var txtNam = 'bricks';
			if (ob.txt) {
				txtNam = ob.txt;
			}
			var bmd = txtNam;
			var bmd1 = 'splatterBrick1';
			var bmd2 = 'splatterBrick2';
			if (ob.hsl) {
				var h = ob.hsl[0] / 1000 - 1;
				var s = ob.hsl[1] / 1000 - 1;
				var l = ob.hsl[2] / 1000 - 1;
				bmd = game.make.bitmapData(40, 40);
				bmd.copy('bricks');
				bmd.update();
				bmd.shiftHSL(h, s, l);
				bmd1 = game.make.bitmapData(20, 10);
				bmd1.copy('splatterBrick1');
				bmd1.update();
				bmd1.shiftHSL(h, s, l);
				bmd2 = game.make.bitmapData(20, 10);
				bmd2.copy('splatterBrick2');
				bmd2.update();
				bmd2.shiftHSL(h, s, l);
			}
			plat = world.game.add.sprite(ob.x, ob.y, bmd);
			plat.splatterBricks = [bmd1, bmd2];
			plat.del = ob.del;
			plat.sendToBack();
		} else {
			if (!ob.txt) {
				ob.txt = 'plat';
			}
			plat = world.game.add.sprite(ob.x, ob.y, ob.txt);
			plat.visible = false;
			if (ob.txt == 'cloud') {
				plat.cloudCT = ob.cloudCT;
				clouds.push(plat);
				plat.visible = true;
				plat.sendToBack();
			}
		}
		plat.width = ob.w;
		plat.height = ob.h;
		plat.l = ob.x;
		plat.t = ob.y;
		plat.r = ob.right;
		plat.b = ob.bottom;
		if (ob.semi) {
			plat.semi = 1;
		}
		plats.push(plat);
	}
	var logArray = ldat.bumpers;
	for (var i = 0; logArray && i < logArray.length; i++) {
		var ob = logArray[i];
		var b = world.game.add.sprite(ob.x, ob.y, 'bumper');
		b.anchor.setTo(0.5, 1);
		b.kolSize = 50;
		b.l = ob.x - b.kolSize;
		b.r = ob.x + b.kolSize;
		b.b = ob.y;
		b.t = ob.y - 80;
		b.animations.add('bump', [1, 2, 3, 4, 5, 6, 7, 0], 8);
		bumpers.push(b);
	}
	var logArray = ldat.logs;
	var si = 0;
	for (var i = 0; i < logArray && logArray.length; i++) {
		var ob = logArray[i];
		var log = world.game.add.sprite(ob.x, ob.y, 'log');
		log.anchor.setTo(0.5, 0.5);
		log.kolSize = 26;
		log.animations.add('idle', null, 8);
		log.play('idle', null, true);
		log.si = si;
		si += 2;
		log.yo = log.y;
		logs.push(log);
	}
	world.xit = world.game.add.sprite(ldat.xit.x, ldat.xit.y, 'busStop');
	world.xit.kolSize = 20;
	world.xit.l = world.xit.x - world.xit.kolSize;
	world.xit.r = world.xit.x + world.xit.kolSize;
	world.xit.t = world.xit.y - world.xit.kolSize;
	world.xit.b = world.xit.y + world.xit.kolSize;
	world.xit.anchor.setTo(0.5, 1);
	world.xit.sendToBack();
	sprt.position.setTo(ldat.sprt.x, ldat.sprt.y);
	sprt.scale.x *= ldat.sprt.xx;
	world.game.add.sprite(ldat.grfx.x, ldat.grfx.y, ldat.grfx.txt);
	if (ldat.lbg) {
		var lbgrx = world.game.add.sprite(ldat.lbg.x, ldat.lbg.y, ldat.lbg.txt);
		lbgrx.sendToBack();
	}
	iniPause();
	game.world.setBounds(-99999, -99999, 9999999, 9999999);
	world.limB = 9999;
	world.yEnd = ldat.yEnd;
	iniBG();
	tuts = [];
	for (var i = 0; i < ldat.tuts.length; i++) {
		var ob = ldat.tuts[i];
		var b = {};
		b.nr = ob.nr;
		b.l = ob.x;
		b.r = ob.right;
		b.t = ob.y;
		b.b = ob.bottom;
		tuts.push(b);
	}
}

function addClock() {
	clck = game.add.group();
	clck.fixedToCamera = true;
	clck.cameraOffset.setTo(game.camera.width / 2, game.camera.height - 40);
	clck.clock1 = clck.create(0, 0, 'clock1');
	clck.clock1.anchor.setTo(0.5);
	clck.clockBG = clck.create(0, 0, 'clockBG');
	clck.clockBG.anchor.setTo(0.5);
}

function clockCode() {
	if (!clck.visible) {
		return;
	}
	tim += 1 / 60 * 4.5;
	var tAngle = tim;
	clck.clock1.angle = tAngle;
	if (tAngle > 180) {
		clck.clockBG.frame = 1;
		if (tAngle > 360) {
			clck.clock1.angle = 0;
			levl = -9;
			world.doneCT = 999;
		}
	}
}

function addGamepad() {
	if (game.device.desktop) {
		return;
	}
	gamePad = game.add.group();
	gamePad.fixedToCamera = true;
	gamePad.btn = [];
	gamePad.aL = gamePad.create(0, 0, 'brArwLeft');
	gamePad.aL.inputEnabled = true;
	gamePad.aL.anchor.setTo(0, 1);
	gamePad.aR = gamePad.create(0, 0, 'brArwRight');
	gamePad.aR.inputEnabled = true;
	gamePad.aR.anchor.setTo(-1, 1);
	gamePad.aU = gamePad.create(screenWidth, screenHeight, 'brArwUp');
	gamePad.aU.anchor.setTo(1, 1);
	gamePad.aU.inputEnabled = true;
	gamePad.aL.x = 0;
	gamePad.aR.x = 0;
	resetGamePad();
}

function hideGamePad() {
	if (gamePad) {
		gamePad.visible = false;
	}
}

function resetGamePad() {
	if (gamePad) {
		gamePad.aL.y = screenHeight - 4;
		gamePad.aR.y = screenHeight - 4;
		gamePad.aU.y = screenHeight - 4;
	}
	if (clck) {
		clck.cameraOffset.setTo(game.camera.width / 2, game.camera.height - 40);
	}
	if (p && p.bg) {
		p.bg.height = game.camera.height + 10;
	}
	if (game.btnHome) {
		game.btnHome.y = game.camera.height / 2;
		game.btnMu.y = game.camera.height / 2;
		game.btnFX.y = game.camera.height / 2;
	}
}

function iniPause() {
	p = world.game.add.sprite(screenWidth, 0, 'btnSettings');
	p.anchor.setTo(1, 0);
	p.fixedToCamera = true;
	p.inputEnabled = true;
	p.events.onInputDown.add(pauseCode, world);
	p.pop = game.add.group();
	p.pop.visible = false;
	p.pop.fixedToCamera = true;
	p.btn = [];
	p.bg = p.pop.create(0, 0, 'black');
	p.bg.alpha = 0.66;
	p.bg.width = game.camera.width;
	p.bg.height = game.camera.height + 10;
	game.btnHome = addButtons('btnHome', 0);
	game.btnMu = addButtons('btnMu', -120);
	game.btnFX = addButtons('btnFX', 120);
	setMuFXBtns();
}

function addButtons(nam, xOff) {
	var b = p.pop.create(game.camera.width / 2 + xOff, game.camera.height / 2, nam);
	b.anchor.setTo(0.5, 0.5);
	b.inputEnabled = true;
	p.btn.push(b);
	return b;
}

function setMuFXBtns() {
	if (!game.btnMu) {
		return;
	}
	if (game.muteMu) {
		game.btnMu.frame = 0;
	} else {
		game.btnMu.frame = 1;
	}
	if (game.muteFX) {
		game.btnFX.frame = 0;
	} else {
		game.btnFX.frame = 1;
	}
}

function pauseCode() {
	muPause();
	clickSound();
	p.pop.visible = true;
	game.world.bringToTop(p.pop);
	game.world.bringToTop(p);
	p.frame = 1;
	game.paused = true;
}

function txtCode(txt) {
	for (var i = 0; i < txt.length; i++) {
		var ob = txt[i];
		var t = world.game.add.sprite(ob.x, ob.y, ob.t);
		t.anchor.setTo(0, 1);
		if (ob.w) {
			t.width = ob.w;
			t.height = ob.h;
		}
		if (ob.flip) {
			t.width = -t.width;
		}
		if (ob.rot) {
			t.angle = ob.rot;
		}
	}
}

function iniBG() {
	bmd = game.make.bitmapData(100, 500);
	bmd.copy('bg0');
	bmd.update();
	bmd.shiftHSL(Math.random() * 1 - 5, -0.3, -0.3);
	world.bg0 = game.add.sprite(0, 0, bmd);
	world.bg0.width = game.camera.width;
	world.bg0.height = game.camera.height;
	world.bg0.fixedToCamera = true;
	world.bg = game.add.tileSprite(0, 0, game.camera.width, game.camera.height, 'bg1');
	world.bg.fixedToCamera = true;
	world.bg.xx = Math.random() * 4 - 2;
	world.bg.yy = Math.random() * 4 - 2;
	world.bg.sendToBack();
	world.bg0.sendToBack();
}

function cloudCode() {
	for (var i = 0; i < clouds.length; i++) {
		var ob = clouds[i];
		if (!ob.fall) {
			continue;
		}
		if (ob.cloudCT > 0) {
			ob.yy = 1;
			ob.cloudCT--;
			if (ob.cloudCT <= 0) {
				plats.splice(plats.indexOf(ob), 1);
			}
			continue;
		}
		ob.y += ob.yy;
		ob.yy += 0.8;
		ob.r = ob.right;
		ob.l = ob.left;
		ob.b = ob.bottom;
		ob.t = ob.top;
		if (ob.yy > 5) {
			ob.alpha -= 0.08;
		}
		if (ob.alpha <= 0) {
			clouds.splice(i, 1);
			i--;
			ob.destroy();
		}
	}
}

function laserCode() {
	for (var i = 0; i < lasers.length; i++) {
		var b = lasers[i];
		laserMove(b);
		if (b.angle == 0) {
			limitLaserDown(b);
		}
		if (b.angle == -90) {
			limitLaserRight(b);
		}
		if (b.ctMax) {
			b.ct++;
			if (b.ct < b.ctMid) {
				b.ray.off = false;
				b.ray.visible = true;
				b.ani.visible = true;
			} else {
				b.ray.off = true;
				b.ray.visible = false;
				b.ani.visible = false;
			}
			if (b.ct > b.ctMax) {
				b.ct = 0;
			}
		}
	}
}

function laserMove(b) {
	if (!b.spd) {
		return;
	}
	b.x += b.spd;
	for (var ii = 0; ii < plats.length; ii++) {
		p = plats[ii];
		var bTest = {
			l: b.x - 7,
			r: b.x + 7,
			t: b.y - 1,
			b: b.y
		};
		if (hitTestAB(bTest, p)) {
			b.spd *= -1;
		}
	}
}

function limitLaserDown(b) {
	b.l = b.x - 4;
	b.r = b.x + 4;
	b.t = b.y;
	b.ray.height = 400;
	b.b = b.y + b.ray.height;
	for (var ii = 0; ii < plats.length; ii++) {
		p = plats[ii];
		if (hitTestAB(b, p)) {
			b.ray.height = p.top - b.y;
			b.ani.y = b.ray.height;
			b.b = b.y + b.ray.height;
		}
	}
}

function limitLaserRight(b) {
	b.t = b.y - 4;
	b.b = b.y + 4;
	b.l = b.x;
	b.ray.height = 400;
	b.r = b.x + b.ray.height;
	for (var ii = 0; ii < plats.length; ii++) {
		p = plats[ii];
		if (hitTestAB(b, p)) {
			b.ray.height = p.left - b.x;
			b.ani.y = b.ray.height;
			b.r = b.x + b.ray.height;
		}
	}
}

function hitTestAB(a, b) {
	if (a.l < b.right && a.r > b.left && a.t < b.bottom && a.b > b.top) {
		return true;
	}
	return false;
}

function gravCode() {
	if (sprt.y > world.yEnd) {
		hideGamePad();
		removeSettingsButton();
		if (!sprt.dd) {
			playAaa();
			sprt.dd = true;
			sprt.rot = 0;
		}
		if (sprt.yy > 10) {
			sprt.yy = 10;
		}
		sprt.xx = 0;
		sprt.noControl = true;
		sprt.rot += 0.1 * sprt.scale.x;
		sprt.angle += Math.sin(sprt.rot) * 20;
	}
	sprt.yy += 0.6;
	sprt.position.y += sprt.yy;
	if (sprt.dd) {
		return;
	}
	var newYY = sprt.yy;
	var newY = sprt.y;
	var delPlat = [];
	for (var i = 0; i < plats.length; i++) {
		var p = plats[i];
		if (sprtHitTest(p)) {
			if (sprt.yy >= 0) {
				if (sprt.y - sprt.yy - 5 > p.top) {
					continue;
				}
				if (p.top < newY) {
					newY = p.top;
				}
				sprt.ju = false;
				newYY = 0;
				if (p.del && sprt.yy >= 11) {
					delPlat.push(p);
					continue;
				}
				if (sprt.yy > 3) {
					world.q = sprt.yy * 1.5;
					sfx.fxLand.volume = sprt.yy / 20;
					fxPlay(sfx.fxLand);
					if (sprt.yy > 8) {
						sprt.land = true;
					}
				}
				if (p.cloudCT) {
					p.fall = true;
				}
			}
			if (sprt.yy < 0 && !p.semi) {
				sprt.y = p.bottom + sprt.kolH;
				newY = sprt.y;
				sprt.ju = false;
				newYY = 0;
			}
		}
	}
	sprt.y = newY;
	if (delPlat.length > 0) {
		sfx.fxLand.volume = 0;
		newYY = -8;
		sprt.ju = true;
		sprt.land = null;
		fxPlay(sfx.fxsplatterBrick);
		while (delPlat.length > 0) {
			var dp = delPlat.pop();
			addSplatterBrick(dp);
			plats.splice(plats.indexOf(dp), 1);
			dp.destroy();
		}
	}
	if (sprt.land) {
		var cloudAni = world.game.add.sprite(sprt.x, sprt.y, 'cloudAni');
		cloudAni.anchor.setTo(0.5, 1);
		cloudAni.animations.add('idle', null, 16);
		cloudAni.play('idle', null, false, true);
		game.world.setChildIndex(cloudAni, sprt.z);
		sprt.land = null;
	}
	sprt.yy = newYY;
	if (sprt.yy > 1) {
		sprt.ju = true;
	}
}

function removeSettingsButton() {
	p.visible = false;
}

function addSplatterBrick(ob) {
	for (var i = 0; i < 12; i++) {
		var xx = Math.random() * 10 - 5;
		var yy = Math.random() * -6 - 6;
		var rnd = Math.floor(Math.random() * 2);
		var log = world.game.add.sprite(ob.x + ob.width / 2 + xx, ob.y + ob.height / 2 + yy, ob.splatterBricks[rnd]);
		log.anchor.setTo(0.5, 0.5);
		log.xx = xx;
		log.yy = yy;
		log.rot = Math.random() * 20 - 10;
		pars.push(log);
	}
	game.world.bringToTop(clck);
}

function leftRightCode() {
	if (sprt.dd) {
		return;
	}
	sprt.x += sprt.xx * sprt.spd;
	var newXX = sprt.xx;
	for (var i = 0; i < plats.length; i++) {
		var p = plats[i];
		if (p.semi) {
			continue;
		}
		if (sprtHitTest(p)) {
			if (sprt.xx > 0) {
				newXX = 0;
				sprt.x = p.left - sprt.kolW;
			}
			if (sprt.xx < 0) {
				newXX = 0;
				sprt.x = p.right + sprt.kolW;
			}
		}
	}
	sprt.xx = newXX;
	if (sprt.xx != 0) {
		sprt.scale.x = sprt.zf * sprt.xx;
	}
}

function addParLog(ob, xx, yy) {
	var log = world.game.add.sprite(ob.x + xx, ob.y + yy, 'log');
	log.anchor.setTo(0.5, 0.5);
	log.animations.add('idle', null, 12);
	log.play('idle', null, true);
	log.scale.setTo(-0.5, 0.5);
	if (xx > 0) {
		log.scale.setTo(0.5, 0.5);
	}
	log.xx = xx;
	log.yy = yy;
	log.rot = 0;
	pars.push(log);
}

function preSpikeCode() {
	if (sprt.dd) {
		return;
	}
	sprt.position.y += sprt.yy + 0.6;
	sprt.x += sprt.xx * sprt.spd;
	for (var i = 0; i < spikes.length; i++) {
		var s = spikes[i];
		if (s.ray && s.ray.off) {
			continue;
		}
		if (sprtHitTest(s)) {
			if (!s.dwn && sprt.yy < 0) {
				continue;
			}
			playAaa();
			hideGamePad();
			world.doneCT = 1;
			sprt.bringToTop();
			p.bringToTop();
			game.world.bringToTop(clck);
			sprt.rot = -sprt.xx * 2.5;
			sprt.xx = -sprt.xx * 2;
			sprt.yy = -13;
			sprt.dd = true;
			p.visible = false;
			break;
		}
	}
	sprt.position.y -= sprt.yy + 0.6;
	sprt.x -= sprt.xx * sprt.spd;
}

function playAaa() {
	fxPlay(sfx.aaa[Math.floor(Math.random() * 15)]);
}

function spikeCode() {
	if (sprt.dd) {
		return;
	}
	for (var i = 0; i < spikes.length; i++) {
		var s = spikes[i];
		if (s.ray && s.ray.off) {
			continue;
		}
		if (sprtHitTest(s)) {
			if (!s.ray && !s.dwn && sprt.yy < 0) {
				continue;
			}
			playAaa();
			hideGamePad();
			world.doneCT = 1;
			sprt.bringToTop();
			p.bringToTop();
			game.world.bringToTop(clck);
			sprt.rot = -sprt.xx * 2.5;
			sprt.xx = -sprt.xx * 2;
			sprt.yy = -13;
			sprt.dd = true;
			p.visible = false;
			return;
		}
	}
}

function xitCode() {
	if (sprt.dd || world.doneCT) {
		return;
	}
	if (!sprt.ju && sprtHitTest(world.xit)) {
		if (sprt.x < world.xit.x - 30 || sprt.x > world.xit.x + 10) {
			return;
		}
		levl++;
		hideGamePad();
		callBus();
		sprt.noControl = true;
		sprt.xx = 0;
		world.doneCT = 1;
		p.visible = false;
	}
}

function sprtHitTest(ob) {
	sprt.l = sprt.position.x - sprt.kolW;
	sprt.r = sprt.position.x + sprt.kolW;
	sprt.b = sprt.position.y;
	sprt.t = sprt.position.y - sprt.kolH;
	if (sprt.l < ob.r && sprt.r > ob.l && sprt.t < ob.b && sprt.b > ob.t) {
		return true;
	}
	return false;
}

function controlDown(pointer) {
	if (sprt.gameDone) {
		sprt.gameDone = null;
		game.sound.stopAll();
		if (parent && parent.cmgGameEvent) {
			parent.cmgGameEvent('start');
		}
		levl = 0;
		newState();
		return;
	}
	sprt.keyDown = true;
	if (game.paused && !rotDevice) {
		pauseMenClick(pointer);
	}
}

function pauseMenClick(pointer) {
	if (p.getBounds().contains(pointer.x, pointer.y)) {
		clickSound();
		p.frame = 0;
		game.paused = false;
		muResume();
		p.pop.visible = false;
		sprt.keyDown = null;
		return;
	}
	muteButtons(pointer);
	for (var i = 0; i < p.btn.length; i++) {
		var b = p.btn[i];
		if (b.getBounds().contains(pointer.x, pointer.y)) {
			if (b.key == 'btnHome') {
				clickSound();
				levl = 0;
				newState();
			}
		}
	}
}

function muteButtons(pointer) {
	if (rotDevice) {
		return;
	}
	if (game.btnMu.getBounds().contains(pointer.x, pointer.y)) {
		clickSound();
		if (game.muteMu) {
			game.muteMu = false;
		} else {
			game.muteMu = true;
		}
		mu.mute = game.muteMu;
		setMuFXBtns();
		return;
	}
	if (game.btnFX.getBounds().contains(pointer.x, pointer.y)) {
		clickSound();
		if (game.muteFX) {
			game.muteFX = false;
		} else {
			game.muteFX = true;
		}
		setMuFXBtns();
		return;
	}
}

function controlUp(pointer) {
	sprt.keyDown = null;
}

function pointers2Buttons(pointer) {
	if (!pointer.isDown) {
		return;
	}
	if (gamePad.aL.getBounds().contains(pointer.x, pointer.y)) {
		gamePad.aL.dwn = true;
	}
	if (gamePad.aR.getBounds().contains(pointer.x, pointer.y)) {
		gamePad.aR.dwn = true;
	}
	if (gamePad.aU.getBounds().contains(pointer.x, pointer.y)) {
		spaceKey.alt = true;
	}
}

function controls() {
	if (sprt.noControl) {
		return;
	}
	sprt.xx = 0;
	spaceKey.alt = false;
	if (gamePad) {
		gamePad.aL.dwn = false;
		gamePad.aR.dwn = false;
		pointers2Buttons(game.input.mousePointer);
		pointers2Buttons(game.input.pointer1);
		pointers2Buttons(game.input.pointer2);
		if (gamePad.aL.dwn) {
			sprt.xx = -1;
		}
		if (gamePad.aR.dwn) {
			sprt.xx = 1;
		}
	}
	if (cursors.left.isDown || wasd.left.isDown) {
		sprt.xx = -1;
	}
	if (cursors.right.isDown || wasd.right.isDown) {
		sprt.xx = 1;
	}
	if (cursors.up.isDown || wasd.up.isDown) {
		spaceKey.alt = true;
	}
	if (spaceKey.isDown || spaceKey.alt) {
		if (!spaceKey.hold) {
			sprt.keyDown = true;
		}
		spaceKey.hold = true;
	} else {
		spaceKey.hold = null;
		sprt.keyDown = null;
	}
	if (sprt.keyDown && !sprt.ju) {
		fxPlay(sfx.fxJump);
		fxPlay(sfx.fxHup);
		sprt.yy = sprt.jh;
		sprt.ju = true;
		sprt.keyDown = null;
	}
}

function saniCode() {
	var sani = "idle";
	if (sprt.xx != 0) {
		sani = 'run';
	}
	if (sprt.ju) {
		sani = "jump";
		if (sprt.yy > 0) {
			sani = "fall";
		}
	}
	if (sprt.dd) {
		sprt.angle += 3 * -sprt.scale.x;
		sani = "dd";
	}
	if (sprt.animations.name != sani) {
		sprt.play(sani, null, true);
	}
}

function parCode() {
	for (var i = 0; i < pars.length; i++) {
		var p = pars[i];
		p.angle += p.rot;
		p.x += p.xx;
		p.y += p.yy;
		p.yy += 0.6;
		p.xx = p.xx * 0.98;
		if (p.y > world.limB + 200) {
			pars.splice(i, 1);
			if (p != sprt) {
				p.destroy();
			}
			i--;
		}
	}
}

function bgCode() {
	world.bg0.height = screenHeight;
	world.bg.height = screenHeight;
	world.bg.tilePosition.x += world.bg.xx;
	world.bg.tilePosition.y += world.bg.yy;
}

function quakeCode() {
	if (world.q) {
		game.camera.x += Math.random() * world.q - world.q / 2;
		game.camera.y += Math.random() * world.q - world.q / 2;
		world.q -= 1;
		if (world.q < 0) {
			world.q = null;
		}
	}
}