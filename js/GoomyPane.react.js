var GoomyPane = React.createClass({displayName: "GoomyPane",

    propTypes: {
        goomies: React.PropTypes.number,
        gps: React.PropTypes.number,
        gpc: React.PropTypes.number,
		level: React.PropTypes.number,
        onClick: React.PropTypes.func,
        sendMessage: React.PropTypes.func,
    },

    getInitialState: function() {
        return {
            plus_markers: [],
            plus_marker_id: 0,
        };
    },

    handleAdd: function(x, y) {
        var newItems = this.state.plus_markers.concat({
            plus: this.props.gpc,
            id: this.state.plus_marker_id,
            x: x,
            y: y
        });
        this.setState({
            plus_markers: newItems,
            plus_marker_id: this.state.plus_marker_id + 1
        }, function(){
            // remove it immediately after it was added
            this.handleRemove(0);
        });
    },

    handleRemove: function(i) {
        var newItems = this.state.plus_markers;
        newItems.splice(i, 1);
        this.setState({plus_markers: newItems});
    },

    _onClick: function(x, y) {
        this.handleAdd(x, y);
        this.props.onUpdate({type: "click_on_goomy"});
    },

    render: function() {
        var plus_markers = this.state.plus_markers.map(function(marker, i){
            return (
                React.createElement(PlusMarker, {
                    key: marker.id, 
                    plus: marker.plus, 
                    x: marker.x, y: marker.y}
                )
            );
        }, this);

        return (
            React.createElement("div", {className: "goomy-pane game-pane"}, 
                React.createElement(GreatGoomy, {
                    onClick: this._onClick}
                ), 
                React.createElement(ReactCSSTransitionGroup, {
                    className: "plus-marker-container", 
                    component: "div", 
                    transitionName: "plusMarker", 
                    transitionEnter: false}, 
                    plus_markers
                ), 
                React.createElement(GoomyIndicator, {
                    goomies: this.props.goomies, 
                    gps: this.props.gps}
                ), 
				React.createElement(GoomyLevelIndicator, {
					level: this.props.level}
				)
            )
        );
    },

});
