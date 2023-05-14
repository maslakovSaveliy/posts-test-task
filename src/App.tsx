import React, { useEffect, useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
import { Grid, useMediaQuery, FormControlLabel, Checkbox } from "@mui/material";
import { IPost } from "./models/IPost";
import { useFetching } from "./hooks/useFetching";
import Service from "./API/Service";
import Search from "./components/UI/Search";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const matches = useMediaQuery("(max-width:600px)");

  const [posts, setPosts] = useState<IPost[]>([]);
  const [favorites, setFavorites] = useState<IPost[]>([]);
  const [search, setSearch] = useState<string>("");
  const [isFavoritesPosts, setIsFavoritesPosts] = useState<boolean>(false);

  const { fetching, isLoading } = useFetching(async () => {
    const responsePosts = await Service.getPosts();
    const responseFavorites = await Service.getFavorites();
    setPosts(responsePosts);
    setFavorites(responseFavorites);
  });

  const filteredPosts = useDebounce(search, posts, 500);

  useEffect(() => {
    fetching();
  }, []);

  return (
    <div className="App">
      <Grid
        container
        display={"flex"}
        direction={"column"}
        width={matches ? "100%" : "45%"}
        gap={2}
      >
        <Grid
          container
          display={"flex"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Search matches={matches} value={search} setValue={setSearch} />
          <FormControlLabel
            control={
              <Checkbox
                value={isFavoritesPosts}
                onChange={() => setIsFavoritesPosts(!isFavoritesPosts)}
              />
            }
            label="Favorites"
          />
        </Grid>
        <PostList
          posts={filteredPosts}
          isLoading={isLoading}
          favorites={favorites}
          isFavoritesPosts={isFavoritesPosts}
        />
      </Grid>
    </div>
  );
}

export default App;
