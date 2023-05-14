import React, { useState, FC, useEffect } from "react";
import { Grid, Paper, Typography, Checkbox } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { IPost } from "../models/IPost";
import Service from "../API/Service";
import { useFetching } from "../hooks/useFetching";

interface Props {
  label: string;
  body: string;
  favorites: IPost[];
  postItem: IPost;
}

const PostItem: FC<Props> = ({ label, body, favorites, postItem }) => {
  const [state, setState] = useState<boolean>(
    favorites.find((item) => item.id === postItem.id) ? true : false
  );

  const handleChange = async () => {
    if (state) {
      await Service.removeFavorite(postItem);
      setState(false);
    } else {
      await Service.addFavorite(postItem);
      setState(true);
    }
  };

  useEffect(() => {}, []);
  return (
    <Grid width={"100%"}>
      <Paper
        sx={{
          padding: 2,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid
          display={"flex"}
          width={"100%"}
          direction={"row"}
          container
          justifyContent={"space-between"}
        >
          <Typography variant="body1" sx={{ fontWeight: "bold", width: "70%" }}>
            {label}
          </Typography>
          <Checkbox
            checked={state}
            onChange={handleChange}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            color="error"
          />
        </Grid>
        <Typography width={"100%"} variant="body2">
          {body}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default PostItem;
