import React, { Component } from 'react'


import HomeTitle from '../Components/HomeTitle'
import NewButton from '../Components/NewButton'

class Home extends Component {
    render() {
        return (
            <div>
                <HomeTitle>This is a styled component header 1.</HomeTitle>
                <NewButton primary text="Primary" containerWidth="30%" />
                <NewButton text="Secondary" containerWidth="30%"/>
            </div>
        )
    }
}

export default Home;