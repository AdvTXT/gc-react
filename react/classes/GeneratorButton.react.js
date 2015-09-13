var GeneratorButton = React.createClass({

    propTypes: {
        generator: React.PropTypes.object,
        onUpdate: React.PropTypes.func,
    },

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

    render: function() {
        return (
            <div className="generator">
                {this.props.generator.key_name}
                <button onClick={this.buyItem}>Buy</button>
                <button onClick={this.sellItem}>Sell</button>
                <p>You own <b>{this.props.generator.count}</b> of this generator </p>
                <p>Each one produces <b>{this.props.generator.gps}</b> GpS </p>
                <p>To buy one costs <b>{this.props.generator.getCurrentCost()}</b> Goomies </p>
            </div>
        );
    },

});
