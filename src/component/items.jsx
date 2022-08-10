import './items.css';
import QuantityPicker from "./quantityPicker";
import{useState} from 'react';
const Item = (props)=> {
    const [quantityState, setQuantity] = useState(1);
    const addCart = () => {
        console.log(props.data.title)
    };
    const onQuantityChange = (quantity) =>{
        console.log('quantity changed', quantity);
        setQuantity(quantity);
    }

    return (
        <div className="item">
            <img src={'/images/'+props.data.image}></img>
            <h3>{props.data.title}</h3>
            <label>Category: {props.data.category}</label>
                     <label>Price: {props.data.price.toFixed(2)}</label>
            <QuantityPicker className='picker' onChange={onQuantityChange}></QuantityPicker>
            <div>
                <label>Total: ${((props.data.price)*(quantityState)).toFixed(2)}</label>

                <button id='addButton' className='btn btn-success' onClick={addCart}>Add to cart</button>
            </div>
        </div>
    );
}

export default Item;