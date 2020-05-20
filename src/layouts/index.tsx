import React, { useState } from 'react'
import styles from './index.less'
import Link from 'umi/link'
import { Menu } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'

interface NavProps {
  title: React.ReactElement | string
  children?: React.ReactElement | React.ReactText
  width?: number
}

const Nav: React.FC<NavProps> = props => {
  const [visible, toggle] = useState(false)
  return (
    <div className={styles.nav + (visible ? ` ${styles.active}` : '')} onMouseOver={_ => toggle(true)} onMouseOut={_ => toggle(false)}>
      <h2 className={styles['nav-title']}>{props.title} {props.children && <CaretDownOutlined style={{ fontSize: '0.6em' }} /> || null}</h2>
      <div className={styles['nav-content']} style={{
        display: visible && props.children ? 'block' : 'none',
        width: props.width || 200
      }}>
        {props.children}
      </div>
    </div>
  )
}

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <div className={styles.lt}>
          <h1 className={styles.title}>
            <Link to='/'>Console</Link>
          </h1>
          <Nav title='Service'>[Submenus]</Nav>
          <Nav title={<Link to='/'>Price</Link>}></Nav>
          <Nav title={<Link to='/about'>Doc</Link>}></Nav>
        </div>
        <div className={styles.rt}>
          <div className={styles.profile}>
            <span>lang</span>
            <span>username</span>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.sider}>
          <Menu
            mode='inline'
            style={{
              borderRight: 'none'
            }}
          >
            <Menu.Item key='home'><Link to='/'>HOME</Link></Menu.Item>
            <Menu.SubMenu
              title={<span>Content</span>}
            >
              <Menu.ItemGroup key='g1' title='Operation'>
                <Menu.Item key='g1-1'>Library</Menu.Item>
                <Menu.Item key='g1-2'>Sticky</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key='g2' title='Taxonomy'>
                <Menu.Item key='g2-1'>Tag</Menu.Item>
                <Menu.Item key='g2-2'>Category</Menu.Item>
              </Menu.ItemGroup>
            </Menu.SubMenu>
            <Menu.Item><Link to='/about'>About</Link></Menu.Item>
          </Menu>
        </div>
        <div className={styles.content}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default BasicLayout
