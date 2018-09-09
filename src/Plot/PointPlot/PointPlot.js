import React from 'react'
import './PointPlot.css'

class PointPlot extends React.Component {

    render() {

        const points = this.props.values.map((value => (

            <circle
                cx={this.props.translateX + (this.props.xRange.selector(value) - this.props.xRange.start) * this.props.xRange.depth}
                cy={this.props.translateY - (this.props.yRange.selector(value) - this.props.yRange.start) * this.props.yRange.depth}
                r={this.props.xRange.tickHeight / 2}
                stroke={"black"} strokeWidth={3}
                fill={"red"}/>
        )));

        return (
            <g>{points}</g>
        );
    }
}

export default PointPlot;
