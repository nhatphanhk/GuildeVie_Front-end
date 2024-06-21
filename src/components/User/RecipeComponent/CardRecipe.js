import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, IconButton, Grid } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { Category } from "@mui/icons-material";
const cardData = [
  {
    id: 1,
    title: "Som Tam Salad",

    time: "30 minutes",
    country: "Thai",
    Category: "vegan",
    description: "super dry",
    image: "src/assets/Img/Thai.jpg",
  },
  {
    id: 2,
    title: "Som Tam Salad",

    time: "30 minutes",
    country: "Thai",
    Category: "vegan",
    description: "super dry",
    image: "src/assets/Img/Thai.jpg",
  },
  {
    id: 3,
    title: "Som Tam Salad",

    time: "30 minutes",
    country: "Thai",
    Category: "vegan",
    description: "super dry",
    image: "src/assets/Img/Thai.jpg",
  },
  {
    id: 4,
    title: "Som Tam Salad",

    time: "30 minutes",
    country: "Thai",
    Category: "vegan",
    description: "super dry",
    image: "src/assets/Img/Thai.jpg",
  },
  {
    id: 5,
    title: "Som Tam Salad",

    time: "30 minutes",
    country: "Thai",
    Category: "vegan",
    description: "super dry",
    image: "src/assets/Img/Thai.jpg",
  },
  {
    id: 6,
    title: "Som Tam Salad",

    time: "30 minutes",
    country: "Thai",
    Category: "vegan",
    description: "super dry",
    image: "src/assets/Img/Thai.jpg",
  },
];

function MediaCard({
  title,
  price,
  time,
  country,
  Category,
  description,
  image,
}) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "auto",
        marginTop: "20px",
        marginBottom: "20px",
        borderRadius: "10px",
      }}
    >
      <CardMedia
        sx={{ height: 300, width: "100%", boxShadow: 3 }}
        image={image}
      />
      <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
        <Typography
          gutterBottom
          variant="h6"
          sx={{ mb: 1, fontWeight: "bold", m: "auto" }}
        >
          {title}
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "6px",
          mb: 1,
          "& .MuiTypography-root": { fontSize: "0.875rem" }
        }}
      >
        <Typography sx={{ marginTop: "6px", padding: "5px" }}>
          {time}
        </Typography>

        <Typography sx={{ padding: "5px" }}>{description}</Typography>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <Typography sx={{ marginTop: "6px" }}>{Category}</Typography>
          <Typography sx={{ marginTop: "6px" }}>{country}</Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default function MediaCardGrid() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{ marginTop: "100px", marginBottom: "100px" }}
    >
      {cardData.map((card) => (
        <Grid item key={card.id} xs={12} sm={6} md={4}>
          <MediaCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
}
