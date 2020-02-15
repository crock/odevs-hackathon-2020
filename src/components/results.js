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
        console.log(result.default.results)
        const results = result.default.results
        return results.map((x) => {
            const { label , emission , electricity , cost } = x;
            return (
                <tr>
                    <td>{label}</td>
                    <td>{emission}</td>
                    <td>{electricity}</td>
                    <td>${cost}</td>
                </tr>
            )
        })
    }

    render() {
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Label</th>
                            <th>Emission</th>
                            <th>Electricity Used</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.fillResults()}
                    </tbody>
                </table>
            </div>
        )
    }
}