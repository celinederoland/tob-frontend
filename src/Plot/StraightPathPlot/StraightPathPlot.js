import React from 'react'
import './StraightPathPlot.css'

class StraightPathPlot extends React.Component {
    render() {


        const pathPoints = this.props.values.length > 0 ?
            "M " + (this.props.translateX + (this.props.xRange.selector(this.props.values[0]) - this.props.xRange.start) * this.props.xRange.depth)
            + " " + (this.props.translateY - (this.props.yRange.selector(this.props.values[0]) - this.props.yRange.start) * this.props.yRange.depth) + " "
            + this.props.values.map((value => {
                return "L "
                    + (this.props.translateX + (this.props.xRange.selector(value) - this.props.xRange.start) * this.props.xRange.depth) + " "
                    + (this.props.translateY - (this.props.yRange.selector(value) - this.props.yRange.start) * this.props.yRange.depth);
            })).join(" ") : null;
        const path = this.props.values.length > 0 ? (<path d={pathPoints} strokeWidth={2} stroke={"blue"} fill={"none"}/>) : null;

        return (
            <g>{path}</g>
        );
    }
}

export default StraightPathPlot;
