import React, { useEffect, useState } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisment from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../lib/types/product";
import ProductService from "../../app/services/ProductService";
import { ProductCollection } from "../../lib/enums/products.enum";

// REDUX SLICE & SELECTOR
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});

const popularDishesRetrieve = createSelector(
  retrievePopularDishes, 
  (popularDishes) => ({ popularDishes })
  );

export function HomePage(){
  const { setPopularDishes } = actionDispatch(useDispatch());
  const {popularDishes} = useSelector(popularDishesRetrieve);
  console.log(process.env.REACT_APP_API_URL);
  

  useEffect(()=>{
    const product = new ProductService();

    product.getProducts({
      page: 1,
      limit: 4,
      order: "productViews",
      productCollection: ProductCollection.DISH,
    })
    .then((data)=>{
      console.log("data passed here", data);
      setPopularDishes(data);
    })
    .catch(err => console.log(err));
  }, []);

  console.log("popularDishes", popularDishes)

  return (
    <div className="homepage">
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisment />
      <ActiveUsers />
      <Events />
    </div>
  );
  }