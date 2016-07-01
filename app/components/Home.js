var React = require('react');
var LocationSearch = require('./LocationSearch');

var homeStyles = {
    bgImage: {
        backgroundSize: 'cover',
        backgroundImage: 'url(\'/app/images/pattern.svg\')',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },
    h1Style: {
        fontSize: '45px',
        color: '#fff',
        fontWeight: '100'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(252, 90, 44, 0.89)',
        color: '#fff',
        padding: '5px'
    },
    headerSearch: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '300px',
        alignSelf: 'right'
    },
    headerHeading: {
        margin: 0
    },
    mainSearch: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        maxWidth:'300px',
        alignSelf:'right'
    },
    mainStyle: {
        height: '92%',
        width: '100%'
    }
}

function Home() {
    return (
        <div style={homeStyles.mainStyle}>
            <div style={homeStyles.header}>
                <h2 style={homeStyles.headerHeading}>Clever Title</h2>
                <LocationSearch style={homeStyles.headerSearch}/>
            </div >
            <div style={homeStyles.bgImage}>
                <h1 style={homeStyles.h1Style}>Enter a City and State</h1>
                <LocationSearch style={homeStyles.mainSearch} />
            </div>
        </div>
    )
}

module.exports = Home;