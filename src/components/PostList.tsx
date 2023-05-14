import React, { FC } from "react";
import { Grid, CircularProgress } from "@mui/material";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";

interface Props {
  posts: IPost[];
  isLoading: boolean;
  favorites: IPost[];
  isFavoritesPosts: boolean;
}

const PostList: FC<Props> = ({
  posts,
  isLoading,
  favorites,
  isFavoritesPosts,
}) => {
  if (isLoading) {
    return <CircularProgress color="inherit" />;
  }
  return (
    <Grid display={"flex"} direction={"column"} container gap={2}>
      {isFavoritesPosts
        ? favorites
            .sort((a, b) => a.id - b.id)
            .map((item) => (
              <PostItem
                key={item.id}
                label={item.title}
                body={item.body}
                favorites={favorites}
                postItem={item}
              />
            ))
        : posts.map((item) => (
            <PostItem
              key={item.id}
              label={item.title}
              body={item.body}
              favorites={favorites}
              postItem={item}
            />
          ))}
    </Grid>
  );
};

export default PostList;
