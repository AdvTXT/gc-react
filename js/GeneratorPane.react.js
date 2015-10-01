var GeneratorPane = React.createClass({displayName: "GeneratorPane",

    propTypes: {
        generators: React.PropTypes.array,
        onUpdate: React.PropTypes.func,
    },

    render: function() {
        var generators = [];
        for (var a = 0; a < this.props.generators.length; ++a) {
            generators.push(
                React.createElement(GeneratorButton, {
                    key: this.props.generators[a].key_name, 
                    generator: this.props.generators[a], 
                    onUpdate: this.props.onUpdate}
                )
            );
        }
        return (
            React.createElement("div", {className: "generator-pane"}, 
                generators
            )
        );
    },

});
