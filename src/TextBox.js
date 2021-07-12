import React, { Component } from 'react'
import "./TextBox.css"

class TextBox extends Component {
    render() {
        let bgColor
        if (this.props.dark) {
            bgColor = { backgroundColor: 'rgba(0, 0, 0, 0.8)' };
        }
        if (this.props.light) {
            bgColor = { backgroundColor: 'rgba(255, 255, 255, 0.4)' };
        }
        return (
            <div className="TextBox" style={bgColor}>
                {this.props.children}
            </div>
        )
    }
}

export default TextBox;