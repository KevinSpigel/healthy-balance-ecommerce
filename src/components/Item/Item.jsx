import '../Item/ItemStyles/ItemStyles.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Item = ({ item }) => {

    return (

        <div className="itemDiv">
            <Card className="cardDiv">
                <Card.Img src={item.imgProduct} alt={item.name} />
                <Card.Body >
                    <Card.Title>{item.name} - ${item.price}</Card.Title>
                    <ItemCount />
                    <Link to={`/item/${item.id}`}><Button variant="primary">Ver detalle</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
};
