import React, { Component } from "react";
import { Timer } from "./Timer";

export class TimerList extends Component {
    constructor() {
        super();

        this.state = {
            enabled: false,
            timers: [
                {
                    id: "fhsdjfk",
                    maxCount: 2,
                },
                {
                    id: "hdjksfhdjsk",
                    maxCount: 3,
                },
                {
                    id: "dhsjkfhsdkjlq",
                    maxCount: 5,
                },
            ],
        };

        this.toggleEnabled = this.toggleEnabled.bind(this);
    }

    toggleEnabled() {
        this.setState({
            enabled: !this.state.enabled,
        });
    }

    render() {
        const { enabled, timers } = this.state;

        return (
            <div>
                <button onClick={this.toggleEnabled}>
                    {enabled ? "Disable" : "Enable"}
                </button>
                <ul>
                    {timers.map(timer => (
                        <Timer
                            maxCount={timer.maxCount}
                            key={timer.id}
                            enabled={enabled}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}
