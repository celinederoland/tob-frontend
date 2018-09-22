import React from 'react'
import './MainPanel.css'
import GradEditor from "../../Model/Day/GradEditor/GradEditor";
import LeftButton from "./LeftButton/LeftButton";
import RightButton from "./RightButton/RightButton";
import TableWeek from "../../Model/Week/TableWeek/TableWeek";
import TableAbstractWeek from "../../Model/Week/TableAbstractWeek/TableAbstractWeek";

class MainPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            num_week: 0,
            num_day: 0,
        };

        this.nextWeek = this.nextWeek.bind(this);
        this.prevWeek = this.prevWeek.bind(this);
        this.setDay = this.setDay.bind(this);
        this.onClickGrad = this.onClickGrad.bind(this);
    }

    onClickGrad(time) {

        this.props.onAddTime(time);
    }

    componentDidUpdate(prevProps) {

        //I receive a list of weeks from the parent
        const weeks = prevProps.weeks;
        const week_keys = Object.keys(weeks);

        if (week_keys.length === 0) {

            this.setState((prevState, props) => {

                //I receive a list of weeks from the parent
                const weeks = props.weeks;
                const week_keys = Object.keys(weeks);

                if (week_keys.length === 0) return prevState;

                //I choose one week to be displayed (by default the last one)
                const num_week = week_keys.length - 1;
                const current_week_key = week_keys[num_week];
                const current_week = weeks[current_week_key];

                //If I have been able to choose a week (ie: the list of weeks was not empty), I have a list of days into this week
                //I choose one day to be displayed on the editor
                const days = current_week.data;
                const day_keys = Object.keys(days);
                const num_day = day_keys.length - 1;

                return {

                    num_week: num_week,
                    num_day: num_day,
                };
            });
        }
    }

    nextWeek() {

        this.setState((prevState, props) => {


            //I receive a list of weeks from the parent
            const weeks = props.weeks;
            const week_keys = Object.keys(weeks);

            if (week_keys.length === 0) return prevState;

            //I choose one week to be displayed (by default the last one)
            const num_week = prevState.num_week === week_keys.length - 1 ? 0 : (prevState.num_week + 1);
            const current_week_key = week_keys[num_week];
            const current_week = weeks[current_week_key];

            //If I have been able to choose a week (ie: the list of weeks was not empty), I have a list of days into this week
            //I choose one day to be displayed on the editor
            const days = current_week.data;
            const day_keys = Object.keys(days);
            const num_day = day_keys.length - 1;

            return {

                num_week: num_week,
                num_day: num_day,
            };
        });
    }

    prevWeek() {

        this.setState((prevState, props) => {


            //I receive a list of weeks from the parent
            const weeks = props.weeks;
            const week_keys = Object.keys(weeks);

            if (week_keys.length === 0) return prevState;

            //I choose one week to be displayed (by default the last one)
            const num_week = prevState.num_week === 0 ? week_keys.length - 1 : (prevState.num_week - 1);
            const current_week_key = week_keys[num_week];
            const current_week = weeks[current_week_key];

            //If I have been able to choose a week (ie: the list of weeks was not empty), I have a list of days into this week
            //I choose one day to be displayed on the editor
            const days = current_week.data;
            const day_keys = Object.keys(days);
            const num_day = day_keys.length - 1;

            return {

                num_week: num_week,
                num_day: num_day,
            };
        });
    }

    setDay(day) {

        this.setState((prevState, props) => {


            //I receive a list of weeks from the parent
            const weeks = props.weeks;
            const week_keys = Object.keys(weeks);

            if (week_keys.length === 0) return prevState;

            //I choose one week to be displayed (by default the last one)
            const num_week = prevState.num_week;
            const current_week_key = week_keys[num_week];
            const current_week = weeks[current_week_key];

            //If I have been able to choose a week (ie: the list of weeks was not empty), I have a list of days into this week
            //I choose one day to be displayed on the editor
            const days = current_week.data;
            const day_keys = Object.keys(days);
            const num_day = day_keys.indexOf(day);

            return {
                num_day: num_day,
            };
        });
    }

    render() {

        //I receive a list of weeks from the parent
        //I choose one of these to be displayed
        const weeks = this.props.weeks;
        const week_keys = Object.keys(weeks);
        const current_week_key = week_keys[this.state.num_week];
        const current_week = week_keys.length > 0 ? weeks[current_week_key] : null;

        //If I have been able to choose a week (ie: the list of weeks was not empty), I have a list of days into this week
        //I choose one day to be displayed on the editor
        const days = current_week ? current_week.data : null;
        const day_keys = days ? Object.keys(days) : null;
        const current_day_key = (day_keys && day_keys.length > 0) ? day_keys[this.state.num_day] : null;
        const current_day = (day_keys && day_keys.length > 0) ? days[current_day_key] : null;

        const week_table = current_week ? <TableWeek week={current_week} onClickDay={this.setDay}/> : null;
        const week_abstract_table = current_week ?
            <TableAbstractWeek week={current_week} onClickDay={this.setDay}/> : null;
        const grad_editor = current_day ? (
            <GradEditor okey={current_day_key} day={current_day} onClickGrad={this.onClickGrad}/>) : null;

        return (
            <React.Fragment>
                {grad_editor}
                <section className="main-panel">
                    <LeftButton onClick={this.prevWeek}/>
                    {week_table}
                    <RightButton onClick={this.nextWeek}/>

                    <LeftButton onClick={this.prevWeek}/>
                    {week_abstract_table}
                    <RightButton onClick={this.nextWeek}/>
                </section>
            </React.Fragment>
        );
    }
}

export default MainPanel;
