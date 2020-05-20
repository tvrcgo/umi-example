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

const SiderLayout: React.FC = (props: any) => {
  return (
    <>
      <div className={styles.sider}>
        <Menu
          mode='inline'
          defaultSelectedKeys={[ props.location.pathname ]}
          style={{
            borderRight: 'none'
          }}
        >
          <Menu.Item key='/'><Link to='/'>HOME</Link></Menu.Item>
          <Menu.SubMenu
            title={<span>Content</span>}
          >
            <Menu.ItemGroup key='g1' title='Operation'>
              <Menu.Item key='/content/library'>Library</Menu.Item>
              <Menu.Item key='/content/sticky'>Sticky</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key='g2' title='Taxonomy'>
              <Menu.Item key='/taxonomy/tag'>Tag</Menu.Item>
              <Menu.Item key='/taxonomy/category'>Category</Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
          <Menu.Item key='/about'><Link to='/about'>About</Link></Menu.Item>
        </Menu>
      </div>
      <div className={styles.content}>
        {props.children}
      </div>
    </>
  )
}

const BasicLayout: React.FC = (props: any) => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <div className={styles.lt}>
          <h1 className={styles.title}>
            <Link to='/'>Console</Link>
          </h1>
          <Nav title='Service'>[Submenus]</Nav>
          <Nav title={<Link to='/state'>State</Link>}></Nav>
          <Nav title={<a href='https://umijs.org/guide/getting-started.html' target='_blank'>Doc</a>}></Nav>
        </div>
        <div className={styles.rt}>
          <div className={styles.profile}>
            <span>lang</span>
            <span>username</span>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        {(props.route.routes.find((r: any) => r.path === props.location.pathname) || {}).layout === 'page' ?
          <div style={{ flex: 1 }}>{props.children}</div> :
          <SiderLayout {...props} />
        }
      </div>
    </div>
  )
}

export default BasicLayout
