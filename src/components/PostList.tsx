import React, { FC } from "react";
import { Grid, CircularProgress } from "@mui/material";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";

interface Props {
  posts: IPost[];
  isLoading: boolean;
}

const PostList: FC<Props> = ({ posts, isLoading }) => {
  if (isLoading) {
    return <CircularProgress color="inherit" />;
  }
  return (
    <Grid display={"flex"} direction={"column"} container gap={2}>
      {posts.map((item) => (
        <PostItem key={item.id} label={item.title} body={item.body} />
      ))}
    </Grid>
  );
};

export default PostList;
