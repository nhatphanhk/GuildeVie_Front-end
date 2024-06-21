import React from "react";
import Carousel from "./CarouselRecipe";
import SearchRecipe from "./SearchRecipe";
import MediaCard from "./CardRecipe";
import FilterRecipe from "./FilterRecipe";
import Grid from "@mui/material/Grid";
function Recipe() {
  const carousel3Items = [
    {
      title: "Waffle",
      description: "Waffle is a type of baked cake, originating from Belgium",
      imageUrl: "src/assets/Img/an-chay-healthy-1.jpg", // Replace with your actual image path
    },
    {
      title: "Waffle",
      description: "Waffle is a type of baked cake, originating from Belgium",
      imageUrl: "src/assets/Img/12_grande.jpg", // Replace with your actual image path
    },
    {
      title: "Waffle",
      description: "Waffle is a type of baked cake, originating from Belgium",
      imageUrl: "src/assets/Img/buncha.jpg", // Replace with your actual image path
    },
  ];
  return (
    <div>
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid item xs={2} sx={{ position: "relative" }}>
          <FilterRecipe />
        </Grid>
        <Grid item xs={10} sx={{ height: "100vh" }}>
          <Carousel carouselItems={carousel3Items} />
          <SearchRecipe />
          <MediaCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Recipe;
