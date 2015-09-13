generators_by_ID = {};

function Generator(name, base_cost, base_gps) {

    this.key_name = name;

    this.base_gps = base_gps;
    this.premult_gps = base_gps;
    this.gps = base_gps;

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

    for (var i = 1; i < n; ++i) {
        new_count -= 1;
        total_refund += this.getCost(new_count) * 0.25;
    }

    this.count = new_count;
    basedata.goomies += total_refund;
    return true;
};

Generator.prototype.levelUp = function(n) {
    if (basedata.goomies < this.level_up_cost) {
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
    new Generator("cursor",               20, 0.2),
    new Generator("youngster",           100, 1),
    new Generator("daycare",             600, 5),
    new Generator("reserve",            3000, 20),
    new Generator("farm",              15000, 75),
    new Generator("fountain",          70000, 250),
];
