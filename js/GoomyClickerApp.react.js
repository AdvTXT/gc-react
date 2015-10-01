var GoomyClickerApp = React.createClass({displayName: "GoomyClickerApp",

    propTypes: {
        data: React.PropTypes.object,
        generators: React.PropTypes.array,
        onUpdate: React.PropTypes.func,
    },

    render: function() {
        return (
            React.createElement("div", {id: "main_pane"}, 
                React.createElement(GoomyPane, {
                    goomies: this.props.data["goomies"], 
                    gps: this.props.data["gps"], 
                    gpc: this.props.data["gpc"], 
                    onUpdate: this.props.onUpdate}
                ), 
                React.createElement(GeneratorPane, {
                    generators: this.props.generators, 
                    onUpdate: this.props.onUpdate}
                ), 
				React.createElement(StatsPane, {
					data: this.props.data}
				)
            )
        );
    },

});
