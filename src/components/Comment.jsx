import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img 
        src="https://thispersondoesnotexist.com/" 
        alt="User Avatar"
        className={styles.avatar} 
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>John Doe</strong>
              <time 
                dateTime="2021-03-25T12:00:00" 
                title="March 25, 2021 at 12:00 PM"
              >
                about 1 hour ago
              </time>
            </div>

            <button title='Delete'>
              <Trash size={24} />
            </button>
          </header>
          <p>
            Very nice! I&apos;m looking forward to seeing the final result. 😄
          </p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} /> Applaud <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}