import React from 'react'
import './ColAbstractDayTitles.css'

class ColAbstractDayTitles extends React.Component {

    render() {

        const title = (<div className='cell-day'>Stats</div>);
        const cells = (
            <React.Fragment>
                <div className="cell">Nombre</div>
                <div className="cell">Durée</div>
                <div className="cell">Min Gap</div>
                <div className="cell">Max Gap</div>
                <div className="cell">Av. Gap</div>
            </React.Fragment>
        );

        return (
            <div className="col-day" onClick={this.onClickDay}>
                {title}
                {cells}
            </div>
        );
    }
}

export default ColAbstractDayTitles;
