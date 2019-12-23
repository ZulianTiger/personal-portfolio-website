import React, { Component } from 'react'
import styled from 'styled-components'

export default class ProjectDetails extends Component {
    render() {
        return (
            <div>
                <h1>Project ID: {this.props.location.search}</h1>
                <h2>Project details page</h2>
                <h2>this.props {JSON.stringify(this.props)}</h2>
            </div>
        )
    }
}