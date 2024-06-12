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
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrtM3QR0_yud7C5Ab-pFu2EVbBCnNIjkYeSg&s" // Replace with your actual image path
    },
    {
        title: "Waffle",
        description: "Waffle is a type of baked cake, originating from Belgium",
        imageUrl: "https://www.cherryonmysundae.com/wp-content/uploads/2018/12/egg-onigiri-final-feature.jpg" // Replace with your actual image path
    },
    // Add more items if needed
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
