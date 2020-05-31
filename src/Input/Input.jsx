import React from "react";
import style from './Input.module.css'


class Input extends React.Component {
    render() {
        return(
            <div className={style.componentInput}>
                <span>{this.props.title}</span>
                <input className={this.props.className} type ={this.props.type} onChange={this.props.onChange} value={this.props.value} />
            </div>
        );
    }
}

export default Input;