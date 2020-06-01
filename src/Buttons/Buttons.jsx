import React from "react";
import Button from "./Button/Button";
import style from './Buttons.module.css'


class Buttons extends React.Component {
    render() {
        let counter = this.props.counter;
        let max = this.props.max;
        let start = this.props.start;
        let validated = this.props.validated;
        let disableReset = !validated || counter === start || max === start || start > max;
        let disableIncrement = !validated || counter === max || max === start || start > max;

        return (
            <div className={style.btnGroup}>

                <Button
                    onClick={this.props.incrementCounter}
                    disable={disableIncrement}
                    type={"button"}
                    className={"btn teal"}
                    title={"Increment"}
                />

                <Button
                    onClick={this.props.resetCounter}
                    disable={disableReset}
                    type={"button"}
                    className={"btn red lighten-1"}
                    title={"Reset"}
                />

            </div>
        );
    }
}

export default Buttons;