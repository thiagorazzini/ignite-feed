import { Header } from "./components/Header";
import { Post } from "./components/Post";
import "./global.css";
import styles from "./App.module.css";

//author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/thiagorazzini.png",
      name: "Thiago Razzini",
      role: "Web developer Junior",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: '👉 <a href="#">jane.design/doctorcare</a>' },
    ],
    pubishedAt: new Date("2023-02-03 10:29"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/linikerunk.png",
      name: "Liniker Oliveira",
      role: "Web developer Pleno",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: '👉 <a href="#">jane.design/doctorcare</a>' },
    ],
    pubishedAt: new Date("2023-02-06 19:29"),
  },
];
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                pubishedAt={post.pubishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
