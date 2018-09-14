import React from 'react'
import './StraightPlotHole.css'
import Vector from "../lib/Vector";

class StraightPlotHole extends React.Component {

    render() {

        const system = this.props.system;
        console.log('points', this.props.points);
        const points = this.props.points
            .map(p => (p.isValid() ? p.absoluteCoordinates(system, this.props.xRange, this.props.yRange) : p));

        const uniquePoints = points.map(point => (
            <circle cx={point.x} cy={point.y} r={this.props.tickSize} fill={this.props.color}/>
        ));

        let pathPoints = null;
        if (points.length > 0) {
            let prevPoint = new Vector(0, null);
            pathPoints = "";
            for (let i = 1; i < points.length; i++) {
                if (points[i].isValid() && prevPoint.isValid()) {
                    pathPoints += "L " + points[i].x + " " + points[i].y + " ";
                }
                else if (points[i].isValid()) {
                    pathPoints += "M " + points[i].x + " " + points[i].y + " ";
                }
                prevPoint = points[i];

            }
        }

        const path = points.length > 0 ? (
            <path d={pathPoints} strokeWidth={2} stroke={this.props.color} fill={"none"}/>) : null;

        return (
            <g>{path} {uniquePoints}</g>
        );
    }
}

export default StraightPlotHole;
