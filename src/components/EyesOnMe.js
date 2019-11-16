import React, { Component } from 'react';

export default class EyesOneMe extends Component {

    handleOnFocus() {
        console.log("Good!")
    }

    handleOnBlur() {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return (
            <button
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            >Eyes on me.
            </button>
        )
    }
}