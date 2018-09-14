import React from 'react'
import './DurationGraph.css'
import Plotter from "../../../Plot/lib/Plotter";
import Plot from "../../../Plot/Plot/Plot";

class DurationGraph extends React.Component {
    render() {
        const values = this.props.stats.day_values;
        const nDay = this.props.stats.day_details.length;
        const nWeek = Math.ceil( nDay / 7);
        const stepping = Math.floor(nWeek / 5);
        const xStep = 3600 * 24;
        const xMajorStep = 3600 * 24 * 7 * stepping;

        const width = this.props.width;
        const height = this.props.height;
        const margin = this.props.margin;

        const labelX = this.props.stats.labelX;
        const labelY = this.props.stats.labelY;

        const getX = value => value.x;
        const getY = [value => value.duration, value => value.w_duration];
        const yStep = 3600;
        const yMajorStep = 3600;


        const plotter = new Plotter(values, getX, getY, width, height, xStep, xMajorStep, yStep, yMajorStep, margin);
        const plot = <Plot plotter={plotter} labelX={labelX} labelY={labelY}/>;

        return (
            <svg width={width + 2 * margin} height={height + 2 * margin}>
                {plot}
            </svg>
        );
    }
}

export default DurationGraph;
