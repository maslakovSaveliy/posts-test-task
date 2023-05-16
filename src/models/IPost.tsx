export interface IPost {
  id: number;
  title: string;
  body: string;
}

const POST: IPost = {
  id: 1,
  title: "title",
  body: "body",
};
type SetField = <T extends keyof IPost>(obj:IPost, payload:{key:T, value:IPost[T]})=>void | any

const setField:SetField = (obj, payload)=> {
  const newPost: IPost = { ...obj, [payload.key]: payload.value };
  console.log(newPost);
}
setField(POST, {key:'id', value:1})