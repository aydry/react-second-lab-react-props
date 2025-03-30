import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import { Grid } from "@mui/material";

const Main = ({ cards }) => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {cards.map((card) => (
        <Grid item key={card.id}>
          <ProfileCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Main;
