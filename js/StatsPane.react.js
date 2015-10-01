function formatTimeLong(ms) {

	var opt_days = "";
	if (ms > 86400000) {
		opt_days = Math.floor(ms / 86400000) + "/";
	}

	var hours = s.pad("" + Math.floor((ms % 86400000) / 3600000), 2, "0");
	var minutes = s.pad("" + Math.floor((ms % 3600000) / 60000), 2, "0");
	var seconds = s.pad("" + Math.floor((ms % 60000) / 1000), 2, "0");
	var cs = s.pad("" + Math.floor((ms % 1000) / 10), 2, "0");

	return (React.createElement("span", null, 
		opt_days, 
		hours, ":", 
		minutes, ":", 
		seconds, 
		React.createElement("span", {className: "small-cs"}, ".", cs)
	));
}

function formatTimeSeconds(ms) {

	var seconds = Math.floor(ms / 1000);
	var cs = Math.floor((ms % 1000) / 10);

	return (React.createElement("span", null, 
		seconds, 
		React.createElement("span", {className: "small-cs"}, ".", cs)
	));
}

var StatsPane = React.createClass({displayName: "StatsPane",

    propTypes: {
        goomies: React.PropTypes.number,
        gps: React.PropTypes.number,
		playtime: React.PropTypes.number,
    },

    render: function() {
        return (
            React.createElement("div", {className: "stats-pane"}, 
				React.createElement("h1", null, "Stats"), 

                React.createElement(StatsTable, {
					rows: [
						{
							heading: "Play Time",
							value: formatTimeLong(this.props.data["playtime"]),
						},
					]}
				), 

				React.createElement(StatsTable, {
					rows: [
						{
							heading: "Goomies:",
							value: reprnum(Math.floor(this.props.data["goomies"])),
						},
						{
							heading: "Total Goomies:",
							value: reprnum(Math.floor(this.props.data["total_goomies"])),
						},
					]}
				)
            )
        );
    },

});
