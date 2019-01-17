import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Media } from 'reactstrap';

class Catalog extends Component {

	constructor (props, context) {
		super(props, context);
		this.state = {
			items : [

					{ 
						id: 0,
						name: 'Helmet', 
						image: '/assets/images/helmet.jpg', 
						category: 'safety', 
						label: 'ultra safe', 
						price: '4.99', 
						description: 'Un casco de seguridad útil para proteger en ámbitos como la construcción, fabricas y otros' 
					}, 
					{ 
						id: 1,
						name: 'Audio protector', 
						image: '/assets/images/audio.jpg', 
						category: 'safety', 
						label: 'noise filter', 
						price: '12.99', 
						description: 'Protege de ruidos auditivos por encima de los decibeles considerados aceptables' 
					}, 
					{ 
						id: 2,
						name: 'Glasses', 
						image: '/assets/images/glasses.jpg', 
						category: 'safety', 
						label: 'New technology', 
						price: '31.99', 
						description: 'Permite filtrar rayos ultravioleta, material anti rayas, anti caidas' 
					}, 
					{ 
						id: 3,
						name: 'Gloves', 
						image: '/assets/images/gloves.jpg', 
						category: 'safety', 
						label: '', 
						price: '12.99', 
						description: 'Hechos de algodón con goma antideslizante, especial para industria química.' 
					}
			]
		}
	}

	render() {
		const catalog = this.state.items.map(item => {
			return (
					<div key={item.id} className="col-12 mt-5">
						<Media tag="li">
							<Media left middle>
								<Media object src={item.image} alt={item.name}/>
							</Media>
							<Media body classname="ml-5">
								<Media heading>{item.name}</Media>
							</Media>
						</Media>
					</div>
				);
		});
		return (
			<div className='container'>
				<div className="row">
					<Media list>
						{catalog}
					</Media>
				</div>
			</div>
			);
	}
}

export default Catalog;

