import React from "react";
import Buttons from "../Buttons/Buttons";
import style from './Counter.module.css'


class Counter extends React.Component {
    render() {

        let counter = this.props.counter;
        let max = this.props.max;
        let start = this.props.start;
        let validated = this.props.validated;
        let className = start < 0 || max < 0 || max === start || max < start || counter === max ? "stop" : null;

        let messageCounter = () => {
            if ( start < 0 || max < 0 || max === start || max < start) {
                return "Incorrect value!";
            } else if (!validated) {
                return "Enter value and press 'save'";
            } else {
                return this.props.counter;
            }
        };

        return (
            <div className={style.counterHeader}>
                <h5>Counter</h5>
                <span className={className}>{messageCounter()}</span>
                <Buttons
                    counter={this.props.counter}
                    max={this.props.max}
                    start={this.props.start}
                    validated={this.props.validated}
                    resetCounter={this.props.resetCounter}
                    incrementCounter={this.props.incrementCounter}
                />
            </div>
        );
    }
}

export default Counter;