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

const newDishes = [
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "CutLet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];
export default function NewDishes() {
  return (
    <div className="new-products-frame">
    <Container>
      <Stack className="main">
        <Box className="category-title">Fresh Menu</Box>
        <Stack className="cards-frame">
          <CssVarsProvider>
            {newDishes.map((ele, index) => {
              return (
                <Card className="card" variant="outlined" key={index}>
                  <CardOverflow>
                    <div className="product-sale">Normal Size</div>
                    <AspectRatio ratio="1">
                      <img src={ele.imagePath} loading="lazy" alt="" />
                    </AspectRatio>
                  </CardOverflow>

                  <CardOverflow variant="soft" className="product-detail">
                    <Stack className="info">
                      <Stack flexDirection={"row"}>
                        <Typography className="title">
                          {ele.productName}
                        </Typography>
                        <Divider width="2" height="24" bg="#d9d9d9" />
                        <Typography className="price">$12</Typography>
                      </Stack>
                      <Stack>
                        <Typography className="views">
                          20
                          <Visibility
                            sx={{ fontSize: 25, marginLeft: "5px" }}
                          />
                        </Typography>
                      </Stack>
                    </Stack>
                  </CardOverflow>
                </Card>
              );
            })}
          </CssVarsProvider>
        </Stack>
      </Stack>
    </Container>
  </div>
  );
}