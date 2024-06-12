import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, IconButton, Grid } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
const cardData = [
  {
    id: 1,
    title: "Thai Basil Tofu Stir Fry",
    price: "$123",
    time: "30 minutes",
    country: "Thai",
    rating: "3",
    description: "super dry",
    image: "src/assets/Img/Rectangle 4.png",
  },
  {
    id: 2,
    title: "Thai Basil Tofu Stir Fry",
    price: "$123",
    time: "30 minutes",
    country: "Thai",
    rating: "3",
    description: "super dry",
    image: "src/assets/Img/Rectangle 4.png",
  },
  {
    id: 3,
    title: "Thai Basil Tofu Stir Fry",
    price: "$123",
    time: "30 minutes",
    country: "Thai",
    rating: "3",
    description: "super dry",
    image: "src/assets/Img/Rectangle 4.png",
  },
  {
    id: 4,
    title: "Thai Basil Tofu Stir Fry",
    price: "$123",
    time: "30 minutes",
    country: "Thai",
    rating: "3",
    description: "super dry",
    image: "src/assets/Img/Rectangle 4.png",
  },
  {
    id: 5,
    title: "Thai Basil Tofu Stir Fry",
    price: "$123",
    time: "30 minutes",
    country: "Thai",
    rating: "3",
    description: "super dry",
    image: "src/assets/Img/Rectangle 4.png",
  },
  {
    id: 6,
    title: "Thai Basil Tofu Stir Fry",
    price: "$123",
    time: "30 minutes",
    country: "Thai",
    rating: "3",
    description: "super dry",
    image: "src/assets/Img/Rectangle 4.png",
  },
];

function MediaCard({
  title,
  price,
  time,
  country,
  rating,
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
      }}
    >
      <CardMedia
        sx={{ height: 200, width: "100%", borderRadius: "15px", boxShadow: 3 }}
        image={image}
      />
      <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
        <Typography gutterBottom variant="h5" component="div" sx={{textShadow:"0.5px 0.5px 0.5px black"}}>
          {title}
        </Typography  >
        <Box
          sx={{
            backgroundColor: "#8BC34A",
            height: "20px",
            marginTop: "5px",
            boxShadow: 3,
            textShadow:"1px 1px 2px black"
          }}
        >
          {price}
        </Box>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "6px",
          textShadow:"1px 1px 2px black"
        }}
      >
        <Box sx={{ display: "flex", textShadow:"1px 1px 2px black" }}>
          <IconButton>
            <AccessTimeIcon />
          </IconButton>
          <Typography sx={{ marginTop: "6px" }}>{time}</Typography>
        </Box>
        <Typography sx={{ marginRight: "5px" }}>{description}</Typography>
      </Box>
      <Box
        
      >
        <Box sx={{ display: "flex", justifyContent:"space-between", padding:"10px",textShadow:"0.5px 0.5px 0.5px black" }}>
          <Typography sx={{ marginTop: "6px", }}>
            <IconButton>
            <ThumbUpOutlinedIcon/>
            </IconButton>
            
            {rating}

          </Typography>
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
