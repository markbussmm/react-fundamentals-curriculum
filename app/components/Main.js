var React = require('react');

var Main = React.createClass({
    render: function() {
        return (
            this.props.children
        )
    }
});

module.exports = Main;