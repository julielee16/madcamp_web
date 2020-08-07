import React from 'react';
import './uiEquip.css';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

const ClothesCard = (props) => {
    return (
        <div className="card-container">
            {/* <img src={props.image} alt="" />
            <div className="desc">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <p>{props.published}</p>
            </div> */}
            <Card shadow={0} style={{width: "600", height: "1800", margin: "30px"}}>
                <img src={props.image} alt="" style={{paddingTop:"20px"}}/>
                <CardTitle style={{color: '#000', height: '120px'}} >{props.title}</CardTitle>
                <CardText style={{fontSize:"18px"}}>
                    <b>{props.author}원</b>
                </CardText>
                <CardText>
                    브랜드: {props.published}
                </CardText>
                <CardActions border>
                    <Button colored>Buy</Button>
                    <Button colored>Browse</Button>
                    <Button colored>Like</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
        </div>

    )
}

export default ClothesCard;