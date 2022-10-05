import './ItemList.css';

import { Item } from '../Item/Item';



export const ItemList = ({ items }) => {

    return (
        <div>
            <div>Item List</div>
            <div>
                {
                    items.map(element => (
                        <Item key={element.id} item={element} />
                    ))
                }
            </div>
        </div>
    )
};



