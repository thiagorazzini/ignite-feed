import { Header } from "./components/Header";
import { Post } from "./components/Post";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Thiago Razzini"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatibus ducimus autem odit praesentium eos nihil a nobis impedit voluptate, earum saepe magnam fugit laudantium quae eveniet eligendi illum quisquam?"
          />
          <Post
            author="Bianca Ferreira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatibus ducimus autem odit praesentium eos nihil a nobis impedit voluptate, earum saepe magnam fugit laudantium quae eveniet eligendi illum quisquam?"
          />
        </main>
      </div>
    </div>
  );
}
