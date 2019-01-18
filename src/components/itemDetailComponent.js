import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody,CardSubtitle,Button,ListGroup,ListGroupItem,ListGroupItemHeading,ListGroupItemText} from "reactstrap";

class ItemDetail extends Component{
    constructor (props, context) {
        super(props,context);
    
    }

    render() {
        const item = this.props.itemDetail;

        
        let comments = item.comments.map(comment => {
            return (
                    <ListGroupItem key={comment.id}>
                    <ListGroupItemHeading>{comment.author} - (Rating:{comment.rating})</ListGroupItemHeading>
                    <ListGroupItemText>{comment.comment}</ListGroupItemText>
                    </ListGroupItem>
            );
        });



        
        return <div className='ItemDetail'>
                <div className = 'row'>
                <div className="col-xs-12 col-sm-12 col-md-5 col-12" >
                    <Card >
                        <CardTitle>{item.name}</CardTitle>
                        
                        <CardImg width="100%" src={item.image} alt={item.name}/>
                        <CardBody>
                            
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>{item.description}</CardText>
                            <Button color="primary">Like</Button>

                            <Button color="secundary">Share</Button>
                        </CardBody>
                </Card>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-12">
                    <ListGroup>{(comments)?comments:'<div/>'}</ListGroup>
                </div>
            </div>
            </div>;
    }


}

export default ItemDetail;