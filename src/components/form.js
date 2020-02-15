import React from "react";
import styled, { css } from 'styled-components'
import axios from "axios";

// STYLED COMPONENTS
const Input = styled.input`
  display: inline-block;
  border-radius: 3px;
  margin: 10px 5px 10px 5px;
  padding-left: 5px;
  width: 100%;
  height: 40px;
  background: #ddf0fb;
  color: black;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
`

const Submit = styled.button`
    display: inline-block;
    border-radius: 3px;
    margin: 10px 5px 10px 5px;
    width: 11rem;
    height: 60px;
    background: blue;
    color: white;
    border: 2px solid white;

    ${props => props.disabled && css`
        opacity: 0.5;
  `}
`

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: "",
            quantity: "",
            hours: "",
            watts: "",
        };
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    // FUNCTIONS

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    submit = async e => {
        e.preventDefault();
        console.log(this.state.label)
        const response = await axios({
            method: 'get',
            url: 'http://localhost:9000/get-cloverly-data?watts=70&hours=24'
        })

        console.log(response.data)
    }

    // RENDER

    render() {
        return (
            <div>
                <form>
                    <Input
                        name = "label"
                        value = {this.state.label}
                        type = "text"
                        placeholder = "label"
                        onChange = {this.onChange}
                    />
                    <Input
                        name = "quantity"
                        value = {this.state.quantity}
                        type = "text"
                        placeholder = "quantity"
                        onChange = {this.onChange}
                    />
                    <Input
                        name = "hours"
                        value = {this.state.hours}
                        type = "text"
                        placeholder = "hours"
                        onChange = {this.onChange}
                    />
                    <Input
                        name = "watts"
                        value = {this.state.watts}
                        type = "text"
                        placeholder = "watts"
                        onChange = {this.onChange}
                    />
                    <Submit
                        type = "submit"
                        onClick = {this.submit}
                        disabled = {!(this.state.label && this.state.quantity && this.state.hours && this.state.watts)}
                    >SUBMIT</Submit>
                </form>
            </div>
        )
    }
}