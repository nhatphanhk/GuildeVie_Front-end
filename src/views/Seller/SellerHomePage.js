import React from "react";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import Grid from "@mui/material/Grid";
import SidebarSeller from "../components/SidebarSeller";
import InformationOfBuyer from "../components/InformationOfBuyer";
import ListOfPosts from "../components/ListofPosts";
import ListofIngredients from "../components/ListofIngredients";
export default function SellerHomePage() {
  return (
    <Grid container sx={{ flexGrow: 1 }}>
      <Grid item xs={2} sx={{ position: "relative"}}>
        <SidebarSeller/>
      </Grid>
      <Grid item xs={10}>
        {/* <InformationOfBuyer/> */}
        <ListofIngredients/>
      </Grid>
    </Grid>
  );
}