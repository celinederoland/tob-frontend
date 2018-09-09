import React from 'react'
import './StraightPlot.css'

class StraightPlot extends React.Component {

    render() {

        const system = this.props.system;
        const points = this.props.points.map(p => p.absoluteCoordinates(system));

        const pathPoints = points.length > 0 ?
            "M " + points[0].x + " " + points[0].y + " "
            + points.map((point => {
                return "L " + point.x + " " + point.y;
            })).join(" ") : null;
        const path = points.length > 0 ? (<path d={pathPoints} strokeWidth={2} stroke={"blue"} fill={"none"}/>) : null;

        return (
            <g>{path}</g>
        );
    }
}

export default StraightPlot;
