import React, { useEffect, useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
import { Grid, useMediaQuery } from "@mui/material";
import { IPost } from "./models/IPost";
import { useFetching } from "./hooks/useFetching";
import Service from "./API/Service";
import Search from "./components/UI/Search";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const matches = useMediaQuery("(max-width:600px)");

  const [posts, setPosts] = useState<IPost[]>([]);
  const [search, setSearch] = useState<string>("");

  const { fetching, isLoading } = useFetching(async () => {
    const response = await Service.getPosts();
    setPosts(response);
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
        <Search matches={matches} value={search} setValue={setSearch} />
        <PostList posts={filteredPosts} isLoading={isLoading} />
      </Grid>
    </div>
  );
}

export default App;
