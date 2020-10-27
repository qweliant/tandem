import React from 'react';
import { Card } from 'antd';



const TriviaCard = (props) =>{
    return (
        <React.Fragment>
            <Card title={props.name} extra={<a href="#">More</a>} style={{ width: 800 }}>
                <p>{props.question}</p>
            </Card>
        </React.Fragment>
    );
};


export default TriviaCard;