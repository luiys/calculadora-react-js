import React, { Component } from 'react';

class Display extends Component {
    render() {
        return (
            <input type="text" name="txt" id="txt" readOnly value={this.props.tela}></input>
        );
    }
}

export default Display;