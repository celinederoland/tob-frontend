import React from 'react'
import './CellDay.css'
import moment from 'moment'

class CellDay extends React.Component {

    render() {
        return (
            <div className="cell-day">{moment.unix(this.props.day).format('ddd DD/MM')}</div>
        );
    }
}

export default CellDay;
