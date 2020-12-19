import React from 'react';

class Station extends React.Component {
    /*constructor(props) {
        super(props);
    }*/

    render() {
        return (
            <div>
                <p>{this.props.station.name ? this.props.station.name : 'No name'}</p>
                <p>{this.props.station.location ? this.props.station.location : 'No location'}</p>
                <ul>{this.props.station.gasTypes.length > 0 && this.props.station.gasTypes.map(term =>
                <li>{`${term.name}: $ ${term.price}`}</li>)}
                </ul>
            </div>
        )
    }
}

export default Station;