import React from "react";

import Grid from "@mui/material/Grid";
import SidebarSeller from "../components/SidebarSeller";
import ListofIngredients from "../components/ListofIngredients";
import { Box } from "@mui/material";

export default function SellerHomePage() {
  return (
    <>
      <Box sx={{
        bgcolor: "#F4FFEC"
      }}>
        <Grid container sx={{ flexGrow: 1 }}>
          <Grid item xs={2} sx={{ position: "relative"}}>
            <SidebarSeller/>
          </Grid>
          <Grid item xs={10}>
            <ListofIngredients/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
