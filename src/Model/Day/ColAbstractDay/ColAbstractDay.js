import React from 'react'
import './ColAbstractDay.css'
import CellDay from "../CellDay/CellDay";
import CellDuration from "../../Hour/CellDuration/CellDuration";

class ColAbstractDay extends React.Component {

    constructor(props) {

        super(props);
        this.onClickDay = this.onClickDay.bind(this);
    }

    onClickDay() {

        return this.props.onClickDay(this.props.okey);
    }

    render() {

        const title = (<CellDay day={this.props.okey.substr(2)}/>);
        const listStats = (
            <React.Fragment>
                <div className="cell">{this.props.day.stats.count}</div>
                <CellDuration time={this.props.day.stats.duration}/>
                <CellDuration time={this.props.day.stats.min_gap}/>
                <CellDuration time={this.props.day.stats.max_gap}/>
                <CellDuration time={this.props.day.stats.average_gap}/>
            </React.Fragment>
        );

        return (
            <div className="col-day" onClick={this.onClickDay}>
                {title}
                {listStats}
            </div>
        );
    }
}

export default ColAbstractDay;
