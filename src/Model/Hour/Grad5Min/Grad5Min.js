import React from 'react'
import './Grad5Min.css'

class Grad5Min extends React.Component {

    constructor(props) {
        super(props);

        this.onClickGrad = this.onClickGrad.bind(this);
    }

    onClickGrad() {

        return this.props.onClickGrad(this.props.time);
    }

    render() {

        return (
            <g onClick={this.onClickGrad}>
                <rect x={this.props.translateX + this.props.value * this.props.size} y={2 * this.props.size}
                      height={1.2 * this.props.size} width={this.props.size}
                      fill={this.props.time.active ? 'orangered' : 'white'} stroke='white' opacity={0.5}/>
                <line x1={this.props.translateX + this.props.value * this.props.size + this.props.size / 2}
                      y1={2 * this.props.size}
                      x2={this.props.translateX + this.props.value * this.props.size + this.props.size / 2}
                      y2={2 * this.props.size + this.props.size}
                      strokeWidth={this.props.value % 3 === 0 ? 3 : 1}
                      stroke={Number.parseInt(this.props.value, 10) === 0 ? 'orangered' : 'gray'}
                />
            </g>
        );
    }
}

export default Grad5Min;
