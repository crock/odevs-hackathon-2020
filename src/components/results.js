import React, { Component } from "react";
import styled, { css } from 'styled-components'
import * as result from "./results.json";

export default class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.fillResults = this.fillResults.bind(this);
    }

    componentDidUpdate = () => {
        this.fillResults();
    }

    fillResults = () => {

    }

    render() {
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Label</th>
                            <th>Label</th>
                            <th>Label</th>
                            <th>Label</th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}