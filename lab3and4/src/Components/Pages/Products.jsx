import React ,{ useContext } from 'react';
import ProductsContext from '../../ContextAPIS/ProductsContext.jsx';

const Products = () => {
    let {Products,DeleteProduct,AddToCart} = useContext(ProductsContext);
    console.log(Products);
    return (
        <div className="container mt-3 ml-3 mb-3">
        <h1>Products Page</h1>
        <div >
        <div className='row'>
                {Products?(Products.map((product) => (
                    <div className='col-md-4' key={product.id}>
                        <div className='card mb-2'>
                            <img src={product.thumbnail ? product.thumbnail : "https://source.unsplash.com/random"} class="card-img-top" height="250px" alt="..." />
                            <div className='card-body'>
                                <h5 className='card-title'>{product.title}</h5>
                                <h5 className='card-title'>Price: {product.price}</h5>
                                <div className='d-flex justify-content-between'>
                                <button className='btn btn-danger' onClick={()=>DeleteProduct(product.id)}>Delete</button>
                                <button className='btn btn-dark' onClick={()=>AddToCart()}>Add to Cart</button>
                                <a href={`/products/${product.id}`} className='btn btn-dark'>Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))):(<h1>Loading...</h1>)}
                </div>
        </div>
    </div>
    );
};

export default Products;