import React from 'react'
import './App.css'
import axios from 'axios'
import Header from "./UI/Header/Header";
import MainPanel from "./UI/MainPanel/MainPanel";
import Plotter from "./Plot/lib/Plotter";
import Axis from "./Plot/Axis/Axis";
import Vector from "./Plot/lib/Vector";
import StraightPlot from "./Plot/StraightPlot/StraightPlot";
import Plot from "./Plot/Plot/Plot";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            weeks: {}
        };

        this.onAddTime = this.onAddTime.bind(this);
    }

    onAddTime(time) {

        if (!time.active) axios.post('http://tobacco-api.' + process.env.REACT_APP_PROJECT_DOMAIN + '/time/' + time.time)
            .then(function (response) {
                this.setState((prevState) => {
                    let weeks = prevState.weeks;
                    Object.keys(weeks).map((key) => {
                        if (key === response.data.should_update) {
                            weeks[key] = response.data.data;
                        }
                    });
                    return {
                        weeks: weeks
                    }
                });
            }.bind(this))
            .catch(function (error) {
            });
        else {
            axios.post('http://tobacco-api.' + process.env.REACT_APP_PROJECT_DOMAIN + '/time/delete/' + time.time).then(function (response) {
                this.setState((prevState) => {
                    let weeks = prevState.weeks;
                    Object.keys(weeks).map((key) => {
                        if (key === response.data.should_update) {
                            weeks[key] = response.data.data;
                        }
                    });
                    return {
                        weeks: weeks
                    }
                });
            }.bind(this))
                .catch(function (error) {
                });
        }
    }

    componentDidMount() {

        axios.get('http://tobacco-api.' + process.env.REACT_APP_PROJECT_DOMAIN + '/all')
            .then(function (response) {
                this.setState({weeks: response.data});
            }.bind(this))
            .catch(function (error) {
            });

    }

    render() {

        const values = [
            {x: 0, y: 2, z: 3, t: 12},
            {x: 1, y: 5, z: 30, t: 14},
            {x: 3, y: 8, z: 0, t: 5},
            {x: 4, y: 3, z: 12, t: 13},
            {x: 12, y: 10, z: 4, t: 16},
            {x: 13, y: 7, z: 28, t: 11},
            {x: 14, y: 6, z: 1, t: 16},
        ];

        const getX = value => value.x;
        const getY = [value => value.y, value => value.z, value => value.t];
        const width = 240;
        const height = 150;
        const xStep = 1;
        const xMajorStep = 5;
        const yStep = 1;
        const yMajorStep = 5;
        const margin = 30;

        const plotter = new Plotter(values, getX, getY, width, height, xStep, xMajorStep, yStep, yMajorStep, margin);
        const plot = <Plot plotter={plotter}/>;


        return (
            <React.Fragment>
                <Header/>
                <section>
                    <MainPanel weeks={this.state.weeks} onAddTime={this.onAddTime}/>
                </section>
                <section>
                    <svg width={width + 2 * margin} height={height + 2 * margin}>
                        {plot}
                    </svg>
                </section>
            </React.Fragment>
        );
    }
}

export default App;