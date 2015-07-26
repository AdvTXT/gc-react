var GoomyClickerApp = React.createClass({

    propTypes: {
        data: React.PropTypes.object,
        onUpdate: React.PropTypes.func,
    },

    sendMessage: function(message) {
        this.props.onUpdate(message);
    },

    render: function() {
        return (
            <div>
                <GoomyPane
                    goomies = {this.props.data["goomies"]}
                    gps = {this.props.data["gps"]}
                    gpc = {this.props.data["gpc"]}
                    sendMessage = {this.sendMessage}
                />
            </div>
        );
    },

});
