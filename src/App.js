import React from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import Settings from "./SettingsCounter/Settings";

class App extends React.Component {

    state = {
        counter: 0,
        max: 5,
        start: 0,
        validated: true
    };

    componentDidMount() {
        this.restoreState();
    };

    incrementCounter = () => this.setState((prevState) => ({counter: prevState.counter + 1}),
        () => {this.saveState();});
    resetCounter = (value) => this.setState((prevState) => ({...prevState, counter: value}),
        () => {this.saveState();});

    addSettings = (newCounter) => {
        this.setState((prevState) => ({...prevState, counter: newCounter, validated: true}),
            () => {this.saveState();});
    };

    onChangeInputMax = (value) => {
        this.setState((prevState) => ({...prevState, max: value, validated: false}),
            () => {this.saveState();});
    };

    onChangeInputStart = (value) => {
        this.setState((prevState) => ({...prevState, start: value,  validated: false}),
            () => {this.saveState();});
    };

    saveState = () => {
        let saveState = JSON.stringify(this.state);
        localStorage.setItem("save_state", saveState);
    };

    restoreState = () => {
        let state = {
            counter: 0,
            max: 5,
            start: 0,
            validated: true
        };
        state = JSON.parse(localStorage.getItem("save_state"));
        this.setState(state)
    };

    render() {
        return (
            <div className="wrapper">
                <div className="counter z-depth-5">

                        <Counter
                            state={this.state}
                            incrementCounter={this.incrementCounter}
                            resetCounter={this.resetCounter}
                        />

                        <Settings
                            state={this.state}
                            onChangeInputMax={this.onChangeInputMax}
                            onChangeInputStart={this.onChangeInputStart}
                            addSettings={this.addSettings}
                        />

                </div>
            </div>
        );
    }
}

export default App;
