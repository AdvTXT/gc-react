var GoomyClickerApp = React.createClass({displayName: "GoomyClickerApp",

    propTypes: {
        data: React.PropTypes.object,
        generators: React.PropTypes.array,
        onUpdate: React.PropTypes.func,
    },

    render: function() {

		var goomy_pane = React.createElement(GoomyPane, {
			goomies: this.props.data["goomies"], 
			gps: this.props.data["gps"], 
			gpc: this.props.data["gpc"], 
			level: this.props.data["goomy_level"], 
			onUpdate: this.props.onUpdate}
		);

		var generator_pane = React.createElement(GeneratorPane, {
			generators: this.props.generators, 
			onUpdate: this.props.onUpdate}
		);

		var stats_pane = React.createElement(StatsPane, {
			data: this.props.data}
		)

		if(window.innerWidth >= 960){
			return (
				React.createElement("div", {id: "main_pane"}, 
					stats_pane, 
					goomy_pane, 
					generator_pane
				)
			);
		} else {
			return (
				React.createElement("div", {id: "main_pane"}, 
					goomy_pane, 
					generator_pane, 
					stats_pane
				)
			);
		}



    },

});
