import { useMemo } from "react";
import { IPost } from "../models/IPost";

export const useSort = (searchText: string, posts: IPost[]) => {
  const filteredPosts = useMemo(() => {
    return posts.filter(({ title }) =>
      title.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, posts]);
  return filteredPosts;
};
