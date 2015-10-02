generators_by_ID = {};

function Generator(name, display_name, base_cost, base_gps) {

    this.key_name = name;
	this.display_name = display_name;

    this.base_gps = base_gps;

    this.level = 1;
    this.level_mult = 1.0;

    this.base_cost = base_cost;

    this.count = 0;

    generators_by_ID[name] = this;

};

Generator.prototype.getCost = function(n) {
    return Math.floor(this.base_cost * Math.pow(n + 10, Math.log(n + 10) / Math.log(10)) / 10);
};

Generator.prototype.getCurrentCost = function() {
    return this.getCost(this.count);
};

Generator.prototype.getGPS = function() {
	return this.base_gps * Math.pow(1.2, this.level - 1);
};

Generator.prototype.getLevelUpCost = function() {
    return Math.floor(this.base_cost * 100 * Math.pow(1.5, this.level - 1));
};

Generator.prototype.buy = function(n) {
    var total_cost = 0;
    var new_count = this.count;

    for (var i = 0; i < n; ++i) {
        total_cost += this.getCost(new_count);
        new_count += 1;
    }

    if (total_cost > basedata.goomies) {
        return false;
    } else {
        this.count = new_count;
        basedata.goomies -= total_cost;
        return true;
    }
};

Generator.prototype.sell = function(n) {
    if (n > this.count) {
        return false;
    }

    var total_refund = 0;
    var new_count = this.count;

    for (var i = 0; i < n; ++i) {
        new_count -= 1;
        total_refund += this.getCost(new_count) * 0.25;
		// we're pretty stingy, you only get 25% of the purchase price back.
    }

    this.count = new_count;
    basedata.goomies += total_refund;
    return true;
};

Generator.prototype.levelUp = function(n) {
    if (basedata.goomies < this.getLevelUpCost()) {
        return false;
    }
    basedata.goomies -= this.getLevelUpCost();
    this.level += 1;
    this.level_mult = this.level;
    return true;
};

Generator.prototype.setBaseCost = function(cost) {
    this.base_cost = cost;
};

generators = [
    new Generator("cursor",     "Cursor",                    20, 0.2),  // 100 seconds
    new Generator("youngster",  "Youngster",                100, 1),  // 100 seconds
    new Generator("daycare",    "Daycare",                  600, 5),  // 120 seconds
    new Generator("reserve",    "Reserve",                 3000, 20),  // 150 seconds
    new Generator("farm",       "Farm",                   15000, 75),  // 200 seconds
    new Generator("fountain",   "Goopy Fountain",         70000, 250),  // 280 seconds
    new Generator("trench",     "Oceanic Trench",        400000, 1000),  // 400 seconds
    new Generator("arceus",     "Enslaved Arceus",      2400000, 4000),  // 600 seconds
    new Generator("church",     "Church of Goomy",     15000000, 15000),  // 1000 seconds
    new Generator("cloninglab", "Cloning Lab",        200000000, 90000),  // 2222 seconds
    new Generator("rngabuser",  "RNG Abuser",        4294967296, 1048576),  // 4096 seconds
    new Generator("collider",   "Photon Collider",    3.0000e12, 299792458),  // ~10000 seconds
];
