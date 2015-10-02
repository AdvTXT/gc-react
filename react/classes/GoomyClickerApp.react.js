var GoomyClickerApp = React.createClass({

    propTypes: {
        data: React.PropTypes.object,
        generators: React.PropTypes.array,
        onUpdate: React.PropTypes.func,
    },

    render: function() {

		var goomy_pane = <GoomyPane
			goomies = {this.props.data["goomies"]}
			gps = {this.props.data["gps"]}
			gpc = {this.props.data["gpc"]}
			level = {this.props.data["goomy_level"]}
			onUpdate = {this.props.onUpdate}
		/>;

		var generator_pane = <GeneratorPane
			generators = {this.props.generators}
			onUpdate = {this.props.onUpdate}
		/>;

		var stats_pane = <StatsPane
			data = {this.props.data}
		/>

		if(window.innerWidth >= 960){
			return (
				<div id="main_pane">
					{stats_pane}
					{goomy_pane}
					{generator_pane}
				</div>
			);
		} else {
			return (
				<div id="main_pane">
					{goomy_pane}
					{generator_pane}
					{stats_pane}
				</div>
			);
		}



    },

});
