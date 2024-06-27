import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1) ,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RecipeDetail() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item xs={12}>
          <Item>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Item>
                  <img
                    src="src/assets/Img/mexican chicken.png"
                    alt="Mexican Chicken"
                    style={{ width: "100%", height: 400 }}
                  />
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <img
                    src="src/assets/Img/mexican chicken.png"
                    alt="Mexican Chicken"
                    style={{ width: "100%", height: 400 }}
                  />
                </Item>
              </Grid>
              <Grid sx={{ m: "auto" }} item xs={6}>
                <Item>
                  <img
                    src="src/assets/Img/mexican chicken.png"
                    alt="Mexican Chicken"
                    style={{ width: "100%", height: 400 }}
                  />
                </Item>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid  item xs={12}>
          <Item>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#000" }}
            >
              Mexican Chicken
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 10,
                justifyContent: "center",
                fontWeight: "bold",
                color: "#000",
              }}
            >
              <Typography variant="body2" gutterBottom>
                Submitted by Pickky03
              </Typography>
              <Typography variant="body2" gutterBottom>
                Updated on May 17, 2024
              </Typography>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Grid container spacing={2}>
              <Grid item sx={{backgroundColor:"#ffbe74"}} xs={6}>
                <Item sx={{border:"3px soid #000", height:390}}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 5,
                      justifyContent: "space-around",

                      fontWeight: "bold",
                      color: "#000",
                    }}
                  >
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Prep Time
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        10 mins
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Cooks Time
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        20 mins
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Additional Time
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        15 mins
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 10,
                      justifyContent: "space-around",
                      fontWeight: "bold",
                      color: "#000",
                    }}
                  >
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Total time
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        55 mins
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Servings
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        6
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        process materials
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        10 mins
                      </Typography>
                    </Box>
                  </Box>
                </Item>
              </Grid>
              <Grid  item sx={{backgroundColor:"#ffbe74"}} xs={6}>
                <Item sx={{fontWeight: "bold", color: "#000"}}>
                  <Typography variant="h5" gutterBottom>
                    Ingredients
                  </Typography>
                  <Box sx={{textAlign:"center"}}>
                  <Typography variant="body2" gutterBottom>
                    • 1 1/2 cups farro
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    • 4 cups chicken broth
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    • 1 teaspoon olive oil
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    • 1 teaspoon sea salt, or to taste
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    • 1¼ cup extra-virgin olive oil
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    • 3 tablespoons fresh lemon juice
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    • 1 tablespoon Greek seasoning
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    • 1 clove garlic, minced
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    • 1 cup seeded, diced tomato
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    • 1 cup seeded, diced cucumber
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    • 1 cup chopped red bell pepper
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    • 3¼ cup thinly sliced red onion
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    • 1 cup crumbled feta cheese
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    • salt and ground black pepper to taste
                  </Typography>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
          <Grid container spacing={2}>
              <Grid item xs={6}>
                <Item sx={{height: 405,fontWeight: "bold", color: "#000"}}>
                <Typography variant="h5" gutterBottom>
              Directions
            </Typography>
            <Box sx={{textAlign:"left"}}>
            <Typography variant="body2" gutterBottom>
              Step 1
            </Typography>
            <Typography variant="body2" gutterBottom>
              Rinse farro with water; drain. Place farro in a pot; pour in chicken broth to cover farro by at least one inch, adding water if needed. Stir in 1 teaspoon olive oil and sea salt.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Step 2
            </Typography>
            <Typography variant="body2" gutterBottom>
              Bring liquid to a boil; reduce heat to medium and simmer, uncovered, stirring frequently, until tender, about 35 minutes for whole grain farro or about 20 minutes for pearled farro.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Step 3
            </Typography>
            <Typography variant="body2" gutterBottom>
              Drain farro, rinse with cold water, and set aside to cool completely, about 15 minutes.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Step 4
            </Typography>
            <Typography variant="body2" gutterBottom>
              Meanwhile, whisk 1/4 cup extra-virgin olive oil, lemon juice, Greek seasoning, and garlic together in a large bowl. Stir in tomato, cucumber, red pepper, red onion, and feta cheese.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Step 5
            </Typography>
            <Typography variant="body2" gutterBottom>
              Stir cooled farro into tomato mixture until completely coated with dressing; season with salt and pepper.
            </Typography>
            </Box>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <img
                    src="src/assets/Img/Rectangle 2010.png"
                    alt="Mexican Chicken"
                    style={{ width: "100%", height: 400 }}
                  />
                </Item>
              </Grid>
             
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
