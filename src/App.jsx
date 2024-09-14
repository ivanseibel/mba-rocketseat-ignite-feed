import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatar_url: 'https://github.com/ivanseibel.png',
      name: 'Ivan Seibel',
      role: 'Software Engineer',
    },
    post: {
      publishedAt: new Date('2024-02-24T15:00:00'),
      content: [
        {type: 'paragraph', content: 'Hey, guys! 👋'},
        {type: 'paragraph', content: 'Today I\'m starting a new project from scratch. I\'m going to build a blog using ReactJS and Next.js. I\'m going to share the entire process with you.'},
        {type: 'paragraph', content: ''},
        {type: 'text', content: 'Stay tuned 👉 '},
        {type: 'link', content: 'github.com/ivanseibel/blogx', url: '#' },
        {type: 'paragraph', content: ' '},
        {type: 'tags', content: ['#reactjs', '#nextjs', '#webdevelopment']},
      ]
    },
  },
  {
    id: 2,
    author: {
      avatar_url: 'https://github.com/ivanseibel.png',
      name: 'Ivan Seibel',
      role: 'Software Engineer',
    },
    post: {
      publishedAt: new Date('2024-09-14T10:30:00'),
      content: [
        {type: 'paragraph', content: 'I have some news about the project! 📢'},
        {type: 'paragraph', content: 'I just finished the blog layout. It looks amazing!'},
        {type: 'paragraph', content: 'Now I\'m going to work on the blog posts page.'},
        {type: 'paragraph', content: 'Stay tuned!'},
        {type: 'tags', content: ['#reactjs', '#nextjs', '#webdevelopment']},
      ]
    },
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
