import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            src="https://github.com/ivanseibel.png" 
            alt="Ivan Seibel"
            className={styles.avatar} 
          />

          <div className={styles.authorInfo}>
            <strong>
              Ivan Seibel
            </strong>
            <span>
              Software Engineer
            </span>
          </div>
        </div>

        <time 
          dateTime="2021-03-25T12:00:00"
          title="March 25, 2021 at 12:00 PM"
        >
          1 hour ago
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Hey, guys! 👋
        </p>
        
        <p>
          Today I&rsquo;m starting a new project from scratch. I&rsquo;m going to build a blog using ReactJS and Next.js. I&rsquo;m going to share the entire process with you.
        </p>
        
        <p>
          Stay tuned 👉 <a href='#'>github.com/ivanseibel/blogx</a>
        </p>

        <p>
          <a>#reactjs</a> {' '}
          <a>#nextjs</a> {' '}
          <a>#webdevelopment</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>
          Leave a comment
        </strong>

        <textarea
          placeholder="What do you think?"
        ></textarea>
        
        <footer>
          <button type="submit">
            Comment
          </button>
        </footer>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </form>
    </article>
  )
}