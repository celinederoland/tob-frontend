import React from 'react'
import './Plot.css'
import StraightPlot from "../StraightPlot/StraightPlot";
import Axis from "../Axis/Axis";
import randomColor from 'randomcolor';

class Plot extends React.Component {

    render() {

        const plotter = this.props.plotter;
        const plots = plotter.plots.map(pointList => (
            <StraightPlot
                points={pointList}
                system={plotter.system} xRange={plotter.xRange} yRange={plotter.yRange}
                color={randomColor()}
            />
        ));

        const labelX = this.props.labelX ? this.props.labelX : (value => value);
        const labelY = this.props.labelY ? this.props.labelY : (value => value);
        return (
            <g>
                <Axis range={plotter.xRange} origin={plotter.system.o} direction={plotter.system.u} tickSize={4}
                      gradPosition={1} label={labelX}/>
                <Axis range={plotter.yRange} origin={plotter.system.o} direction={plotter.system.v} tickSize={4}
                      gradPosition={-1.6} label={labelY}/>
                {plots}
            </g>
        );
    }
}

export default Plot;
