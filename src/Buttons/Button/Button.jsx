import React from "react";


class Button extends React.Component {
    render() {
        return (
                <button
                    onClick={this.props.onClick}
                    disabled={this.props.disable}
                    type={this.props.type}
                    className={this.props.className}
                >
                    {this.props.title}
                </button>
        );
    }
}

export default Button;