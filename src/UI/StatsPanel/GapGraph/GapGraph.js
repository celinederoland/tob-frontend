import React from 'react'
import './GapGraph.css'
import Plotter from "../../../Plot/lib/Plotter";
import Plot from "../../../Plot/Plot/Plot";

class GapGraph extends React.Component {
    render() {
        const values = this.props.stats.day_values;
        const xStep = 3600 * 24;
        const xMajorStep = 3600 * 24 * 7;

        const width = this.props.width;
        const height = this.props.height;
        const margin = this.props.margin;

        const labelX = this.props.stats.labelX;
        const labelY = this.props.stats.labelY;

        const getX = value => value.x;
        const getY = [
            /*value => value.min_gap,
            value => value.w_min_gap,*/
            value => value.average_gap,
            value => value.w_average_gap,
            /*value => value.max_gap,
            value => value.w_max_gap*/
        ];
        const yStep = 3600;
        const yMajorStep = 3600;

        const filterY = value => value < 86400;
        const plotter = new Plotter(values, getX, getY, width, height, xStep, xMajorStep, yStep, yMajorStep, margin, null, null, null, filterY);
        const plot = <Plot plotter={plotter} labelX={labelX} labelY={labelY}/>;

        return (
            <svg width={width + 2 * margin} height={height + 2 * margin}>
                {plot}
            </svg>
        );
    }
}

export default GapGraph;
