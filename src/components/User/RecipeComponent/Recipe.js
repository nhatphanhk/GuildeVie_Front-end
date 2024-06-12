import React from "react";
import Carousel from "./CarouselRecipe";
import SearchRecipe from "./SearchRecipe";
import MediaCard from "./CardRecipe";
import FilterRecipe from "./FilterRecipe";
import Grid from "@mui/material/Grid";
function Recipe() {
  return (
    <div>
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid item xs={2} sx={{ position: "relative" }}>
          <FilterRecipe />
        </Grid>
        <Grid item xs={10} sx={{ height: "100vh" }}>
          <Carousel />

          <SearchRecipe />
          <MediaCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Recipe;
