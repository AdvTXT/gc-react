function formatTimeLong(ms) {

	var opt_days = "";
	if (ms > 86400000) {
		opt_days = Math.floor(ms / 86400000) + "/";
	}

	var hours = s.pad("" + Math.floor((ms % 86400000) / 3600000), 2, "0");
	var minutes = s.pad("" + Math.floor((ms % 3600000) / 60000), 2, "0");
	var seconds = s.pad("" + Math.floor((ms % 60000) / 1000), 2, "0");
	var cs = s.pad("" + Math.floor((ms % 1000) / 10), 2, "0");

	return (<span>
		{opt_days}
		{hours}:
		{minutes}:
		{seconds}
		<span className="small-cs">.{cs}</span>
	</span>);
}

function formatTimeSeconds(ms) {

	var seconds = Math.floor(ms / 1000);
	var cs = Math.floor((ms % 1000) / 10);

	return (<span>
		{seconds}
		<span className="small-cs">.{cs}</span>
	</span>);
}

var StatsPane = React.createClass({

    propTypes: {
        goomies: React.PropTypes.number,
        gps: React.PropTypes.number,
		playtime: React.PropTypes.number,
    },

    render: function() {
        return (
            <div className="stats-pane">
				<h1>Stats</h1>

                <StatsTable
					rows = {[
						{
							heading: "Play Time",
							value: formatTimeLong(this.props.data["playtime"]),
						},
					]}
				/>

				<StatsTable
					rows = {[
						{
							heading: "Goomies",
							value: reprnum(Math.floor(this.props.data["goomies"])),
						},
						{
							heading: "Total Goomies",
							value: reprnum(Math.floor(this.props.data["total_goomies"])),
						},
					]}
				/>
            </div>
        );
    },

});
