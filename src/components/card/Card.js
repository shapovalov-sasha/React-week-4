import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./Card.css";

function MediaCard(props) {
  const [count, setCount] = useState(props.count);

  useEffect(() => {
    props.onCountChange(count, props.id);
  }, [count]);

  const handleAdd = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleSub = () => {
    setCount((prevState) => prevState - 1);
  };

  const counterStyle = count < 5 ? "red" : count > 15 ? "green" : "black";

  return (
    <Card sx={{ maxWidth: 345, height: "100%" }}>
      <CardMedia
        component="img"
        height="140"
        image={props.imageSrc}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          style={{
            color: "purple",
          }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {props.title}
        </Typography>
        <Typography
          className={counterStyle}
          gutterBottom
          variant="h4"
          component="div"
        >
          Count: {count}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.details}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleAdd} size="small">
          Add +
        </Button>

        <Button disabled={count <= 0} onClick={handleSub} size="small">
          Sub -
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
