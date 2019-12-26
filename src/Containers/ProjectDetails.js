import React, { Component } from 'react'
import styled from 'styled-components'
import history from '../Components/history'
import Footer from '../Containers/Footer'
import Title from '../Components/Title'
import SectionText from '../Components/SectionText'

const Container = styled.div`
    padding-top: 65px;
    padding-bottom: 100px;
    width: 100%;
    background-color: #2b2d35;
    flex-direction: row;
    display: flex;
    @media only screen and (max-width: 768px) {
        padding-left: 10px;
        padding-right: 10px;
        flex-direction: column-reverse;
    }
    @media only screen and (min-width: 600px) {
        padding-left: 20px;
        padding-right: 20px;
    }
    @media only screen and (min-width: 992px) {
        padding-left: 100px;
        padding-right: 100px;
    }
`
const LeftHalf = styled.div`
    width: 50%;
    max-height: 100%;
    @media only screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 75px;
    }
`
const RightHalf = styled.div`
    width: 50%;
    max-height: 100%;
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`
const Image = styled.img`
    width: 100%;
`
const LinksContainer = styled.div`
    margin-top: 50px;
    width: 100%;
    flex-direction: row;
    display: flex;
    justify-content: left;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`
const Link = styled.a`
    text-align: center;
`

let projectID;

//----------TEMPORARY---------------
let projectTitle, projectTech, projectDesc, projectCategory, projectApple, projectAndroid;
//----------TEMPORARY---------------

export default class ProjectDetails extends Component {

    componentWillMount() {
        projectID = this.props.location.search;
        this.checkProjectID(projectID);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <LeftHalf>
                        <Title title={projectTitle} subtitle={projectCategory} />
                        <SectionText text={projectDesc} />
                        <LinksContainer>
                            <Link href={projectApple} target="_blank" >
                                <img style={{height: 50, marginTop: 10, marginBottom: 10}} src={require('../Images/appstore.svg')} />
                            </Link>
                            <Link href={projectAndroid} target="_blank" >
                                <img style={{height: 70}} src={require('../Images/playstore.png')} />
                            </Link>
                        </LinksContainer>
                        
                        
                    </LeftHalf>
                    <RightHalf>
                        <Image src={require('../Images/mob.png')} />
                    </RightHalf>

                </Container>
                <Footer />
            </React.Fragment>
        )
    }

    checkProjectID(ID) {
        if (ID != "?id=0" && ID != "?id=1" && ID != "?id=2") {
            history.push('404');
            window.location.reload();
        }
        else if (ID == "?id=0") {
            projectTitle = "BBQ Fast Food";
            projectDesc = "That's the way I look when I get home late; black and blue. Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned. You can work and carry-on and put lots of little happy things in here. Let's just drop a little Evergreen right here.";
            projectTech = "React Native";
            projectCategory = "Mobile Application";
            projectApple = "https://apps.apple.com/us/app/bbq-dostava/id1465941391";
            projectAndroid = "https://play.google.com/store/apps/details?id=com.aksifood2";
        }
        else if (ID == "?id=1") {
            projectTitle = "Master of Beer";
            projectDesc = "That's the way I look when I get home late; black and blue. Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned. You can work and carry-on and put lots of little happy things in here. Let's just drop a little Evergreen right here.";
            projectTech = "React Native";
            projectCategory = "Mobile Application";
            projectApple = "https://apps.apple.com/us/app/majstor-za-pivo/id1473955739";
            projectAndroid = "https://play.google.com/store/apps/details?id=com.majstorzapivo";
        }
        else if (ID == "?id=2") {
            projectTitle = "Zugma Car Pooling";
            projectDesc = "That's the way I look when I get home late; black and blue. Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned. You can work and carry-on and put lots of little happy things in here. Let's just drop a little Evergreen right here.";
            projectTech = "React Native";
            projectCategory = "Mobile Application";
        }
    }
}