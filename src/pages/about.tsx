
import React from 'react'
import styles from './about.less'
import Table, { Action } from '@/components/Table'

const columns = [
  {
    title: '名称',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    width: '10%'
  },
  {
    title: '进度',
    dataIndex: 'progress',
    key: 'progress',
    width: '10%'
  },
  {
    title: '更新时间',
    dataIndex: 'updated_at',
    key: 'updated_at',
    width: '15%'
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    key: 'created_at',
    width: '15%'
  }
]

export default function() {
  const ref: any = React.createRef()
  return (
    <div className={styles.page}>
      <h1>About page</h1>
      <Table
        ref={ref}
        title={() => '任务'}
        loading={false}
        columns={columns}
        batchAction={[
          <Action onClick={() => {}}>添加</Action>,
          <Action onClick={() => {}}>删除</Action>
        ]}
        multiSelect={true}
        onChange={(rows: any) => console.log(rows)}
      />
    </div>
  )
}
