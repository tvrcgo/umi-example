import React from 'react'
import styles from './index.less'
import Link from 'umi/link'
import { Menu } from 'antd'

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <div className={styles.lt}>
          <h1 className={styles.title}>
            <Link to='/'>Console</Link>
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
          <Menu
            mode='inline'
            style={{
              borderRight: 'none'
            }}
          >
            <Menu.Item key='home'><Link to='/'>HOME</Link></Menu.Item>
            <Menu.SubMenu
              title={<span>内容</span>}
            >
              <Menu.ItemGroup key='g1' title='运营'>
                <Menu.Item key='g1-1'>MENU 1</Menu.Item>
                <Menu.Item key='g1-2'>MENU 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key='g2' title='标注'>
                <Menu.Item key='g2-1'>MENU 1</Menu.Item>
                <Menu.Item key='g2-2'>MENU 2</Menu.Item>
              </Menu.ItemGroup>
            </Menu.SubMenu>
            <Menu.SubMenu
              title={<span>商品</span>}
            >
              <Menu.ItemGroup key='g3' title='选品'>
                <Menu.Item key='g3-1'>MENU 1</Menu.Item>
                <Menu.Item key='g3-2'>MENU 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key='g4' title='营销'>
                <Menu.Item key='g4-1'>MENU 1</Menu.Item>
                <Menu.Item key='g4-2'>MENU 2</Menu.Item>
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
