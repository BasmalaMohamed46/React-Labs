import React, { useContext, useEffect, useState } from 'react';
import ProductsContext from '../../ContextAPIS/ProductsContext';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { GetOneProduct } = useContext(ProductsContext);
    let { id } = useParams();
    let [prd, setPrd] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const prd = await GetOneProduct(id);
            console.log(prd);
            setPrd(prd);
        };
        fetchProduct();
    }, [id, GetOneProduct]);

    return (
        <div className="container mt-3 ml-3">
            <h1 className="text-center mb-4">Product Details</h1>
            <div className="d-flex justify-content-center">
                <div className="card border-dark" style={{ maxWidth: '400px' }}>
                    {prd ? (
                        <>
                            <img
                                src={prd.thumbnail ? prd.thumbnail : "https://source.unsplash.com/random"}
                                className="card-img-top"
                                height="200"
                                alt="Product"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{prd.title}</h5>
                                <p className="card-text"><strong>Price:</strong> ${prd.price}</p>
                                <p className="card-text"><strong>Category:</strong> {prd.category}</p>
                                <p className="card-text"><strong>Description:</strong> {prd.description}</p>
                                <a href={`/edit/${prd.id}`} className="btn btn-dark">Edit</a>
                            </div>
                        </>
                    ) : (
                        <h1>Loading...</h1>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
