import React, { useContext, useEffect, useState } from "react";
import ProductsContext from "../../ContextAPIS/ProductsContext";
import { useParams, useNavigate } from "react-router-dom";

const AddEditProduct = () => {
  const { AddProduct, UpdateProduct, GetOneProduct } =
    useContext(ProductsContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const prd = await GetOneProduct(id);
        if (prd) {
          setTitle(prd.title);
          setPrice(prd.price);
          setCategory(prd.category);
          setDescription(prd.description);
          setThumbnail(prd.thumbnail);
        }
      };
      fetchProduct();
    }
  }, [id, GetOneProduct]);

  const handleFileChange = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    setThumbnail(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      "title": title,
      "price": price,
      "category": category,
      "description": description,
      "thumbnail": thumbnail,
    };
    console.log(productData);

    if (id) {
      await UpdateProduct(id, productData);
      navigate("/products");
    } else {
      await AddProduct(productData);
      navigate("/products");
    }
  };

  return (
    <div className="container mt-3 ml-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="thumbnail" className="form-label">
            Thumbnail
          </label>
          <input
            type="file"
            className="form-control"
            id="thumbnail"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEditProduct;
