import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const ProfileCard = ({ title, description, image }) => {
  const handleClick = () => {
    alert(title);
  };

  return (
    <Card sx={{ maxWidth: 300, boxShadow: 3, borderRadius: 2 }}>
      <CardMedia component="img" height="200" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ marginTop: 2 }}
          onClick={handleClick}
        >
          Дізнатися більше
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
