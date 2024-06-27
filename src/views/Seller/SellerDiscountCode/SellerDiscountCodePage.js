import React from "react";

import Grid from "@mui/material/Grid";
import SidebarSeller from "~/components/SidebarSeller";
import SellerDiscountCodeContent from "./SellerMenuContent/SellerDiscountCodeContent";
import Box from "@mui/material/Box";
import HeaderSeller from "~/components/Seller/HeaderSeller";


export default function SellerDiscountCodePage() {
  const breadcrumbs = [
    { label: "Shop", path: "/", active: false },
    { label: "Discount Codes", path: "/user", active: true },
    // { label: "Profile", path: "/user/profile", active: true },
  ];
  return (
    <>
      <Box
        sx={{
          height: '100vh',
          bgcolor: "#F4FFEC",
        }}
      >
        <Grid container sx={{ flexGrow: 1 }}>
          <Grid item xs={2} sx={{ position: "relative" }}>
            <SidebarSeller />
          </Grid>
          <Grid item xs={10} sx={{ position: "relative" }}>
            <Box sx={{maxHeight: '100vh'}}>
              <HeaderSeller title="Discount Codes" breadcrumbs={breadcrumbs} />
              <SellerDiscountCodeContent />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
