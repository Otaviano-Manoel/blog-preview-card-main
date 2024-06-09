import React from "react";
import  '../css/challenge_Info.css'


interface Challenge_InfoProps {
    link: string
}
 
class Challenge_Info extends React.Component<Challenge_InfoProps> {
    render() { 
        const myProfile: string = "https://www.frontendmentor.io/profile/Otaviano-Manoel";

        return (<div className="info">
            <p>Challenge by <a href={this.props.link} target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.</p>
            <p>Coded by <a href={myProfile} target="_blank" rel="noopener noreferrer">Otaviano-Manoel</a>.</p>
        </div>);
    }
}
 
export default Challenge_Info;