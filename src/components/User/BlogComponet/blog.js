import * as React from "react";

import CommentIcon from "@mui/icons-material/Comment";
import { Box, Grid, Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import { Margin } from "@mui/icons-material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarIcon from "@mui/icons-material/Star";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        display: "flex",
        width: "670px",
        m: "auto",
        mt: "10px",
        paddingTop: "15px",
        paddingBottom: "20px",
      }}
      className="card"
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src="src/assets/Img/26.png"
          ></Avatar>
        }
      />

      <TextField
        id="outlined-basic"
        fullWidth
        sx={{ mt: "5px", padding: "10px" }}
        placeholder="Post somethings today..."
        variant="outlined"
      />
    </Card>
  );
}

function OutlinedCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false);
  const [showCommentBox, setShowCommentBox] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
  };

  const handleCommentClick = () => {
    setShowCommentBox(!showCommentBox);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{ width: "100%", m: "auto" }} className="card">
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src="src/assets/Img/26.png"
          />
        }
        action={
          <>
            <IconButton aria-label="settings" onClick={handleMenuClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
              <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
            </Menu>
          </>
        }
        title="Hai Dang"
        subheader={
          <div style={{ textAlign: "left" }}>
            <div>September 14, 2016</div>
          </div>
        }
        titleTypographyProps={{ textAlign: "left" }}
        subheaderTypographyProps={{ textAlign: "left" }}
      />
      <Typography sx={{ textAlign: "left", ml: "75px" }}>
        Món ăn ngon quá
      </Typography>

      <Grid className="imgdish" container spacing={2}>
        {/* Set container spacing */}
        <Grid item xs={6} sx={{ paddingRight: 1 / 2 }}>
          {/* Add padding to the right */}
          <CardMedia
            component="img"
            height="194"
            image="src/assets/Img/monan.png"
            alt="Paella dish"
            sx={{ width: "80%", display: "block", ml: 9 }}
          />
        </Grid>
        <Grid item xs={6} sx={{ paddingLeft: 1 / 2 }}>
          {/* Add padding to the left */}
          <CardMedia
            component="img"
            height="194"
            image="src/assets/Img/monan.png"
            alt="Paella dish"
            sx={{ width: "80%", display: "block" }}
          />
        </Grid>
      </Grid>
      <CardActions disableSpacing sx={{ ml: 7 }}>
        <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
          <FavoriteIcon sx={{ color: favorite ? "red" : "inherit" }} />
        </IconButton>
        <IconButton aria-label="comment" onClick={handleCommentClick}>
          <CommentIcon />
        </IconButton>
      </CardActions>
      {showCommentBox && (
        <Box sx={{ ml: 7, mr: 7, mt: 2 }}>
          <TextField
            fullWidth
            id="outlined-basic"
            placeholder="Write a comment..."
            variant="outlined"
          />
        </Box>
      )}
    </Card>
  );
}

export default function Blog() {
  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item xs={12}>
        <RecipeReviewCard />
      </Grid>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          bgcolor: "background.paper",

          color: "#2FD642",
          "& svg": {
            m: 1,
          },
        }}
      />
      <Grid item xs={12}>
        <OutlinedCard />
      </Grid>
      <Grid item xs={12}>
        <OutlinedCard />
      </Grid>
      <Grid item xs={12}>
        <OutlinedCard />
      </Grid>
    </Grid>
  );
}
