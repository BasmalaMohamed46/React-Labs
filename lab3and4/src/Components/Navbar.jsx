import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductsContext from "../ContextAPIS/ProductsContext";
import { useSelector } from "react-redux";

import React from "react";

const Navbar = () => {
  let {CartItemsNumber} = useContext(ProductsContext);
  const cartItemsNumber = useSelector(state => state.Users.cartItemsNumber);
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-black p-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center">
              <li class="nav-item">
                <Link
                  class="nav-link active link-light"
                  aria-current="page"
                  to="/"
                >
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active link-light"
                  aria-current="page"
                  to="/create"
                >
                  Add Product
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active link-light"
                  aria-current="page"
                  to="/usersRedux"
                >
                  Redux Users
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active link-light"
                  aria-current="page"
                  to="/createRedux"
                >
                  Add Redux User
                </Link>
              </li>
            </ul>
            <div >
              <h4 className="userNum">{cartItemsNumber}</h4>
            </div>
            <div className="m-2">
                <i class="fas fa-user text-light "></i>
            </div>

            <div >
              <h4 className="cartNum">{CartItemsNumber}</h4>
            </div>
            <div className="mr-5">
                <i class="fas fa-shopping-cart text-light"></i>
              </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
