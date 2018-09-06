import React from 'react'
import './GradHour.css'
import moment from 'moment'
import Grad5Min from "../Grad5Min/Grad5Min";

class GradHour extends React.Component {

    constructor(props) {
        super(props);

        this.onClickGrad = this.onClickGrad.bind(this);
    }

    onClickGrad(time) {

        this.props.onClickGrad(time)
    }

    render() {
        const values = Object.keys(this.props.hour);
        const hour_start_at = this.props.hour.length > 0 ? this.props.hour[0].time : null;
        const hour_num = moment.unix(hour_start_at).hour();
        const size = this.props.size;
        const times = this.props.hour;

        const translateX = size * 12 * hour_num;
        const fontWidth = 1.5 * size;

        const grads = values.map(value => (
            <Grad5Min key={times[value]} translateX={translateX} value={value} size={size} time={times[value]} onClickGrad={this.onClickGrad}/>
        ));
        return (
            <React.Fragment>
                <text x={translateX} y={fontWidth}
                      fontSize={fontWidth + 'px'}>{hour_num}
                </text>
                {grads}
            </React.Fragment>
        );
    }
}

export default GradHour;
