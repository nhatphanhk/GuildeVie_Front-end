import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

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

export default function TestCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [gender, setGender] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [bmi, setBmi] = React.useState(null);
  const [bmiCategory, setBmiCategory] = React.useState("");
  const [errors, setErrors] = React.useState({});

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const currencies = [
    {
      value: "Nam",
      label: "Male",
    },
    {
      value: "Nu",
      label: "Female",
    },
  ];

  const handleSubmit = () => {
    let hasErrors = false;
    let newErrors = {};

    if (!gender) {
      newErrors.gender = "Please select a gender.";
      hasErrors = true;
    }
    if (!height) {
      newErrors.height = "Please enter height.";
      hasErrors = true;
    } else if (isNaN(height)) {
      newErrors.height = "Please enter a number.";
      hasErrors = true;
    }
    if (!weight) {
      newErrors.weight = "Please enter weight.";
      hasErrors = true;
    } else if (isNaN(weight)) {
      newErrors.weight = "Please enter a number.";
      hasErrors = true;
    }

    setErrors(newErrors);

    if (!hasErrors && height && weight) {
      const heightInMeters = height / 100;
      const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(calculatedBmi);

      let category = "";
      if (calculatedBmi < 18.5) {
        category = "Underweight";
      } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
        category = "Healthy Weight";
      } else if (calculatedBmi >= 25.0 && calculatedBmi <= 29.9) {
        category = "Overweight";
      } else if (calculatedBmi >= 30.0) {
        category = "Obesity";
      }
      setBmiCategory(category);
    }
  };

  const handleReset = () => {
    setGender("");
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiCategory("");
    setErrors({});
  };

  return (
    <>
      <Card
        sx={{
          width: "auto",
          m: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "50px",
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              alt="Remy Sharp"
              src="src/assets/Img/26.png"
              sx={{ width: 100, height: 100 }} // Changed size of Avatar
            />
          }
        />
        <Typography>
          <h1>Hello Pickky, Welcome to test!</h1>
        </Typography>
      </Card>

      <Box
        sx={{
          m: "auto",
          display: "flex",
          justifyContent: "center",
          mt: "100px",
          
        }}
      >
        <Box
          sx={{
            boxShadow: 3,
            width: "20rem",
            height: "10rem",
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#101010" : "#fff",
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            p: 1,
            m: 1,
            borderRadius: 2,
            textAlign: "center",
            fontSize: "0.875rem",
            fontWeight: "700",
            
          }}
        >
          <h3>Gender</h3>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="outlined-select-currency"
                select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                error={Boolean(errors.gender)}
                helperText={errors.gender}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Box>
        </Box>

        <Box
          sx={{
            boxShadow: 3,
            width: "20rem",
            height: "10rem",
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#101010" : "#fff",
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            p: 1,
            m: 1,
            borderRadius: 2,
            textAlign: "center",
            fontSize: "0.875rem",
            fontWeight: "700",
          }}
        >
          <h3>Height</h3>
          <TextField
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">cm</InputAdornment>
              ),
            }}
            error={Boolean(errors.height)}
            helperText={errors.height}
          />
        </Box>

        <Box
          sx={{
            boxShadow: 3,
            width: "20rem",
            height: "10rem",
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#101010" : "#fff",
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            p: 1,
            m: 1,
            borderRadius: 2,
            textAlign: "center",
            fontSize: "0.875rem",
            fontWeight: "700",
          }}
        >
          <h3>Weight</h3>
          <TextField
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">kg</InputAdornment>
              ),
            }}
            error={Boolean(errors.weight)}
            helperText={errors.weight}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "100px" }}>
        <Stack spacing={30} direction="row">
        <Button color="error" variant="contained" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="contained" style={{backgroundColor:"#009f17"}} onClick={handleSubmit}>
            Submit
          </Button>
         
        </Stack>
      </Box>
      {bmi && (
        <Box sx={{ display: "flex", justifyContent: "center", mb: "50px" }}>
          <Typography variant="h3" sx={{ color: "#f26d15" }}>
            Your BMI is: {bmi} ({bmiCategory})
          </Typography>
        </Box>
      )}
    </>
  );
}
