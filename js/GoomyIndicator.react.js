var GoomyIndicator = React.createClass({displayName: "GoomyIndicator",

    propTypes: {
        goomies: React.PropTypes.number,
        gps: React.PropTypes.number,
    },

    render: function() {
		var gps = this.props.gps;
		var disp_gps = (gps < 1000000) ?
			gps.toLocaleString(lang, {minimumFractionDigits: 1}) :
			reprnum(gps, "long");

        return (
            React.createElement("div", {className: "indicator-pane"}, 
                React.createElement("p", {className: "goomy-count"}, 
					reprnum(Math.floor(this.props.goomies), "long"), 
					React.createElement("img", {src: "img/favicon.png"})
				), 
                disp_gps, " Goomies per second"
            )
        );
    },

});
