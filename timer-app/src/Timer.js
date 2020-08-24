import React, { Component } from "react";

export class Timer extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor");

        this.state = {
            count: 0,
            enabled: this.props.enabled,
        };

        this.increment = this.increment.bind(this);
        this.toggleEnabled = this.toggleEnabled.bind(this);
    }

    componentDidUpdate(prevProps) {
        console.log("Update");
        if (this.props.enabled !== prevProps.enabled) {
            this.setState({
                enabled: this.props.enabled,
            });
        }
    }

    componentDidMount() {
        console.log("Mount");
    }

    componentWillUnmount() {
        console.log("Unmount");
    }

    increment() {
        const newCount = this.state.count + 1;

        this.setState({
            count: newCount,
        });
    }

    toggleEnabled() {
        this.setState({
            enabled: !this.state.enabled,
        });
    }

    render() {
        console.log("Render");

        //const { maxCount } = this.props;
        const { count, enabled } = this.state;
        // const disabled = !enabled || count === maxCount;

        return (
            <button onClick={this.toggleEnabled}>
                {enabled ? count : "disabled"}
            </button>
        );
    }
}
