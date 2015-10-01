var GoomyClickerApp = React.createClass({

    propTypes: {
        data: React.PropTypes.object,
        generators: React.PropTypes.array,
        onUpdate: React.PropTypes.func,
    },

    render: function() {
        return (
            <div id="main_pane">
                <GoomyPane
                    goomies = {this.props.data["goomies"]}
                    gps = {this.props.data["gps"]}
                    gpc = {this.props.data["gpc"]}
                    onUpdate = {this.props.onUpdate}
                />
                <GeneratorPane
                    generators = {this.props.generators}
                    onUpdate = {this.props.onUpdate}
                />
				<StatsPane
					data = {this.props.data}
				/>
            </div>
        );
    },

});
