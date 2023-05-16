import { IPost } from "../models/IPost";

export default class Service {
  static async getPosts() {
    const res = await fetch("http://localhost:3001/posts").then((data) =>
      data.json()
    );
    return res as IPost[];
  }
  static async getFavorites() {
    const res = await fetch("http://localhost:3001/favorites").then((data) =>
      data.json()
    );
    return res as IPost[];
  }
  static async addFavorite(post: IPost) {
    await fetch("http://localhost:3001/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  }
  static async removeFavorite(post: IPost) {
    await fetch("http://localhost:3001/favorites2/" + post.id, {
      method: "DELETE",
    });
  }
}
