import React from 'react'
import './TableAbstractWeek.css'
import ColAbstractDay from "../../Day/ColAbstractDay/ColAbstractDay";
import ColAbstractDayTitles from "../../Day/ColAbstractDayTitles/ColAbstractDayTitles";

class TableAbstractWeek extends React.Component {

    constructor(props) {
        super(props);
        this.onClickDay = this.onClickDay.bind(this);
    }

    onClickDay(day) {

        this.props.onClickDay(day);
    }

    render() {

        const title = <ColAbstractDayTitles/>;
        const listDays = Object.keys(this.props.week.data).map((key) =>
            <ColAbstractDay key={key} okey={key} day={this.props.week.data[key]} onClickDay={this.onClickDay}/>
        );
        return (
            <div className="table-week">
                {title}
                {listDays}
            </div>
        );
    }
}

export default TableAbstractWeek;
