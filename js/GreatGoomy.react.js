var GreatGoomy = React.createClass({displayName: "GreatGoomy",

    propTypes: {
        onClick: React.PropTypes.func,
    },

    _onMouseDown: function(e) {
		e.preventDefault(); // stop right clicks from accidentally opening up the menu
        var rect = this.getDOMNode().getBoundingClientRect();
        var x = e.clientX - rect.left, y = e.clientY - rect.top;
        var random_r = Math.pow(Math.random(), 2) * 50, random_theta = Math.random() * Math.PI * 2;
        this.setState({mouseDown: true}, function() {
            this.props.onClick(x + random_r * Math.cos(random_theta), y + random_r * Math.sin(random_theta));
        });
    },

    _onMouseUp: function() {
        this.setState({mouseDown: false});
    },

    _onMouseLeave: function() {
        this.setState({mouseDown: false});
    },

    getInitialState: function() {
        return {
            mouseDown: false,
        };
    },

    render: function() {
        return (
            React.createElement("img", {
                src: "img/great_goomy.png", 
                className: makeClass({
                    "great-goomy": true,
                    "pressed": this.state.mouseDown
                }), 
                onMouseDown: this._onMouseDown, 
                onMouseUp: this._onMouseUp, 
                onMouseLeave: this._onMouseLeave}
            )
        );
    },

});
