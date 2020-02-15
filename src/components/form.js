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

const Button = styled.button`
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
            items: [],
            item: {},
            label: "",
            quantity: "",
            hours: "",
            watts: "",
            i: 0
        };
        this.onChange = this.onChange.bind(this);
        this.next = this.next.bind(this);
        this.submit = this.submit.bind(this);
        this.numberVerify = this.numberVerify.bind(this);
    }

    // FUNCTIONS

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    numberVerify = e => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.onChange(e);
        };
    };

    next(e) {
        e.preventDefault();
        this.state.item = {
            "id": this.state.i,
            "label": this.state.label,
            "quantity": this.state.quantity,
            "hours": this.state.hours,
            "watts": this.state.watts
        }
        this.state.items.push(this.state.item)
        this.state.i++;
        this.setState({
            label: "",
            quantity: "",
            hours: "",
            watts: ""
        })
        // console.log(this.state.items)
    }

    // back(e) {
    //     e.preventDefault();
    //     this.setState({
    //         "label": this.state.item.label,
    //         "quantity": this.state.item.quantity,
    //         "hours": this.state.item.hours,
    //         "watts": this.state.item.watts
    //     })
    // }

    submit = async e => {
        this.next(e);
        e.preventDefault();
        let send = {"results" : this.state.items}
        // console.log(send)
        const response = await axios({
            method: 'post',
            url: 'https://hopeful-blackwell-eefe4f.netlify.com/.netlify/functions/get-cloverly-details',
            data: send
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
                        onChange = {this.numberVerify}
                    />
                    <Input
                        name = "hours"
                        value = {this.state.hours}
                        type = "text"
                        placeholder = "hours"
                        onChange = {this.numberVerify}
                    />
                    <Input
                        name = "watts"
                        value = {this.state.watts}
                        type = "text"
                        placeholder = "watts"
                        onChange = {this.numberVerify}
                    />
                    {/* <Button
                        onClick = {this.next}
                        disabled = {(this.state.i < 1)}
                    >BACK</Button> */}
                    <Button
                        onClick = {this.next}
                        disabled = {!(this.state.label && this.state.quantity && this.state.hours && this.state.watts)}
                    >NEXT</Button>
                    <Button
                        type = "submit"
                        onClick = {this.submit}
                        disabled = {!(this.state.label && this.state.quantity && this.state.hours && this.state.watts)}
                    >SUBMIT</Button>
                </form>
            </div>
        )
    }
}