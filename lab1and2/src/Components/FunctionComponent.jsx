import useFetch from '../Fetch.js';
import React, { useState, useEffect } from 'react';
import '../Styles/FunctionComp.module.css';

const FunctionComponent = () => {
    const [products, getCategories] = useFetch();
    const [searchProducts, setSearchProducts] = useState([]);
    let [min,setMin]=useState(0);
    let [max,setMax]=useState(6);
    let [pageNumber,setPageNumber]=useState(1);
    let [pages,setPages]=useState(1);
    const search = () => {
        let query = document.querySelector('#searchInput').value;
        let result = products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
        setSearchProducts(result);
        setPages(Math.ceil(result.length/6))
        setPageNumber(1);
        setMin(0);
        setMax(6);
    };
    const NextProduct = () => {
        const newMin = min + 6;
        const newMax = max + 6;
        if (newMax >= products.length+1) {
           setMin(0);
           setMax(6);
        } else {
            setMin(newMin);
            setMax(newMax);
        }
    }

    const PrevProduct = () => {
        const newMin = min - 6;
        const newMax = max - 6;
        if (newMin < 0) {
            setMin(products.length - 6);
            setMax(products.length);
            setPageNumber(Math.ceil(products.length/6));
        } else {
            setMin(newMin);
            setMax(newMax);
        }
    }
    const clearResult = () => {
        document.querySelector('#searchInput').value = '';
        setSearchProducts([]);
        setPages(Math.ceil(products.length/6))
        
    };

    const getCategory = (category) => {
        let result = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
        setSearchProducts(result);
        setPages(Math.ceil(result.length/6))
        setPageNumber(1);
        setMin(0);
        setMax(6);
    };
    const paginate=(pageNumber)=>{
        setPageNumber(pageNumber);
        setMin(pageNumber*6-6);
        setMax(pageNumber*6);
    }
    useEffect(()=>{
        setPages(Math.ceil(products.length/6))
    },[products])


    const productsToDisplay = searchProducts.length > 0 ? searchProducts : products;

    return (
        <div className="container mt-5">
            <div className='row mb-4'>
                <div className="col-md-8">
                    <div className="input-group">
                        <input type='text' className='form-control' placeholder='Search' id="searchInput" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" onClick={search}>
                                <i className="fas fa-search"></i>
                            </button>
                            <button className="btn btn-outline-secondary" type="button" onClick={clearResult}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row gx-2">
                        <div className="col-md-6">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Filter by Category
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    {getCategories.map((category, index) => (
                                        <a key={index} className="dropdown-item" onClick={() => getCategory(category)}>
                                            {category}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <button className="btn btn-outline-secondary" type="button" onClick={clearResult}>
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {productsToDisplay.map((product, index) => {
                    if (index >= min && index < max){
                        return(
                                <div key={index} className="col-md-4 mb-4">
                                    <div className="card h-100">
                                        <img src={product.thumbnail} className="card-img-top img-fluid" style={{ height: "300px" }} alt="product" />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">Price: {product.price}</p>
                                            <p className="card-text">Rating: {product.rating}</p>
                                            <p className="card-text">Brand: {product.brand}</p>
                                            <p className="card-text">Category: {product.category}</p>
                                        </div>
                                    </div>
                                </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="row justify-content-center d-flex">
            <div className="col-md-3">
                <button className="btn btn-dark btn-block mb-3" onClick={PrevProduct}>Previous</button>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
                {Array.from({length:pages},(_,index)=>(
                    <button key={index} className="btn btn-dark btn-block mx-1" onClick={()=>paginate(index+1)}>{index+1}</button>
                ))}
            </div>
            <div className="col-md-3">
                <button className="btn btn-dark btn-block mb-3" onClick={NextProduct}>Next</button>
            </div>
        </div>

        </div>
    );
};

export default FunctionComponent;
