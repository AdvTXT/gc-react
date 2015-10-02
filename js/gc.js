var basedata = {

    goomies: 0,
	total_goomies: 0,

    gpc: 1.0,
    gps: 0,

	playing: false,
	playtime: 0,

	goomy_level: 1,
	goomy_level_cap: 20,
	goomy_exp: 0,

    clickOnGoomy: function() {
		this.playing = true;
        this.goomies += this.gpc;
		this.total_goomies += this.gpc;
		this.gainEXP(this.goomy_level);
    },

    // update actual data.
    update: function(delta_ms) {
		if (!this.playing) return;
		this.playtime += delta_ms;
		this.gainEXP(delta_ms * generators_by_ID["cursor"].count * 0.1);

		var delta = this.gps * delta_ms / 1000.0;

        this.goomies += delta;
		this.total_goomies += delta;
    },

    recalcGPS: function() {
        var gps = 0;
        for (var a = 0; a < generators.length; ++a) {
            gps += generators[a].getGPS() * generators[a].count;
        }
        this.gps = gps;
    },

	gainEXP: function() {
		if (this.goomy_level >= this.goomy_level_cap) return;
		this.goomy_exp += this.goomy_level;
	}

};

function onUpdate(message) {
    if (message.type == "click_on_goomy") {
        basedata.clickOnGoomy();
    } else if (message.type == "buy_generator") {
        // look for generator count
        var result = generators_by_ID[message.generatorName].buy(message.count);
        if (result) {
            basedata.recalcGPS();
        }
    } else if (message.type == "sell_generator") {
        // look for generator count
        var result = generators_by_ID[message.generatorName].sell(message.count);
        if (result) {
            basedata.recalcGPS();
        }
	} else if (message.type == "levelup_generator") {
		// look for generator count
		var result = generators_by_ID[message.generatorName].levelUp(message.count);
		if (result) {
			basedata.recalcGPS();
		}
    } else if (message.type == "buy_item") {
        // branch by item type

    }
}



// header declarations for the React files.

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
