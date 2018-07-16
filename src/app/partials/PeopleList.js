import React, { Component, Fragment } from 'react';
import { SinglePerson } from "./SinglePerson";
import { SinglePersonGrid } from "./SinglePersonGrid"


export class PeopleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
            male: 0,
            female: 0
        }
    }

    createList() {
        const filtered = this.props.userData.filter((user) => {
            return (`${user.name.first} ${user.name.last}`).includes(this.state.searchValue.toLowerCase())
        })

        if (filtered.length > 0) {
            return (
                <Fragment>
                    <div className="grey-text right-align">
                        <span>Male:{`${this.getGenderStats(filtered)[0]} `}</span>
                        <span>Female:{this.getGenderStats(filtered)[1]}</span>
                    </div>
                    <div className="collection ">
                        {filtered.map((user, index) => {
                            return this.props.isListView ?
                                <SinglePerson user={user} key={index.toString()} />
                                : <SinglePersonGrid user={user} key={index.toString()} />
                        })}
                    </div>
                </Fragment>)
        } else {
            return (
                <div class="no-search-results container">
                    <i class="material-icons large">sentiment_neutral</i>
                    <p>We couldn't find any people matching your search</p>
                </div>
            )
        }
    }

    getGenderStats(userList) {
        let male = 0;
        let female = 0;

        userList.forEach(user => {
            user.gender === "male" ? male++ : female++
        });

        return [male, female]
    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="input-field container">
                        <i className="material-icons prefix">search</i>
                        <input type="text" className="validate" value={this.state.searchValue} onChange={(event) => this.setState({ searchValue: event.target.value })} />

                        {this.createList()}

                    </div>
                </div>
            </Fragment>
        )
    }
}

