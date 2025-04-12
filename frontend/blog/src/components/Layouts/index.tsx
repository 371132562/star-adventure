import { AppstoreOutlined, MailOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { ConfigProvider, Layout, Menu } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import React from 'react'
import { Outlet } from 'react-router'

import style from './index.module.less'

type MenuItem = Required<MenuProps>['items'][number]
const { Header, Content, Sider } = Layout

const Layouts: React.FC = () => {
  const items: MenuItem[] = [
    {
      key: 'sub1',
      label: '菜单一',
      icon: <MailOutlined />,
      children: [
        { key: '1', label: '子菜单一' },
        { key: '2', label: '子菜单二' }
      ]
    },
    {
      key: 'sub2',
      label: '菜单二',
      icon: <AppstoreOutlined />,
      children: [
        { key: '5', label: '子菜单三' },
        { key: '6', label: '子菜单四' }
      ]
    }
  ]

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e)
  }
  return (
    <ConfigProvider locale={zhCN}>
      <Layout className={style.layout}>
        <Header>header</Header>
        <Layout className={style.mainLayout}>
          <Sider className={style.sider}>
            <Menu
              className={style.menu}
              onClick={onClick}
              // style={{ width: 256 }}
              // defaultSelectedKeys={['1']}
              // defaultOpenKeys={['sub1']}
              mode="inline"
              items={items}
            />
          </Sider>
          <Content className={style.content}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default Layouts
