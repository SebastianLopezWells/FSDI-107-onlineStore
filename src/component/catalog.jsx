import './catalog.css';
import Item from './items';
import { useEffect,useState } from 'react';
import DataService from  '../dataService';

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [categorys, setCategories] = useState([]);
    const loadData = () => {
        let service = new DataService(); //Instance of a class
        let prods = service.getCatalog();
        setProducts(prods);
        let uniques = [];
    for(let i =0; i<prods.length;i++){
        let prod = prods[i];
        if(!uniques.includes(prod.category)){
            uniques.push(prod.category);
        }
    }
    setCategories(uniques);
     };

     
    useEffect(() => {
        loadData();
    },[]);

    return(
    <div className="catalog">
        <h1>Our Catalog</h1>
        <div className='Filters'>
                {categorys.map((item) => (
                    <button className='btn btn-secondary category'>{item}</button>
                ))}
            </div>
        <div className="product-list">
            {products.map((prod)=> (
            <Item data={prod}></Item>
            )) }
        </div>
    </div>);
};

export default Catalog;