import React from 'react'
import './LeftButton.css';

class LeftButton extends React.Component {

    constructor(props) {

        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {

        this.props.onClick();
    }

    render() {
        return (
            <div className="left-button light-border" onClick={this.onClick}>&lt;</div>
        );
    }
}

export default LeftButton;
