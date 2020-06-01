import React from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import Settings from "./SettingsCounter/Settings";
import {connect} from "react-redux";
import {increment, reset, saveSettings, updateMax, updateStart} from "./store/counter-reducer";

class App extends React.Component {

    incrementCounter = () => {
        this.props.increment()
    };
    resetCounter = () => {
        this.props.reset()
    };

    addSettings = () => {
        this.props.saveSettings();
    };

    onChangeInputMax = (inputValue) => {
        this.props.updateMax(inputValue);
    };

    onChangeInputStart = (inputValue) => {
        this.props.updateStart(inputValue);
    };


    render() {
        return (
            <div className="wrapper">
                <div className="counter z-depth-5">

                        <Counter
                            counter={this.props.counter}
                            max={this.props.max}
                            start={this.props.start}
                            validated={this.props.validated}
                            incrementCounter={this.incrementCounter}
                            resetCounter={this.resetCounter}
                        />

                        <Settings
                            max={this.props.max}
                            start={this.props.start}
                            validated={this.props.validated}
                            onChangeInputMax={this.onChangeInputMax}
                            onChangeInputStart={this.onChangeInputStart}
                            addSettings={this.addSettings}
                        />

                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    counter: state.counter.counter,
    max: state.counter.max,
    start: state.counter.start,
    validated: state.counter.validated
});

export default connect (mapStateToProps, {increment, reset, saveSettings, updateMax, updateStart}) (App);
