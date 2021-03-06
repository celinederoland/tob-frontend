import React from 'react'
import './StraightPlot.css'

class StraightPlot extends React.Component {

    render() {

        const system = this.props.system;
        const points = this.props.points.filter(p => p.isValid())
            .map(p => p.absoluteCoordinates(system, this.props.xRange, this.props.yRange));

        const pathPoints = points.length > 0 ?
            "M " + points[0].x + " " + points[0].y + " "
            + points.map(point => "L " + point.x + " " + point.y).join(" ")
            : null;
        const path = points.length > 0 ? (
            <path d={pathPoints} strokeWidth={2} stroke={this.props.color} fill={"none"}/>) : null;

        return (
            <g>{path}</g>
        );
    }
}

export default StraightPlot;
