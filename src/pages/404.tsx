import React from 'react'
import { Button } from 'antd'
import Link from 'umi/link'

export default () => {
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
        <h1>Page not found (404)</h1>
        <div style={{ marginTop: 50 }}><Link to='/'><Button type='primary'>Go home</Button></Link></div>
      </div>
    </div>
  )
}
