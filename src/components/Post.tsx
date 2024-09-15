import React from 'react';
import { format, formatDistanceToNow } from 'date-fns';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

interface Author {
  avatar_url: string;
  name: string;
  role: string;
}

export interface Content {
  type: 'paragraph' | 'text' | 'link' | 'tags';
  content: string | string[];
  url?: string;
}

interface Post {
  publishedAt: Date;
  content: Content[];
}

interface PostItem {
  id: number;
  author: Author;
  post: Post;
}

interface PostProps {
  author: Author;
  post: Post;
}

export function Post({author, post}: PostProps) {
  const [comments, setComments] = React.useState(Array<string>);
  const [comment, setComment] = React.useState('');

  const { avatar_url, name, role } = author;
  const { publishedAt, content } = post;

  const dateTitle = format(publishedAt, 'd MMM yyyy, HH:mm');
  const distanceToNow = formatDistanceToNow(publishedAt, { addSuffix: true });

  function handleCommentSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    setComments([...comments, comment]);
    setComment('');
  
    (event.target as HTMLFormElement).reset();
  }

  function handleDeleteComment(index: number) {
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
                {item.content as string}
              </p>
            )}

            {item.type === 'text' && (
              <span>
                {item.content as string}
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

            {item.type === 'tags' && Array.isArray(item.content) && (
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
