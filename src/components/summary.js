import React, { Component } from "react";
import styled, { css } from 'styled-components'
import * as summary from "./summary.json";

export default class Summary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.fillSummary = this.fillSummary.bind(this);
    }
  
    // componentDidUpdate = () => {
    //   this.fillResults();
    // }

    fillSummary = () => {
        const summary2 = summary.default.summary;
        return (
            <ul>
                <li>Total Emission: {summary2.totalEmission}</li>
                <li>Total Electricity: {summary2.totalElectricity}</li>
                <li>Total Cost: {summary2.totalCost}</li>
            </ul>
        )
    }

    render() {
        return(
            <div>
                <div>
                    {this.fillSummary()}
                </div>
            </div>
        )
    }
}