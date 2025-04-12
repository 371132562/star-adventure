import type { TableProps } from 'antd'
import { Button, Form, Input, Modal, Space, Table } from 'antd'
import React, { useState } from 'react'

import type { RecordItem } from '@/stores/demoStore.ts'
import demoStore from '@/stores/demoStore.ts'

const Demo: React.FC = () => {
  const record = demoStore(state => state.record)
  const generateNewRecord = demoStore(state => state.generateNewRecord)
  const updateRecord = demoStore(state => state.updateRecord)
  const deleteRecord = demoStore(state => state.deleteRecord)

  const [form] = Form.useForm()

  const [visible, setVisible] = useState(false)

  const columns: TableProps<RecordItem>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '操作',
      key: 'action',
      render: (_val, record, index) => (
        <Space size="small">
          <Button
            onClick={() => {
              form.setFieldsValue(record)
              setVisible(true)
            }}
          >
            编辑
          </Button>
          <Button
            danger
            onClick={() => {
              deleteRecord(index)
            }}
          >
            删除
          </Button>
        </Space>
      )
    }
  ]

  const handleOk = () => {
    form
      .validateFields()
      .then(val => {
        console.log(val)
        updateRecord(val)
        setVisible(false)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleCancel = () => {
    setVisible(false)
  }

  return (
    <>
      <Modal
        title="编辑"
        open={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        afterClose={() => {
          form.setFieldsValue({ name: undefined, id: undefined })
        }}
        destroyOnClose
      >
        <Form
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          style={{ maxWidth: 600, margin: '20px 0' }}
        >
          <Form.Item
            label="姓名"
            name="name"
            rules={[{ required: true, message: '请输入!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            style={{ display: 'none' }}
            label="ID"
            name="id"
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <Button
        onClick={generateNewRecord}
        type="primary"
        style={{ marginBottom: 16 }}
      >
        新增
      </Button>
      <Table
        columns={columns}
        dataSource={record}
      />
    </>
  )
}

export default Demo
