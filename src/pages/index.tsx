import React from 'react'
import styles from './index.less'

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            umi guide
          </a>
        </li>
      </ul>
    </div>
  )
}
