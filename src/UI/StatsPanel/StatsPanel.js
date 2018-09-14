import React from 'react'
import './StatsPanel.css'
import Stats from "./lib/Stats";
import CountGraph from "./CountGraph/CountGraph";
import DurationGraph from "./DurationGraph/DurationGraph";
import GapGraph from "./GapGraph/GapGraph";
import DetailGraph from "./DetailGraph/DetailGraph";

class StatsPanel extends React.Component {
    render() {

        const width = 340;
        const height = 150;
        const margin = 30;
        const weeks = this.props.weeks;
        const stats = Object.keys(this.props.weeks).length > 0 ? new Stats(weeks) : false;

        return stats ? (
            <div className="stats-panel">
                <div className='stats-left'>
                    <div>
                        <div className='graph-title'>Détails</div>
                        <DetailGraph width={2.5 * width} height={4 * height} margin={margin} stats={stats}/>
                    </div>
                </div>
                <div className='stats-right'>
                    <div className='graph-title'>Nombre / Jour</div>
                    <CountGraph width={width} height={height} margin={margin} stats={stats}/>
                    <div className='graph-title'>Amplitude moyenne</div>
                    <GapGraph width={width} height={height} margin={margin} stats={stats}/>
                    <div className='graph-title'>Amplitude totale</div>
                    <DurationGraph width={width} height={height} margin={margin} stats={stats}/>
                </div>
            </div>
        ) : null;
    }
}

export default StatsPanel;
