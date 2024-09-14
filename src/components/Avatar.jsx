import PropTypes from 'prop-types';

import styles from './Avatar.module.css';

export function Avatar({ src, alt, hasBorder }) {
  return (
    <img 
      src={src} 
      alt={alt}
      className={
        hasBorder 
          ? `${styles.avatar} ${styles.border}`
          : styles.avatar
      }
    />
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  hasBorder: PropTypes.bool,
}

Avatar.defaultProps = {
  hasBorder: false,
}