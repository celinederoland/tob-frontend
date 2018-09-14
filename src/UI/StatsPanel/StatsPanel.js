import React from 'react'
import './StatsPanel.css'
import Stats from "./lib/Stats";
import CountGraph from "./CountGraph/CountGraph";

class StatsPanel extends React.Component {
    render() {

        const width = 240;
        const height = 150;
        const margin = 30;
        const weeks = this.props.weeks;
        const stats = Object.keys(this.props.weeks).length > 0 ? new Stats(weeks) : false;

        return stats ? (
            <div className="stats-panel">
                <CountGraph width={width} height={height} margin={margin} stats={stats}/>
            </div>
        ) : null;
    }
}

export default StatsPanel;
