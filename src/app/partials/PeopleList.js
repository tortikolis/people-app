import React, { Component } from 'react';
import {SinglePerson} from "./SinglePerson";
import {SinglePersonGrid} from "./SinglePersonGrid"


export class PeopleList extends Component {
    constructor(props){
        super(props);
        this.state = {
                        searchValue: ""
                    }
    }

    createList () {
        const filtered = this.props.userData.filter((user) => {
            return (`${user.name.first} ${user.name.last}`).includes(this.state.searchValue.toLowerCase())
        })
        if (filtered.length > 0){
            return (<div className="container collection ">
            {filtered.map((user, index) => {
                return this.props.isListView ? 
                          <SinglePerson user = {user} key={index.toString()}/> 
                        : <SinglePersonGrid user = {user} key={index.toString()}/>  
                })}
                </div>)
        } else {
            return (
                <div class="no-search-results container">
                    <i class="material-icons large">sentiment_neutral</i>
                    <p>We couldn't find any people matching your search</p>
                </div>
            )
        }
    } 

    render() {
        return (
            <React.Fragment>
                <div className="row">
                <div className="input-field container">
                        <i className="material-icons prefix">search</i>
                        <input type="text" className="validate" value={this.state.searchValue} onChange={(event) => this.setState({searchValue: event.target.value})}/>
                    </div>
                    
                    
                    {this.createList()}
                    
                
                </div>
            </React.Fragment>
        )
    }
}

