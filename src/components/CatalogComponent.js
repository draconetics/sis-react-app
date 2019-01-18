import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, CardText} from "reactstrap";

//components
import ItemDetail from './itemDetailComponent'
class Catalog extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedItem : null
        };

        console.log("constructor es invocado");
    }

    componentDidMount() {
        console.log("constructor did mount.");
    }

    render() {
        let catalog = this.props.items.map(item => {
            return (
                <div key={item.id} className="col-md-5 col-12  mt-5">
                    <Card onClick={()=>this.onItemSelect(item)}>
                        <CardImg width="100%" src={item.image} alt={item.name}/>
                        <CardImgOverlay>
                            <CardTitle>{item.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                        {catalog}
                </div>
                <div className="row mt-5 mb-5">

                        {this.renderItem(this.state.selectedItem)}
                </div>
            </div>
        );
    }

    renderItem(item) {
        if (item != null) {
            return (
                <ItemDetail itemDetail={item}/>
            );
        } else {
            return ( <div/>);
        }

    }

    onItemSelect(item) {
        console.log("click item");
        this.setState({selectedItem:item});
    }
}

export default Catalog;