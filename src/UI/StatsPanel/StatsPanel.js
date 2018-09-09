import React from 'react'
import './StatsPanel.css'
import CountGraph from "./CountGraph/CountGraph";

class StatsPanel extends React.Component {
    render() {

        const width = 240;
        const height = 150;
        const margin = 30;
        const weeks = this.props.weeks;

        return Object.keys(this.props.weeks).length > 0 ? (
            <div className="stats-panel">
                <CountGraph width={width} height={height} margin={margin} weeks={weeks}/>
            </div>
        ) : null;
    }
}

export default StatsPanel;
