import React from 'react'
import { Button } from 'antd'
import Link from 'umi/link'

export default (props: any) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80%'
    }}>
      <div style={{
        width: '400px'
      }}>
        <h1>Page not found</h1>
        <div style={{ color: '#999', fontFamily: 'verdana, sans-serif' }}>{props.location.pathname}</div>
        <div style={{ marginTop: 50, fontFamily: 'verdana, sans-serif' }}><Link to='/'><Button type='primary'>Go home</Button></Link></div>
      </div>
    </div>
  )
}
