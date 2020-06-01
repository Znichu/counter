import React from "react";
import style from './Settings.module.css'
import Button from "../Buttons/Button/Button";
import Input from "../Input/Input";


class Settings extends React.Component {

    onChangeMaxValue = (e) => {
        this.props.onChangeInputMax(+e.currentTarget.value);
    };

    onChangeStartValue = (e) => {
        this.props.onChangeInputStart(+e.currentTarget.value);
    };

    render() {
        let max = this.props.max;
        let start = this.props.start;
        let validated = this.props.validated;
        let className = start < 0 || max < 0 || max === start || max < start ? "invalid" : null;
        let disableSave = validated || max === start || start < 0 || max <= 0 || start > max;

        return(
            <div className={style.settingsInput}>
                <h5>Settings</h5>

                    <Input
                        onChange={this.onChangeMaxValue}
                        type={"number"}
                        value={this.props.max}
                        title={"max value:"}
                        className={className}
                />

                    <Input
                        onChange={this.onChangeStartValue}
                        type={"number"}
                        value={this.props.start}
                        title={"start value:"}
                        className={className}
                    />

                    <Button
                        onClick={this.props.addSettings}
                        disable={disableSave}
                        type={"button"}
                        className={"btn teal"}
                        title={"Save"}
                    />
            </div>
        );
    }
}

export default Settings