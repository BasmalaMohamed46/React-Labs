import axios from 'axios';
import React, { createContext, useEffect, useMemo, useState } from 'react';

const ProductsContext = createContext();

export const ProductsContextProvider = (props) => {
    const [Products, setProducts] = useState(null);
    const [CartItemsNumber, setCartItemsNumber] = useState(0);
    const { children } = props;

    const GetAllProducts = () => {
        axios.get("http://localhost:2000/products")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    };

    const DeleteProduct = (id) => {
        axios.delete(`http://localhost:2000/products/${id}`)
            .then(res => {
                console.log(res.data);
                GetAllProducts();
            })
            .catch(err => console.log(err));
    };

    const GetOneProduct = (id) => {
        return axios.get(`http://localhost:2000/products/${id}`)
            .then(res => res.data)
            .catch(err => {
                console.log(err);
                return null;
            });
    };

    const AddProduct = async (prd) => {
       await axios.post("http://localhost:2000/products", prd)
        .then(res => {
            setProducts([...Products, res.data]);
        })
        .catch(err => console.log(err));
    };

    const UpdateProduct = async (id, prd) => {
        await axios.put(`http://localhost:2000/products/${id}`, prd)
        .then(res => {
            setProducts(Products.map(p => p.id === id ? prd : p));
            GetAllProducts();
        })
        .catch(err => console.log(err));
    }
    const AddToCart=()=>{
        setCartItemsNumber(CartItemsNumber+1);
    }

    useEffect(() => {
        GetAllProducts();
    }, []);

    const ContextValue = useMemo(() => ({ Products,CartItemsNumber, DeleteProduct, GetOneProduct, AddProduct, UpdateProduct,AddToCart }), [Products, CartItemsNumber,DeleteProduct, GetOneProduct, AddProduct, UpdateProduct,AddToCart]);

    return (
        <ProductsContext.Provider value={ContextValue}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContext;
