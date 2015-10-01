var GoomyIndicator = React.createClass({

    propTypes: {
        goomies: React.PropTypes.number,
        gps: React.PropTypes.number,
    },

    render: function() {
        return (
            <div className="stats-pane">
                <p className="goomy-count">{reprnum(Math.floor(this.props.goomies))} Goomies</p>
                {this.props.gps} Goomies per second
            </div>
        );
    },

});
