import React from 'react'
import './TableWeek.css'
import ColDay from "../../Day/ColDay/ColDay";

class TableWeek extends React.Component {

    constructor(props) {
        super(props);
        this.onClickDay = this.onClickDay.bind(this);
    }

    onClickDay(day) {

        this.props.onClickDay(day);
    }

    render() {

        const listDays = Object.keys(this.props.week.data).map((key) =>
            <ColDay key={key} okey={key} day={this.props.week.data[key]} onClickDay={this.onClickDay}/>
        );
        return (
            <div className="table-week">
                {listDays}
            </div>
        );
    }
}

export default TableWeek;
