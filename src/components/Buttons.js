import React, { Component } from 'react';

class Buttons extends Component {
    render() {
        return (
                <button onClick={() => this.props.onClick()}>{this.props.value}</button>
        );
    }
}

export default Buttons;