import React from 'react'
import './CellHour.css'
import moment from 'moment'

class CellHour extends React.Component {

    render() {
        return (
            <div className="cell-hour">{moment.unix(this.props.time).format('HH:mm')}</div>
        );
    }
}

export default CellHour;
