import { Grid, Paper, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useState } from "react";

type Props = {};

const PostItem = (props: Props) => {
  const [state, setState] = useState<boolean>(false);
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
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Lorem ipsum
          </Typography>
          <FavoriteIcon
            sx={{ cursor: "pointer", color: state ? "red" : "gray" }}
            onClick={() => setState((state) => !state)}
          />
        </Grid>
        <Typography width={"100%"} variant="body2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore sequi
          minus distinctio optio placeat explicabo iure cupiditate harum eaque
          vel laborum, suscipit quasi inventore perspiciatis, vitae earum!
          Exercitationem, voluptatem fuga.
        </Typography>
      </Paper>
    </Grid>
  );
};

export default PostItem;
