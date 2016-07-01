var React = require('react');

var buttonStyle = {
    margin: '10px'
}

function LocationSearch(props) {
    return (
        <div style={props.style}>
            <input className="form-control" type="text" placeholder="St George, Utah"/>
            <button className="btn btn-success" style={buttonStyle}>Get Weather</button>
        </div>
    )
}

module.exports = LocationSearch;