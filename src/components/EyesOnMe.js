// Code EyesOnMe Component Here
import React, { Component } from 'react';
export default class EyesOnMe extends Component {

    handleBlur = () => {
        return (console.log('Hey! Eyes on me!'))
    }
    handleFocus = () => {
        return (console.log('Good!'))
    }

    render() {
        return (
            <button onFocus={this.handleFocus} onBlur={this.handleBlur} />
        )

    }
}