import React from "react";
import { Container, Stack, Box } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";

import CardOverflow from "@mui/joy/CardOverflow";
import { DescriptionOutlined, Visibility } from "@mui/icons-material";
import Divider from "../../app/components/divider/index";

import { useSelector } from "react-redux";
import { retrieveNewDishes } from "./selector";
import { createSelector } from "@reduxjs/toolkit";
import { Product } from "../../lib/types/product";
import { serverAPI } from "../../lib/config";
import { ProductCollection, ProductVolume } from "../../lib/enums/products.enum";

const newDishesRetrieve = createSelector(
  retrieveNewDishes, 
  (newDishes) => ({ newDishes })
  );

export default function NewDishes() {
  const {newDishes} = useSelector(newDishesRetrieve);
  console.log("newDishes",newDishes);

  return (
    <div className="new-products-frame">
    <Container>
      <Stack className="main">
        <Box className="category-title">Fresh Menu</Box>
        <Stack className="cards-frame">
          <CssVarsProvider>
          {newDishes.length !== 0 ? (
                newDishes.map((product:Product, index) => {
                  const imagePath = `${serverAPI}/${product.productImages[0]}`;
                  const sizeVolume = product.productCollection === 
                  ProductCollection.DRINK 
                  ? product.productVolume + "l" 
                  : product.productSize + " SIZE"
                  return (
                    <Card className="card" variant="outlined" key={product._id}>
                      <CardOverflow>
                        <div className="product-sale">{sizeVolume}</div>
                        <AspectRatio ratio="1">
                          <img src={imagePath} loading="lazy" alt="" />
                        </AspectRatio>
                      </CardOverflow>

                      <CardOverflow variant="soft" className="product-detail">
                        <Stack className="info">
                          <Stack flexDirection={"row"}>
                            <Typography className="title">
                              {product.productName}
                            </Typography>
                            <Divider width="2" height="24" bg="#d9d9d9" />
                            <Typography className="price">${product.productPrice}</Typography>
                          </Stack>
                          <Stack>
                            <Typography className="views">
                              {product.productViews}
                              <Visibility
                                sx={{ fontSize: 25, marginLeft: "5px" }}
                              />
                            </Typography>
                          </Stack>
                        </Stack>
                      </CardOverflow>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">New Products are not availabe!</Box>
              )}
          </CssVarsProvider>
        </Stack>
      </Stack>
    </Container>
  </div>
  );
}