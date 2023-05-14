import React, { FC } from "react";
import { Grid, CircularProgress, Typography } from "@mui/material";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";

interface Props {
  posts: IPost[];
  isLoading: boolean;
  favorites: IPost[];
  isFavoritesPosts: boolean;
  setFavorites: React.Dispatch<React.SetStateAction<IPost[]>>;
}

const PostList: FC<Props> = ({
  posts,
  isLoading,
  favorites,
  isFavoritesPosts,
  setFavorites,
}) => {
  if (isLoading) {
    return <CircularProgress color="inherit" />;
  }
  return (
    <Grid display={"flex"} direction={"column"} container gap={2}>
      {isFavoritesPosts ? (
        favorites.length === 0 ? (
          <Typography variant="h2">No results...</Typography>
        ) : (
          favorites
            .sort((a, b) => a.id - b.id)
            .map((item) => (
              <PostItem
                setFavorites={setFavorites}
                key={item.id}
                label={item.title}
                body={item.body}
                favorites={favorites}
                postItem={item}
              />
            ))
        )
      ) : (
        posts.map((item) => (
          <PostItem
            setFavorites={setFavorites}
            key={item.id}
            label={item.title}
            body={item.body}
            favorites={favorites}
            postItem={item}
          />
        ))
      )}
    </Grid>
  );
};

export default PostList;
