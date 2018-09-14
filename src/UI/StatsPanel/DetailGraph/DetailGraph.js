import React from 'react'
import './DetailGraph.css'
import Plotter from "../../../Plot/lib/Plotter";
import PlotHole from "../../../Plot/PlotHole/PlotHole";

class DetailGraph extends React.Component {
    render() {
        const values = this.props.stats.day_details;
        const xStep = 3600 * 24;
        const xMajorStep = 3600 * 24 * 7;

        const width = this.props.width;
        const height = this.props.height;
        const margin = this.props.margin;

        const labelX = this.props.stats.labelX;
        const labelY = this.props.stats.labelY;

        const getX = value => value.x;
        let getY = [];
        for(let i = 1; i <= this.props.stats.max_by_day; i++) {
            getY.push(value => value[i]);
        }
        const yStep = 3600;
        const yMajorStep = 3*3600;


        const plotter = new Plotter(values, getX, getY, width, height, xStep, xMajorStep, yStep, yMajorStep, margin);
        const plot = <PlotHole plotter={plotter} labelX={labelX} labelY={labelY}/>;

        return (
            <svg width={width + 2 * margin} height={height + 2 * margin}>
                {plot}
            </svg>
        );
    }
}

export default DetailGraph;
