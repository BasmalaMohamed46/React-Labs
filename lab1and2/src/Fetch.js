import { useState, useEffect ,useMemo} from "react";
import axios from "axios";
const useFetch =()=>{
    const [products,setProducts] = useState([]);
    useEffect(()=>{
       axios.get("https://dummyjson.com/products") 
       .then(res => {
            setProducts(res.data.products)
       }).catch(err => console.log(err))
    },[]);
    const getCategories=useMemo(()=>{
        const categories = products.map(product => product.category);
        return [...new Set(categories)];
    })
   return [products,getCategories]
}

export default useFetch;