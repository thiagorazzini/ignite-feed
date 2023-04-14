import { Post } from "./Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Thiago Razzini"
            content="
          Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Perferendis velit aut temporibus ratione, 
          praesentium quos distinctio nihil eos optio earum omnis suscipit, numquam 
          illum perspiciatis? Porro nihil nesciunt consectetur excepturi!"
          />
          <Post author="Bianca Ferreira" content="Um novo post massa!" />
        </main>
      </div>
    </div>
  );
}
