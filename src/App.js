import React from 'react'
import './App.css'
import axios from 'axios'
import Header from "./UI/Header/Header";
import MainPanel from "./UI/MainPanel/MainPanel";
import DExample from "./UI/DExample/DExample";

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
                console.log(error);
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

        return (
            <React.Fragment>
                <Header/>
                <section>
                    <MainPanel weeks={this.state.weeks} onAddTime={this.onAddTime}/>
                </section>
                <section>
                    <DExample height={40}
                              width={200}
                    />
                </section>
            </React.Fragment>
        );
    }
}

export default App;