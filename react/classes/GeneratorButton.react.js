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

	expand: function () {
		this.setState({expanded: true});
	},

	contract: function () {
		this.setState({expanded: false});
	},

    render: function() {
		var details = <div />;
		if (this.state.expanded) {
			details = <div>
				<p>You own <b>{this.props.generator.count}</b> of this generator </p>
                <p>Each one produces <b>{this.props.generator.gps}</b> GpS </p>
                <p>To buy one costs <b>{this.props.generator.getCurrentCost()}</b> Goomies </p>
			</div>;
		}

        return (
            <div className="generator" onMouseEnter={this.expand} onMouseLeave={this.contract}>
                {this.props.generator.key_name}
                <button onClick={this.buyItem}>Buy</button>
                <button onClick={this.sellItem}>Sell</button>
                {details}
            </div>
        );
    },

});
