import React from "react";
import { Container, Stack, Box } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import AspectRatio from "@mui/joy/AspectRatio";

import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";

import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import { DescriptionOutlined, Visibility } from "@mui/icons-material";

const list = [
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "CutLet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

export default function PopularDishes() {
  return (
    <div className="popular-dishes-frame">
      <Container>
        <Stack className="popular-section">
          <Box className="category-title">Popular Dishes</Box>
          <Stack className="cards-frame">
            {list.map((ele, index) => {
              return (
                <CssVarsProvider key={index}>
                  <Card className="card">
                    <CardCover>
                      <img src={ele.imagePath} loading="lazy" alt="" />
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
                          20
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
                        this is delious meal
                      </Typography>
                    </CardOverflow>
                  </Card>
                </CssVarsProvider>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}