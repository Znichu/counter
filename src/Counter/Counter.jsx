import React from "react";
import Buttons from "../Buttons/Buttons";
import style from './Counter.module.css'


class Counter extends React.Component {
    render() {

        let {counter, start, max, validated} = this.props.state;
        let className = start < 0 || max < 0 || max === start || max < start || counter === max ? "stop" : null;

        let messageCounter = () => {
            if ( start < 0 || max < 0 || max === start || max < start) {
                return "Incorrect value!";
            } else if (!validated) {
                return "Enter value and press 'save'";
            } else {
                return counter;
            }
        };

        return (
            <div className={style.counterHeader}>
                <h5>Counter</h5>
                <span className={className}>{messageCounter()}</span>
                <Buttons
                    resetCounter={this.props.resetCounter}
                    incrementCounter={this.props.incrementCounter}
                    state={this.props.state}
                />
            </div>
        );
    }
}

export default Counter;