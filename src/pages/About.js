import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To KhanaKhaJana</Typography>
        <p>
        At KhanaKhaJana, we believe that dining is not just about eating; it's about an experience. Nestled in the heart of everyone, our restaurant offers a unique blend of culinary artistry and warm hospitality.Our menu is a celebration of [Cuisine Type, e.g., Italian, Mediterranean, Fusion], featuring a diverse selection of dishes crafted with the freshest, locally-sourced ingredients. From mouth-watering appetizers to decadent desserts,
         every item on our menu is thoughtfully prepared to ensure a memorable dining experience.
        </p>
        <br />
        <p><h3>Convenient Dining at Your Fingertips</h3>
        At KhanaKhaJana, we are excited to offer a seamless online ordering experience, so you can enjoy our delicious meals from the comfort of your home or office. Whether you're craving your favorite dosa, idli sambhar, or a delectable Gujarati dish,
         our online service makes it easy to place your order and have it delivered or ready for pickup.</p>
        <p>
       <h5>Get Started Today</h5>
        Experience the ease and convenience of online ordering with us. 
        Visit our khanakhajana.com to place your 
        order and enjoy our delectable dishes wherever you are. We look forward to serving you.
        We invite you to join us at KhanaKhaJana and experience the best of all. 
        </p>
      </Box>
    </Layout>
  );
};

export default About;
