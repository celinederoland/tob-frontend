import React from 'react'
import './CellDuration.css'
import moment from "moment";

class CellDuration extends React.Component {
    render() {
        const duration = moment.duration(this.props.time * 1000);
        return (
            <div className="cell-hour">{duration.hours().toString().padStart(2,'0') + ':' + duration.minutes().toString().padStart(2,'0')}</div>
        );
    }
}

export default CellDuration;
