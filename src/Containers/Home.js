import React, { Component } from 'react'


import HomeTitle from '../Components/HomeTitle'
import NewButton from '../Components/NewButton'

class Home extends Component {
    render() {
        return (
            <div>
                <HomeTitle>This is a styled component header 1.</HomeTitle>
                <NewButton text="Mahmut"/>
            </div>
        )
    }
}

export default Home;