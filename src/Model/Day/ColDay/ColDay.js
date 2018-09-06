import React from 'react'
import './ColDay.css'
import CellHour from "../../Hour/CellHour/CellHour";
import CellDay from "../CellDay/CellDay";

class ColDay extends React.Component {

    constructor(props) {

        super(props);
        this.onClickDay = this.onClickDay.bind(this);
    }

    onClickDay() {

        return this.props.onClickDay(this.props.okey);
    }

    render() {

        const title = (<CellDay day={this.props.okey.substr(2)}/>);
        const listHours = Object.keys(this.props.day.data).map((key) =>
            <CellHour key={key} time={this.props.day.data[key]}/>
        );
        return (
            <div className="col-day" onClick={this.onClickDay}>
                {title}
                {listHours}
            </div>
        );
    }
}

export default ColDay;
