import React, { useState, FC } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface Props {
  label: string;
  body: string;
}

const PostItem: FC<Props> = ({ label, body }) => {
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
          <Typography variant="body1" sx={{ fontWeight: "bold", width: "70%" }}>
            {label}
          </Typography>
          <FavoriteIcon
            sx={{
              cursor: "pointer",
              color: state ? "red" : "gray",
              width: "max-content",
            }}
            onClick={() => setState((state) => !state)}
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
