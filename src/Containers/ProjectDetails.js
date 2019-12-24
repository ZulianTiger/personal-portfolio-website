import React, { Component } from 'react'
import styled from 'styled-components'
import history from '../Components/history'
import Footer from '../Containers/Footer'

const Container = styled.div`
    padding-top: 65px;
    width: 100%;
    background-color: #2b2d35;
    min-height: 100vh;
`
const Title = styled.h2`
    color: #fafafa;

`

let projectID;

//----------TEMPORARY---------------
let projectTitle, projectTech, projectDesc, projectCategory
//----------TEMPORARY---------------

export default class ProjectDetails extends Component {

    componentWillMount() {
        projectID = this.props.location.search;
        this.checkProjectID(projectID);
        window.scrollTo(0, 0);
    }

    checkProjectID(ID) {
        if (ID != "?id=0" && ID != "?id=1" && ID != "?id=2") {
            history.push('404');
            window.location.reload();
        }
        else if (ID == "?id=0") {
            projectTitle = "BBQ Fast Food";
            projectDesc = "That's the way I look when I get home late; black and blue. Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned. You can work and carry-on and put lots of little happy things in here. Let's just drop a little Evergreen right here.";
            projectTech = "React Native"
            projectCategory = "Mobile Application"
        }
        else if (ID == "?id=1") {
            projectTitle = "Master of Beer";
            projectDesc = "That's the way I look when I get home late; black and blue. Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned. You can work and carry-on and put lots of little happy things in here. Let's just drop a little Evergreen right here.";
            projectTech = "React Native"
            projectCategory = "Mobile Application"
        }
        else if (ID == "?id=2") {
            projectTitle = "Zugma Car Pooling";
            projectDesc = "That's the way I look when I get home late; black and blue. Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned. You can work and carry-on and put lots of little happy things in here. Let's just drop a little Evergreen right here.";
            projectTech = "React Native"
            projectCategory = "Mobile Application"
        }
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Title>{projectTitle}</Title>
                    <h2>Project details page</h2>
                    <h2>this.props {JSON.stringify(this.props)}</h2>
                </Container>
                <Footer />
            </React.Fragment>
        )
    }
}