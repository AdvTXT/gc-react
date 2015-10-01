var StatsTable = React.createClass({

    propTypes: {
        rows: React.PropTypes.array,
    },

    render: function() {
		var rows = [];
		for (var a = 0; a < this.props.rows.length; ++a) {
			var row = (
				<tr key={a}>
					<td className="stat-table-category">{this.props.rows[a].heading}</td>
					<td className="stat-table-value">{this.props.rows[a].value}</td>
				</tr>
			);
			rows.push(row);
		}
        return (
            <div className="stats-pane">
                <table className="stats-table">
					{rows}
				</table>
            </div>
        );
    },

});
