import React from 'react'
import './YAxis.css'

class YAxis extends React.Component {
    
    render() {
        const yAxis = (
            <line x1={this.props.translateX} y1={this.props.translateY}
                  x2={this.props.translateX} y2={this.props.translateY - this.props.range.size - this.props.range.depth}
                  strokeWidth={1} stroke={'gray'}
            />
        );

        const yTicks = this.props.range.rValues.map((value) => (
            <line x1={this.props.translateX - this.props.range.tickHeight / 2}
                  y1={(this.props.translateY) - (value - this.props.range.start) * this.props.range.depth}
                  x2={this.props.translateX + this.props.range.tickHeight / 2}
                  y2={(this.props.translateY) - (value - this.props.range.start) * this.props.range.depth}
                  strokeWidth={value % this.props.range.majorStepSize === 0 ? 3 : 1}
                  stroke={'gray'}
            />));

        const yGrads = this.props.range.rValues.map((value, index) => (
            (value % this.props.range.majorStepSize === 0 || index === 0) ?
                <text x={0} y={(this.props.translateY) - ((value - this.props.range.start) * this.props.range.depth - this.props.range.tickHeight + 2)}
                      fontSize={2 * this.props.range.tickHeight  + 'px'}
                >
                    {value}
                </text> : null
        ));
        return (
            <g>
                {yAxis}
                {yTicks}
                {yGrads}
            </g>
        );
    }
}

export default YAxis;
