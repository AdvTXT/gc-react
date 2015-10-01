var GeneratorButton = React.createClass({

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

		var details = <div className="details">
			<p>You own <b>{this.props.generator.count}</b> of this generator </p>
	        <p>Each one produces <b>{disp_gps}</b> GpS </p>
	        <p>To buy one costs <b>{reprnum(this.props.generator.getCurrentCost(), "long")}</b> Goomies </p>
			<button onClick={this.buyItem}>Buy</button>
			<button onClick={this.sellItem}>Sell</button>
			<hr />
			<p>Level <b>{this.props.generator.level}</b>
				<button onClick={this.levelUpItem}>Level up for {reprnum(this.props.generator.getLevelUpCost(), "short")}</button>
			</p>
		</div>;

        return (
            <div className="generator" onMouseEnter={this.expand} onMouseLeave={this.contract}>
                {this.props.generator.display_name}&nbsp;&mdash;&nbsp;{this.props.generator.count}
                {details}
            </div>
        );
    },

});
