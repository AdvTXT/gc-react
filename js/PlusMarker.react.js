var PlusMarker = React.createClass({displayName: "PlusMarker",

    propTypes: {
        plus: React.PropTypes.number,
        x: React.PropTypes.number,
        y: React.PropTypes.number
    },

    render: function() {
        return (
            React.createElement("div", {
                className: "plus-marker", 
                style: {
                    left: this.props.x,
                    top: this.props.y,
                }
            }, 
                React.createElement("div", {className: "movable"}, 
                    "+", Math.floor(this.props.plus)
                )
            )
        );
    },

});
