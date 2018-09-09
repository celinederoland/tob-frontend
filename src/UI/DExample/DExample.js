import React from 'react'
import './DExample.css'
import XAxis from "../../Plot/XAxis/XAxis";
import YAxis from "../../Plot/YAxis/YAxis";
import PointPlot from "../../Plot/PointPlot/PointPlot";
import Range from "../../Plot/Range/Range";
import StraightPathPlot from "../../Plot/StraightPathPlot/StraightPathPlot";

class DExample extends React.Component {

    render() {


        const values = [
            {x: 0, y: 2},
            {x: 1, y: 5},
            {x: 3, y: 8},
            {x: 4, y: 3},
            {x: 12, y: 10},
            {x: 13, y: 7},
            {x: 14, y: 6},
        ];
        const width = 240;
        const height = 150;


        const minorXGridDepth = 1;
        const majorXGridDepth = 5;
        const minorYGridDepth = 1;
        const majorYGridDepth = 5;

        const selectX = value => value.x;
        const selectY = value => value.y;

        const tickHeight = Math.max(width, height) / 60;
        const margin = 3 * tickHeight;
        const xRange = new Range(values, width, tickHeight, margin, minorXGridDepth, majorXGridDepth, selectX);
        const yRange = new Range(values, height, tickHeight, margin, minorYGridDepth, majorYGridDepth, selectY);


        const xAxis = <XAxis range={xRange} translateX={margin} translateY={margin + height}/>;
        const yAxis = <YAxis range={yRange} translateX={margin} translateY={margin + height}/>;

        const points =<PointPlot xRange={xRange} yRange={yRange} values={values} translateX={margin} translateY={margin + height} />;
        const straightPath =<StraightPathPlot xRange={xRange} yRange={yRange} values={values} translateX={margin} translateY={margin + height} />;

        return (
            <svg width={width + 2 * margin} height={height + 2 * margin}>
                {xAxis}
                {yAxis}
                {points}
                {straightPath}
            </svg>
        );
    }
}

export default DExample;
