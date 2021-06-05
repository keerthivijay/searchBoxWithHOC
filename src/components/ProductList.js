import React from 'react';
import products from './products.json';
import ProductCard from './ProductCard';
import WithSearch from './WithSearch';


const ProductList = props => {

    const filterProducts = searchTerm => {

        if(props.searchTerm.length>0) {
            return products.filter( product => {
    
                let str = `${product.title} ${product.style} ${product.sku}`.toUpperCase();
        
                return str.indexOf((searchTerm).toUpperCase()) >=0;
            });
        } else {
            return products;
        }
    }

    let fileterProducts= filterProducts(props.searchTerm);

    return(

        <div>
            <div>
                <div>
                <h2>Products</h2>
                </div>
            </div>
            <div>
                {fileterProducts.map(product => {
                    return  <ProductCard key={product.sku} {...product} />
                })}
            </div>
        </div>
    )
}

export default WithSearch(ProductList);;