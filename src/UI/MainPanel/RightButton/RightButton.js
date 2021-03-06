import React from 'react'
import './RightButton.css'

class RightButton extends React.Component {

    constructor(props) {

        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {

        this.props.onClick();
    }

    render() {
        return (
            <div className="right-button light-border" onClick={this.onClick}>&gt;</div>
        );
    }
}

export default RightButton;
