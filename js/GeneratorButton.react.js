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
		var disp_gps = (gps < 1000000) ?
			gps.toLocaleString(lang, {minimumFractionDigits: 1}) :
			reprnum(gps, "long");

		var details = React.createElement("div", {className: "details"}, 
			React.createElement("p", null, "You own ", React.createElement("b", null, this.props.generator.count), " of this generator "), 
	        React.createElement("p", null, "Each one produces ", React.createElement("b", null, disp_gps), " GpS "), 
	        React.createElement("p", null, "To buy one costs ", React.createElement("b", null, reprnum(this.props.generator.getCurrentCost(), "long")), " Goomies "), 
			React.createElement("button", {onClick: this.buyItem}, "Buy"), 
			React.createElement("button", {onClick: this.sellItem}, "Sell"), 
			React.createElement("hr", null), 
			React.createElement("p", null, "Level ", React.createElement("b", null, this.props.generator.level), 
				React.createElement("button", {onClick: this.levelUpItem}, "Level up for ", reprnum(this.props.generator.getLevelUpCost(), "short"))
			)
		);

        return (
            React.createElement("div", {className: "generator", onMouseEnter: this.expand, onMouseLeave: this.contract}, 
                this.props.generator.display_name, " — ", this.props.generator.count, 
                details
            )
        );
    },

});
