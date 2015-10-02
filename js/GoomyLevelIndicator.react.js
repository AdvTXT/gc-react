var GoomyLevelIndicator = React.createClass({displayName: "GoomyLevelIndicator",

    propTypes: {
        level: React.PropTypes.number,
    },

    render: function() {
		var gps = this.props.gps;
		var disp_gps = (gps < 1000000) ?
			gps.toLocaleString(lang, {minimumFractionDigits: 1}) :
			reprnum(gps, "long");

        return (
            React.createElement("div", {className: "level-pane"}, 
                "Level ", this.props.level
            )
        );
    },

});
