import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { Avatar } from "./Avatar";

export function Post(pros) {
  console.log(pros);
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/thiagorazzini.png" />
          <div className={styles.authorInfo}>
            <strong>Thiago Razzini</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="04 de janeiro as 14:56" dateTime="2023-02-04 14:56:35">
          Publicado a 1h
        </time>
      </header>
      <div className={styles.content}></div>
      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
