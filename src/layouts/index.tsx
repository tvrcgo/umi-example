import React from 'react'
import styles from './index.less'
import Link from 'umi/link'

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <div className={styles.lt}>
          <h1 className={styles.title}>
            <Link to='/'>App</Link>
          </h1>
        </div>
        <div className={styles.rt}>
          <div className={styles.profile}>
            <span>region</span>
            <span>lang</span>
            <span>username</span>
          </div>
        </div>
      </div>
      <div className={styles.body}>
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
