import React from 'react'
import './CountGraph.css'
import Plotter from "../../../Plot/lib/Plotter";
import Plot from "../../../Plot/Plot/Plot";
import moment from "moment";

class CountGraph extends React.Component {


    render() {

        const width = this.props.width;
        const height = this.props.height;
        const margin = this.props.margin;

        const week_keys = Object.keys(this.props.weeks);
        const start_at = Number.parseInt(week_keys[0].substr(2));
        const values = week_keys.map(week_index => {
                return {x: Number.parseInt(week_index.substr(2)) - start_at, y: this.props.weeks[week_index].stats.count};
            }
        );
        const labelX = value => moment.unix(value + start_at).format('DD/MM');

        const getX = value => value.x;
        const getY = [value => value.y];
        const xStep = 3600 * 24 * 7;
        const xMajorStep = 3600 * 24 * 7;
        const yStep = 1;
        const yMajorStep = 5;


        const plotter = new Plotter(values, getX, getY, width, height, xStep, xMajorStep, yStep, yMajorStep, margin);
        const plot = <Plot plotter={plotter} labelX={labelX}/>;

        return (
            <svg width={width + 2 * margin} height={height + 2 * margin}>
                {plot}
            </svg>
        );
    }
}

export default CountGraph;
