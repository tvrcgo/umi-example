import * as React from 'react'
import { Table, Button, Spin } from 'antd'
import styles from './index.less'
import { TableProps } from 'antd/es/table'

interface DataTableProps {
  onChange?: (rows: any[]) => void
  onFetch?: (page: number, size: number) => Promise<FetchResponse>
  multiSelect?: boolean
  rowAction?: JSX.Element[]
  rowActionTitle?: string
  batchAction?: JSX.Element[]
}

interface FetchResponse {
  data: any[]
  total: number
}

export default class DataTable extends React.Component<TableProps<any> & DataTableProps, any> {
  state = {
    selectedRowKeys: [],
    selectedRows: [],
    loading: !!this.props.loading || false,
    data: [],
    page: {
      current: 1,
      pageSize: 10,
      total: 0
    }
  }

  componentDidMount() {
    this.refresh()
  }

  refresh = async () => {
    const { page } = this.state
    await this.fetch(page.current, page.pageSize)
  }

  fetch = async (page: number, size: number) => {
    const { onFetch, dataSource } = this.props
    // 远程加载
    if (onFetch) {
      const source: FetchResponse = await onFetch(page, size)
      if (source && source.data && source.total) {
        this.setState({
          data: source.data,
          page: {
            current: page,
            pageSize: size,
            total: source.total
          }
        })
      }
    } else if (dataSource) {
      // 静态数据
      this.setState({
        data: dataSource,
        page: {
          current: page,
          pageSize: size,
          total: dataSource.length
        }
      })
    }

  }

  render() {
    const {
      selectedRowKeys,
      selectedRows,
      loading,
      data,
      page
    } = this.state
    const {
      title,
      onFetch,
      onChange,
      multiSelect,
      rowAction,
      rowActionTitle,
      batchAction = [],
      ...props
    } = this.props

    // 翻页
    const pagination = {
      ...page,
      onChange: async (page: number, size: number = 10) => {
        await this.fetch(page, size)
      },
      showSizeChanger: false,
      onShowSizeChange: (page: number, size: number = 10) => {
        this.setState({
          page: {
            ...this.state.page,
            current: page,
            pageSize: size
          }
        })
      }
    }

    // 多选
    const rowSelection = {
      selectedRowKeys,
      hideDefaultSelections: true,
      onChange: (rowKeys: React.ReactText[], rows: any[]) => {
        this.setState({
          selectedRowKeys: rowKeys,
          selectedRows: rows
        })
        onChange && onChange(rows)
      }
    }
    // 操作区
    const columns = rowAction ? props.columns?.concat({
      title: rowActionTitle || '操作',
      width: '15%',
      render: (_, row) => {
        return (
          <ul className='row-action'>
            {rowAction.map((act, i) => (
              <li key={`act-${i}`}>
                <a
                  key={i}
                  href='javascript:;'
                  onClick={() => act.props.onClick(row)}
                >
                  {act.props.children}
                </a>
              </li>
            ))}
          </ul>
        )
      }
    }) : props.columns

    return (
      <div className={styles['component-table']}>
        <div className={styles['table-header']}>
          <h2 className={styles['title']}>{title?.call(this, [])}</h2>
          <div className={styles['batch-action']}>
            {batchAction.map((act, i) => (
              <Button
                key={i}
                onClick={() => act.props.onClick(selectedRows)}
                type={act.props.type || 'primary'}
                disabled={loading}
              >
                {act.props.children}
              </Button>
            ))}
          </div>
        </div>
        <Spin spinning={loading}>
          <Table
            size='middle'
            rowKey={(row: any) => row._id || row.id}
            {...props}
            columns={columns}
            dataSource={data}
            pagination={pagination}
            rowSelection={multiSelect && rowSelection || {}}
          />
        </Spin>
      </div>
    )
  }
}

export const Action = ({ children, ...props }: any) => {
  return React.cloneElement(children, props)
}
