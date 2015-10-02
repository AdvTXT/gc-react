var StatsTable = React.createClass({displayName: "StatsTable",

    propTypes: {
        rows: React.PropTypes.array,
    },

    render: function() {
		var rows = [];
		for (var a = 0; a < this.props.rows.length; ++a) {
			var row = (
				React.createElement("tr", {key: a}, 
					React.createElement("td", {className: "stat-table-category"}, this.props.rows[a].heading), 
					React.createElement("td", {className: "stat-table-value"}, this.props.rows[a].value)
				)
			);
			rows.push(row);
		}
        return (
            React.createElement("table", {className: "stats-table"}, 
				rows
			)
        );
    },

});
