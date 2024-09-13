import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        src="https://images.unsplash.com/photo-1483817101829-339b08e8d83f?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        className={styles.cover}
      />

      <div className={styles.profile}>
        <strong>
          Ivan Seibel
        </strong>
        <span>
          Software Engineer
        </span>
      </div>

      <footer>
        <a href="#">
          Edit profile
        </a>
      </footer>
    </aside>
  )
}