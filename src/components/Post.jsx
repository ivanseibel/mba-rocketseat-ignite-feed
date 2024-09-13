export function Post({author, content}) {
  return (
    <article>
      <h2>{author}</h2>
      <p>{content}</p>
    </article>
  )
}