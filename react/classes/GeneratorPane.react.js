var GeneratorPane = React.createClass({

    propTypes: {
        generators: React.PropTypes.array,
        onUpdate: React.PropTypes.func,
    },

    render: function() {
        var generators = [];
        for (var a = 0; a < this.props.generators.length; ++a) {
            generators.push(
                <GeneratorButton
                    key = {this.props.generators[a].key_name}
                    generator = {this.props.generators[a]}
                    onUpdate = {this.props.onUpdate}
                />
            );
        }
        return (
            <div id="main_pane">
                {generators}
            </div>
        );
    },

});
