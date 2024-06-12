// src/Recipe.js
import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  MobileStepper,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Search,
} from "@mui/icons-material";
import SwipeableViews from "react-swipeable-views";

function Carousel() {
  const tutorialSteps = [
    {
      imgPath: "src/assets/Img/0iguv13oraka1703493473386.png",
    },
    {
      imgPath: "src/assets/Img/26_1.jpg",
    },
    {
      imgPath:
        "src/assets/Img/pad_thai__1__f7bd4f4931604756939e6ee41ec228d8.jpg",
    },
    {
      imgPath: "src/assets/Img/suon-non-kho-nuoc-dua.jpg",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: 1000, flexGrow: 1, m: "auto" }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <SwipeableViews
        axis={"x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 355,
                  display: "block",
                  maxWidth: 1000,
                  overflow: "hidden",
                  width: "100%",
                  borderRadius: 4,
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <IconButton
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            
            <KeyboardArrowRight />
          </IconButton>
        }
        backButton={
          <IconButton
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <KeyboardArrowLeft />
            
          </IconButton>
        }
      />
    </Box>
  );
}

export default Carousel;
