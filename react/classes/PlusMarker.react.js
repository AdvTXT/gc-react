var PlusMarker = React.createClass({

    propTypes: {
        plus: React.PropTypes.number,
        x: React.PropTypes.number,
        y: React.PropTypes.number
    },

    render: function() {
        return (
            <div
                className="plus-marker"
                style={{
                    left: this.props.x,
                    top: this.props.y,
                }}
            >
                <div className="movable">
                    +{this.props.plus}
                </div>
            </div>
        );
    },

});
