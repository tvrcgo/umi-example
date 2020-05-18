import React from 'react'
import styles from './index.less'

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <div className={styles.lt}>
          <h1 className={styles.title}>app</h1>
        </div>
        <div className={styles.rt}>
          <span className={styles.profile}>username</span>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.sider}>

        </div>
        <div className={styles.content}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default BasicLayout
