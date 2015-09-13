var basedata = {

    goomies: 0.0,
    gps: 75,
    gpc: 704.0,

    clickOnGoomy: function() {
        this.goomies += this.gpc;
    },

    // update actual data.
    update: function(delta_ms) {
        this.goomies += this.gps * delta_ms / 1000.0;
    },

    recalcGPS: function() {
        var gps = 75;
        for (var a = 0; a < generators.length; ++a) {
            gps += generators[a].gps * generators[a].count;
        }
        this.gps = gps;
    },

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
    } else if (message.type == "buy_item") {
        // branch by item type


    }
}



// header declarations for the React files.

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
