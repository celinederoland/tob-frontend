import React from 'react'
import './Axis.css'

class Axis extends React.Component {

    render() {

        const range = this.props.range;
        const origin = this.props.origin;
        const direction = this.props.direction;
        const subDirection = direction.clone().normalize(this.props.tickSize);
        const orthoDirection = direction.ortho().normalize(this.props.tickSize);
        const orthoDirection2 = orthoDirection.clone().scale(this.props.gradPosition * 4);
        const fontSize = this.props.tickSize * 2.5;

        const xAxis = (
            <line x1={origin.x}
                  y1={origin.y}
                  x2={origin.x + (range.end - range.start + range.step) * direction.x}
                  y2={origin.y + (range.end - range.start + range.step) * direction.y}
                  strokeWidth={1} stroke={'gray'}
            />
        );

        const xTicks = range.values.map((value) => (
            <line x1={origin.x + (value - range.start) * direction.x - orthoDirection.x}
                  y1={origin.y + (value - range.start) * direction.y - orthoDirection.y}
                  x2={origin.x + (value - range.start) * direction.x + orthoDirection.x}
                  y2={origin.y + (value - range.start) * direction.y + orthoDirection.y}
                  strokeWidth={value % range.majorStep === 0 ? 2 : 1}
                  stroke={'gray'}
            />));

        const xGrads = range.values.map((value, index) => (
            (value % range.majorStep === 0 || index === 0) ?
                <text
                    x={origin.x + (value - range.start) * direction.x - orthoDirection2.x - subDirection.x}
                    y={origin.y + (value - range.start) * direction.y - orthoDirection2.y - subDirection.y}
                    fontSize={fontSize + 'px'}
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

export default Axis;
