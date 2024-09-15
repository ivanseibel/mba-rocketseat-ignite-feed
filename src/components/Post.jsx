import React from 'react';
import { format, formatDistanceToNow } from 'date-fns';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post(props) {
  const [comments, setComments] = React.useState([]);
  const [comment, setComment] = React.useState('');

  const { avatar_url, name, role } = props.author;
  const { publishedAt, content } = props.post;

  const dateTitle = format(publishedAt, 'd MMM yyyy, HH:mm');
  const distanceToNow = formatDistanceToNow(publishedAt, { addSuffix: true });

  function handleCommentSubmit(event) {
    event.preventDefault();

    setComments([...comments, comment]);
    setComment('');

    event.target.reset();
  }

  function handleDeleteComment(index) {
    const newComments = [...comments];
    newComments.splice(index, 1);

    setComments(newComments);
  }

  const isCommentEmpty = comment.trim().length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={avatar_url}
            alt={name}
            hasBorder={true}
          />

          <div className={styles.authorInfo}>
            <strong>
              {name}
            </strong>
            <span>
              {role}
            </span>
          </div>
        </div>

        <time 
          dateTime={publishedAt.toISOString()}
          title={dateTitle}
        >
          {distanceToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item, index) => (
          <React.Fragment key={index}>
            {item.type === 'paragraph' && (
              <p>
                {item.content}
              </p>
            )}

            {item.type === 'text' && (
              <span>
                {item.content}
              </span>
            )}

            {item.type === 'link' && (
              <a 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.content}
              </a>
            )}

            {item.type === 'tags' && (
              item.content.map((tag, index) => (
                <a 
                  key={index}
                  href={`https://www.google.com/search?q=${String(tag).replace('#', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`${tag} `}
                </a>
              ))
            )}
          </React.Fragment>
        ))}

      </div>

      <form className={styles.commentForm} onSubmit={handleCommentSubmit}>
        <strong>
          Leave a comment
        </strong>

        <textarea
          placeholder="What do you think?"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          required
          onInvalid={(event) => event.target.setCustomValidity('Please, leave a comment.')}
        ></textarea>
        
        <footer>
          <button 
            type="submit" 
            disabled={isCommentEmpty}
          >
            Comment
          </button>
        </footer>

      </form>
      <div className={styles.commentList}>
        {comments.map((comment, index) => (
          <Comment key={index} content={comment} onDeleteComment={() => handleDeleteComment(index)} />
        ))}
      </div>
    </article>
  )
}
