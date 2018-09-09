import React from 'react'
import './XAxis.css'

class XAxis extends React.Component {
    render() {

        const xAxis = (
            <line x1={this.props.translateX} y1={this.props.translateY}
                  x2={this.props.translateX + this.props.range.size + this.props.range.depth} y2={this.props.translateY}
                  strokeWidth={1} stroke={'gray'}
            />
        );

        const xTicks = this.props.range.rValues.map((value) => (
            <line x1={this.props.translateX + (value - this.props.range.start) * this.props.range.depth}
                  y1={this.props.translateY + this.props.range.tickHeight / 2}
                  x2={this.props.translateX + (value - this.props.range.start) * this.props.range.depth}
                  y2={this.props.translateY - this.props.range.tickHeight / 2}
                  strokeWidth={value % this.props.range.majorStepSize === 0 ? 2 : 1}
                  stroke={'gray'}
            />));

        const xGrads = this.props.range.rValues.map((value, index) => (
            (value % this.props.range.majorStepSize === 0 || index === 0) ?
                <text textAnchor={"middle"} x={this.props.translateX + (value - this.props.range.start) * this.props.range.depth}
                      y={3 * this.props.range.tickHeight + this.props.translateY}
                      fontSize={2 * this.props.range.tickHeight + 'px'}
                >
                    {value}
                </text> : null
        ));

        return (
            <g>
                {xAxis}
                {xTicks}
                {xGrads}
            </g>
        );
    }
}

export default XAxis;
