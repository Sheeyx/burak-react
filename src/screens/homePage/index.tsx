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
import { setNewDishes, setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../lib/types/product";
import ProductService from "../../app/services/ProductService";
import { ProductCollection } from "../../lib/enums/products.enum";

// REDUX SLICE & SELECTOR
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
  setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
});

const popularDishesRetrieve = createSelector(
  retrievePopularDishes, 
  (popularDishes) => ({ popularDishes })
  );

export function HomePage(){
  const { setPopularDishes, setNewDishes } = actionDispatch(useDispatch());

  useEffect(()=>{
    const product = new ProductService();

    product
    .getProducts({
      page: 1,
      limit: 4,
      order: "productViews",
      productCollection: ProductCollection.DISH,
    })
    .then((data)=>{
      console.log("data passed here, Popular dishes", data);
      setPopularDishes(data);
    })
    .catch(err => console.log(err));

    product
    .getProducts({
      page: 1,
      limit: 4,
      order: "createdAt",
    })
    .then((data)=>{
      console.log("data passed here, NewDishes", data);
      setNewDishes(data);
    })
    .catch(err => console.log(err));
  }, []);

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