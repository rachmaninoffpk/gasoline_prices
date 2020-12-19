import React from 'react';

import Station from '../Station/Station';

class StationList extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="StationList">
                {this.props.stations.map(station => <Station station={station} />)}
            </div>
        )
    }
}

export default StationList;