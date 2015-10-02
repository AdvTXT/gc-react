function formatTimeMMSS(seconds) {
	if (seconds >= 3600) return "--:--";

	var minutes = s.pad("" + Math.floor((seconds % 3600) / 60), 2, "0");
	var seconds = s.pad("" + Math.floor(seconds % 60), 2, "0");

	return minutes + ":" + seconds;
}

var GeneratorButton = React.createClass({displayName: "GeneratorButton",

    propTypes: {
        generator: React.PropTypes.object,
        onUpdate: React.PropTypes.func,
		expanded: React.PropTypes.bool,
    },

	getInitialState: function() { return {
		expanded: false
	};},

    buyItem: function() {
        this.props.onUpdate({
            type: "buy_generator",
            generatorName: this.props.generator.key_name,
            count: 1
        });
    },

    sellItem: function() {
        this.props.onUpdate({
            type: "sell_generator",
            generatorName: this.props.generator.key_name,
            count: 1
        });
    },

	levelUpItem: function() {
        this.props.onUpdate({
            type: "levelup_generator",
            generatorName: this.props.generator.key_name,
            count: 1
        });
    },

    render: function() {
		var gps = this.props.generator.getGPS();

		var unbuyable = this.props.generator.getCurrentCost() > basedata.goomies;
		var timeleft = null;
		if (unbuyable) {
			timeleft = (
				React.createElement("span", null, " ", "(", 
					formatTimeMMSS(
						Math.ceil((this.props.generator.getCurrentCost() - basedata.goomies) / basedata.gps)
					), 
				")")
			);
		}

		var disp_gps = (gps < 1000000) ?
			gps.toLocaleString(lang, {minimumFractionDigits: 1}) :
			reprnum(gps, "long");

		var details = React.createElement("div", {className: "details"}, 
			React.createElement("p", null, "You own ", React.createElement("b", null, this.props.generator.count), " of this generator "), 
	        React.createElement("p", null, "Each one produces ", React.createElement("b", null, disp_gps), " GpS "), 
	        React.createElement("p", null, "Cost:", " ", 
				React.createElement("span", {className: makeClass({
					unbuyable: unbuyable
				})}, 
					React.createElement("b", null, reprnum(this.props.generator.getCurrentCost(), "long")), " Goomies"
				), 
				timeleft
			), 
			React.createElement("p", null, 
				React.createElement("button", {className: "row-button", onClick: this.buyItem}, "Buy"), 
				React.createElement("button", {className: "row-button", onClick: this.sellItem}, "Sell")
			), 
			React.createElement("hr", null), 
			React.createElement("p", null, 
				"Level ", React.createElement("b", null, this.props.generator.level), 
				React.createElement("button", {onClick: this.levelUpItem}, 
					"Level up for ", reprnum(this.props.generator.getLevelUpCost(), "short")
				)
			)
		);

		var progress_bar = React.createElement("div", {className: "progress-bar", style: {
			width: Math.max(0, 100 - (basedata.goomies / this.props.generator.getCurrentCost() * 100)) + "%"
		}})

        return (
            React.createElement("div", {className: "generator"}, 
                React.createElement("span", {style: {zIndex: 10}, className: makeClass({
					disabled: unbuyable
				})}, 
					this.props.generator.display_name, 
					" — ", 
					this.props.generator.count
				), 
                details, 
				progress_bar
            )
        );
    },

});
