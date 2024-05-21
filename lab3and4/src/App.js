import logo from "./logo.svg";
import "./App.css";
import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./Components/Pages/ProductDetails";
import AddEditProduct from "./Components/Pages/AddEditProduct";
import StandardErrorBoundary from "./Components/StandardErrorBoundary";
import NotFound from "./Components/Pages/NotFound";
import Navbar from "./Components/Navbar";
import { ProductsContextProvider } from "./ContextAPIS/ProductsContext.jsx";
import UserDetailsRedux from "./Components/ReduxPages/UserDetailsRedux.jsx";
import UsersRedux from "./Components/ReduxPages/UsersRedux.jsx";
import AddEditUserRedux from "./Components/ReduxPages/AddEditUserRedux.jsx";
const Products = lazy(() => import("./Components/Pages/Products.jsx"));
function App() {
  return (
    <div className="App">
      <StandardErrorBoundary>
        <ProductsContextProvider>
          <Suspense
            fallback={
              <div className="text-center mt-5">
                <div class="spinner-loader text-dark" role="status">
                  <span class="visually-hidden">Loading....</span>
                </div>
              </div>
            }
          >
            <BrowserRouter>
              <Navbar />
              <Routes>
                {["products", "/"].map((path, index) => {
                  return (
                    <Route path={path} element={<Products />} key={index} />
                  );
                })}
                <Route path="/usersRedux" element={<UsersRedux/>} />
                <Route path="/usersRedux/:id" element={<UserDetailsRedux />} />
                <Route path="/createRedux" element={<AddEditUserRedux />} />
                <Route path="/editRedux/:id" element={<AddEditUserRedux />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/create" element={<AddEditProduct />} />
                <Route path="/edit/:id" element={<AddEditProduct />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </Suspense>
        </ProductsContextProvider>
      </StandardErrorBoundary>
    </div>
  );
}

export default App;
