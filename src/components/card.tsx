import * as React from 'react';
import '../css/Card.css';
import '../css/Card-responsive.css';


interface cardProps {
    imgCover: string
    publishdate: string
    title: string
    description: string
    imgSelf: string
    name: string
}

class Card extends React.Component<cardProps> {
    render() {
        return (
        <div className='card'>
            <img src={this.props.imgCover} alt="" className='imgCover' />
            <div className='post'>
                <span className='category'>Learning </span>
                <p className='publishdate'>{this.props.publishdate}</p>
                <h1 className='title'><a href='http://localhost:3000/'>{this.props.title}</a></h1>
                <p className='description'>{this.props.description}</p>
            </div>
            <div className='user'>
                <img src={this.props.imgSelf} alt="" className='imgSelf' />
                <p className='name'>{this.props.name}</p>
            </div>
        </div>);
    }
}

export default Card;