import { IPost } from "../models/IPost";

export default class Service {
  static async getPosts() {
    const res = await fetch("http://localhost:3001/posts").then((data) =>
      data.json()
    );
    return res as IPost[];
  }
}
