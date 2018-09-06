import React from 'react'
import './App.css'
import axios from 'axios'
import Header from "./UI/Header/Header";
import MainPanel from "./UI/MainPanel/MainPanel";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            weeks: {}
        };

        this.onAddTime = this.onAddTime.bind(this);
    }

    onAddTime(time) {

        if(!time.active) axios.post('http://tobacco-api.itpassion.info/time/' + time.time)
            .then(function (response) {
                this.setState((prevState) => {
                    let weeks = prevState.weeks;
                    Object.keys(weeks).map((key) => {
                        if(key === response.data.should_update) {
                            weeks[key] = response.data.data;
                        }
                    });
                    console.log(weeks);
                    return {
                        weeks: weeks
                    }
                });
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
        else {
            axios.post('http://tobacco-api.itpassion.info/time/delete/' + time.time).then(function (response) {
                this.setState((prevState) => {
                    let weeks = prevState.weeks;
                    Object.keys(weeks).map((key) => {
                        if(key === response.data.should_update) {
                            weeks[key] = response.data.data;
                        }
                    });
                    console.log(weeks);
                    return {
                        weeks: weeks
                    }
                });
            }.bind(this))
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    componentDidMount() {

        axios.get('http://tobacco-api.itpassion.info/all')
            .then(function (response) {
                console.log(response);
                this.setState({weeks: response.data});
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <section>
                    <MainPanel weeks={this.state.weeks} onAddTime={this.onAddTime}/>
                </section>
            </React.Fragment>
        );
    }
}

export default App;