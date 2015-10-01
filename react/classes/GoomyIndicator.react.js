var GoomyIndicator = React.createClass({

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
            <div className="stats-pane">
                <p className="goomy-count">
					{reprnum(Math.floor(this.props.goomies), "long")}
					<img src="img/favicon.png" />
				</p>
                {disp_gps} Goomies per second
            </div>
        );
    },

});
