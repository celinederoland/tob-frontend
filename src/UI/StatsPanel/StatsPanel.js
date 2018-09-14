import React from 'react'
import './StatsPanel.css'
import Stats from "./lib/Stats";
import CountGraph from "./CountGraph/CountGraph";
import DurationGraph from "./DurationGraph/DurationGraph";
import GapGraph from "./GapGraph/GapGraph";
import DetailGraph from "./DetailGraph/DetailGraph";

class StatsPanel extends React.Component {
    render() {

        const width = 240;
        const height = 150;
        const margin = 30;
        const weeks = this.props.weeks;
        const stats = Object.keys(this.props.weeks).length > 0 ? new Stats(weeks) : false;

        return stats ? (
            <div className="stats-panel">
                <div className='stats-left'>
                    <DetailGraph width={4 * width} height={3 * height} margin={margin} stats={stats}/>
                </div>
                <div className='stats-right'>
                    <CountGraph width={width} height={height} margin={margin} stats={stats}/>
                    <DurationGraph width={width} height={height} margin={margin} stats={stats}/>
                    <GapGraph width={width} height={height} margin={margin} stats={stats}/>
                </div>
            </div>
        ) : null;
    }
}

export default StatsPanel;
