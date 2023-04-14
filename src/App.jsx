import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post
        author="Thiago Razzini"
        content="
          Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Perferendis velit aut temporibus ratione, 
          praesentium quos distinctio nihil eos optio earum omnis suscipit, numquam 
          illum perspiciatis? Porro nihil nesciunt consectetur excepturi!"
      />
      <Post author="Bianca Ferreira" content="Um novo post massa!" />
    </div>
  );
}
