import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import history from '../Components/history'

let projectID;

export default class ProjectDetails extends Component {

    componentWillMount() {
        projectID = this.props.location.search;
        this.checkProjectID(projectID);
    }

    checkProjectID (ID) {
        if (ID != "?id=0" && ID != "?id=1" && ID != "?id=2"){
            history.push('404');
            window.location.reload();
        }
    }

    render() {
        return (
            <div>
                <h1>Project ID: {projectID}</h1>
                <h2>Project details page</h2>
                <h2>this.props {JSON.stringify(this.props)}</h2>
            </div>
        )
    }
}