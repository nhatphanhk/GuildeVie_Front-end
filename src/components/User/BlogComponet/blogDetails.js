import * as React from "react";
import {
  Box,
  Card,
  CardHeader,
  TextField,
  Avatar,
  styled,
  IconButton,
  Grid,
  Divider,
  CardMedia,
  CardActions,
  Menu,
  MenuItem,
  Typography,
  CardContent,
  Button,
} from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
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

function BlogDetail() {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [label, setLabel] = React.useState("Post your's comment...");

  const handleFocus = () => {
    setLabel("");
  };

  const handleBlur = () => {
    if (label === "") {
      setLabel("Post your's comment...");
    }
  };
 

  return (
    <>
      <Card
        sx={{
          display: "flex",
          width: "670px",
          m: "auto",
          mt: "10px",
          paddingTop: "15px",
          paddingBottom: "20px",
          boxShadow: 3,
        }}
      >
        <CardHeader
          sx={{ pr: 0 }}
          avatar={
            <Avatar
              sx={{ width: "56px", height: "56px", p: 0 }}
              aria-label="recipe"
              src="src/assets/Img/26.png"
            ></Avatar>
          }
        />
        <CardContent sx={{ pl: 0 }}>
          <h4>Van Hai</h4>
        </CardContent>
      </Card>
      <Divider
        sx={{
          my: 0,
          bgcolor: "#015E4",
          height: "0.1px",
          mt: 3,
        }}
      />
      <Box>
        <Typography
          sx={{ display: "flex", m: "auto", justifyContent: "center" }}
        >
          <h1>Chinese cuisine</h1>
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          Comprises cuisines originating from China, as well as from Chinese
          people from other parts of the world. Because of the Chinese diaspora
          and historical power of the country, Chinese cuisine has profoundly
          influenced many other cuisines in Asia and beyond, with modifications
          made to cater to local palates. Chinese food staples such as rice, soy
          sauce, noodles, tea, chili oil, and tofu, and utensils such
          as chopsticks and the wok, can now be found worldwide.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src="src/assets/Img/image 23.png"/>
        </Box>
        <Typography sx={{ textAlign: "center" }}>
          The world's earliest eating establishments recognizable
          as restaurants in the modern sense first emerged in Song dynasty China
          during the 11th and 12th centuries.[1][2] Street food became an
          integral aspect of Chinese food culture during the Tang dynasty, and
          the street food culture of much of Southeast Asia was established by
          workers imported from China during the late 19th century.[3]
        </Typography>
        <Box
          sx={{
            width: 400,
            m: "auto",
            mt: "100px",
            mb: "40px",
            position: "relative",
          }}
        >
          <TextField
            id="filled-basic"
            fullWidth
            
            label={label}
            multiline
            rows={6}
            variant="outlined"
            onFocus={handleFocus}
            onBlur={handleBlur}
            sx={{
               
              "& .MuiFilledInput-root": {
                backgroundColor: "white", // Background color for filled variant
              },
              "& .MuiFilledInput-root::before": {
              borderBottom: "none", // Remove bottom border
            },
            "& .MuiFilledInput-root:hover:not(.Mui-disabled)::before": {
              borderBottom: "none", // Remove bottom border on hover
            },
            "& .MuiFilledInput-root.Mui-focused::before": {
              borderBottom: "none", // Remove bottom border when focused
            },
            "& .MuiFilledInput-root::after": {
              borderBottom: "none", // Remove bottom border after input
            },
            "& .MuiFilledInput-root.Mui-focused": {
              boxShadow: "none", // Remove box shadow when focused
            },
            }}
            InputLabelProps={{
              sx: {
                color: "black", // Label color
              },
            }}
          />
          <IconButton
            sx={{
              position: "absolute",
              right: 8,
              bottom: 8,
            }}
            color="primary"
            onClick={handleClose}
          >
            <SendOutlinedIcon />
           
          </IconButton>
          
        </Box>
      </Box>
    </>
  );
}

export default BlogDetail;
