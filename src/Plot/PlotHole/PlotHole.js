import React from 'react'
import './PlotHole.css'
import StraightPlot from "../StraightPlot/StraightPlot";
import randomColor from "randomcolor";
import Axis from "../Axis/Axis";
import StraightPlotHole from "../StraightPlotHole/StraightPlotHole";

class PlotHole extends React.Component {

    render() {

        const plotter = this.props.plotter;
        const plots = plotter.plots.map(pointList => (
            <StraightPlotHole
                points={pointList}
                system={plotter.system} xRange={plotter.xRange} yRange={plotter.yRange}
                color={randomColor()}
                tickSize={4}
            />
        ));

        const labelX = this.props.labelX ? this.props.labelX : (value => value);
        const labelY = this.props.labelY ? this.props.labelY : (value => value);
        return (
            <g>
                <Axis range={plotter.xRange} origin={plotter.system.o} direction={plotter.system.u} tickSize={4}
                      gradPosition={1} label={labelX}/>
                <Axis range={plotter.yRange} origin={plotter.system.o} direction={plotter.system.v} tickSize={4}
                      gradPosition={-1} label={labelY}/>
                {plots}
            </g>
        );
    }
}

export default PlotHole;
