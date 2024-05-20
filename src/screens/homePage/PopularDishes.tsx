import React from "react";
import { Container, Stack, Box } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

import CardOverflow from "@mui/joy/CardOverflow";

import { DescriptionOutlined, Visibility } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { retrievePopularDishes } from "./selector";
import { createSelector } from "@reduxjs/toolkit";
import { Product } from "../../lib/types/product";
import { serverAPI } from "../../lib/config";

const popularDishesRetrieve = createSelector(
  retrievePopularDishes, 
  (popularDishes) => ({ popularDishes })
  );


export default function PopularDishes() {
  const {popularDishes} = useSelector(popularDishesRetrieve);

  return (
    <div className="popular-dishes-frame">
      <Container>
        <Stack className="popular-section">
          <Box className="category-title">Popular Dishes</Box>
          <Stack className="cards-frame">
            {popularDishes.length !== 0 ? (
              popularDishes.map((ele:Product, index) => {
                const imagePath = `${serverAPI}/${ele.productImages[0]}`
                console.log("imagePath",imagePath);
                
                return (
                  <CssVarsProvider key={ele._id}>
                    <Card className="card">
                      <CardCover>
                        <img src={imagePath} loading="lazy" alt="" />
                      </CardCover>
                      <CardCover className="card-cover" />
                      <CardContent sx={{ justifyContent: "flex-end" }}>
                        <Stack
                          flexDirection={"row"}
                          justifyContent={"space-between"}
                        >
                          <Typography
                            level="h2"
                            fontSize="lg"
                            mb={1}
                            textColor="#fff"
                          >
                            {ele.productName}
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "md",
                              color: "neutral.300",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            {ele.productViews}
                            <Visibility
                              sx={{ fontSize: 25, marginLeft: "5px" }}
                            />
                          </Typography>
                        </Stack>
                      </CardContent>
                      <CardOverflow
                        sx={{
                          display: "flex",
                          gap: 1.5,
                          py: 1.5,
                          px: "var(--Card-padding)",
                          borderTop: "1px solid",
                          height: "60px",
                        }}
                      >
                        <Typography
                          startDecorator={<DescriptionOutlined />}
                          textColor={"neutral.300"}
                        >
                          {ele.productDesc}
                        </Typography>
                      </CardOverflow>
                    </Card>
                  </CssVarsProvider>
                );
              })
            ) : (
              <Box className="no-data">Popular Products are not availabe!</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}