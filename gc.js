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

};


function onUpdate(message) {
    if (message.type == "click_on_goomy") {
        basedata.clickOnGoomy();
    }
}





// header declarations for the React files.

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
