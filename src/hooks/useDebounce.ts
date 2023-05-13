import { useState, useEffect } from "react";
import { IPost } from "../models/IPost";

export function useDebounce(text: string, posts: IPost[], delay: number) {
  const [filteredItems, setFilteredItems] = useState<IPost[]>(posts);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const filtered = posts.filter((post) => {
        return post.title.toLowerCase().includes(text.toLowerCase());
      });

      setFilteredItems(filtered);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, posts, delay]);

  return filteredItems;
}
