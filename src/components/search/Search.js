import React, { Component } from 'react';
import ImageResults from "../image-results/ImageResults";
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';

class Search extends Component {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '12601819-a1e9f1a080471d3f92e74a6a1',
        images: []
    }

    onTextChange = e => {
        const val = e.target.value
        this.setState({
            [e.target.name] : val
        }, () => {
            if (val === '') {
                this.setState({images: []})
            } else {
                axios
                .get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                .then(res => this.setState({images: res.data.hits}))
                .catch(err => console.log(err))
            }
        });
    };

    onAmountChange = (e, index, value) => {
        this.setState({
            amount: value
        })
    }

    render() {
        console.log(this.state.images)
        return (
            <div>
                <TextField
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="Search For Image"
                    fullWidth={true}
                />
            <br/>
                <SelectField
                    name="amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    floatingLabelText="Amount"
                >
                    <MenuItem value={5} primaryText="5" />
                    <MenuItem value={10} primaryText="10" />
                    <MenuItem value={15} primaryText="15" />
                    <MenuItem value={30} primaryText="30" />
                    <MenuItem value={50} primaryText="50" />
                </SelectField>
            <br />
                {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null }
            </div>
        )
    }
}

export default Search;
