import React from 'react'

import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
  const [applauses, setApplauses] = React.useState(0)

  function handleApplaud() {
    event.preventDefault()
    setApplauses(applauses + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar
        src="https://thispersondoesnotexist.com/"
        alt="User Avatar"
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

            <button 
              title='Delete'
              onClick={onDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>
          <p>
            {content}
          </p>
        </div>
        <footer>
          <button
            onClick={handleApplaud}
          >
            <ThumbsUp size={20} /> Applaud <span>{applauses}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}