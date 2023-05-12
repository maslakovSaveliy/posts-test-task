import React, { FC, PropsWithChildren } from "react";
import { Grid } from "@mui/material";

const PostList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid display={"flex"} direction={"column"} container gap={2}>
      {children}
    </Grid>
  );
};

export default PostList;
