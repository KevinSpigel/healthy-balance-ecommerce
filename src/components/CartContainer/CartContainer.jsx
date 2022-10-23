import './CartContainerStyles/CartContainerStyles.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


export const CartContainer = () => {

    const value = useContext(CartContext);
    const { cartProducts, getTotalPrice, removeItem } = value;

    return (
        <div>

            <div style={{ width: "650px" }}>
                {
                    cartProducts.map((product) => (
                        <div >
                            <Card className="borderCard m-4 h5">
                                <Card.Body className="cartProductDiv" >
                                    <Card.Text><img className="imgCart" src={product.imgProduct} alt={product.name}></img></Card.Text>
                                    <Card.Text><div>{product.name}</div></Card.Text>
                                    <Card.Text><div>${product.price}</div></Card.Text>
                                    <Card.Text><div>{product.quantity}</div></Card.Text>
                                    <Card.Text><div>${product.quantityPrice}</div></Card.Text>
                                    <Card.Text> <Button className="removeProductButton" onClick={() => removeItem(product.id)}><FontAwesomeIcon className="fa-light" icon={faTrash}></FontAwesomeIcon></Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }
            </div>

            <Card className="totalPrice h3">Precio total: ${getTotalPrice()} </Card>

        </div>
    )
}