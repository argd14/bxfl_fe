'use client'

import { Layout, Menu, Table, Button, DatePicker, Typography, Space } from 'antd'
import {
  FileSearchOutlined,
  PlusOutlined,
  DownloadOutlined,
} from '@ant-design/icons'
import styles from './orders.module.css'

const { Header, Sider, Content } = Layout
const { RangePicker } = DatePicker
const { Title } = Typography

const columns = [
  {
    title: 'No. de orden',
    dataIndex: 'orden',
    key: 'orden',
  },
  {
    title: 'Nombre',
    dataIndex: 'nombre',
    key: 'nombre',
  },
  {
    title: 'Apellidos',
    dataIndex: 'apellidos',
    key: 'apellidos',
  },
  {
    title: 'Departamento',
    dataIndex: 'departamento',
    key: 'departamento',
  },
  {
    title: 'Municipio',
    dataIndex: 'municipio',
    key: 'municipio',
  },
  {
    title: 'Paquetes en orden',
    dataIndex: 'paquetes',
    key: 'paquetes',
  },
]

const data = [
  {
    key: '1',
    orden: '3446788',
    nombre: 'Julio',
    apellidos: 'Almendarez',
    departamento: 'San Salvador',
    municipio: 'San Salvador',
    paquetes: 4,
  },
]

const Orders = () => {
     return (
    <Layout className={styles.layout}>
      <Sider breakpoint="lg" collapsedWidth="0" className={styles.sider}>
        <div className={styles.logo}>📦 boxful</div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['2']}>
          <Menu.Item key="1" icon={<PlusOutlined />}>
            Crear orden
          </Menu.Item>
          <Menu.Item key="2" icon={<FileSearchOutlined />}>
            Historial
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header className={styles.header}>
          <div className={styles.username}>{'{Tunombre}'}</div>
        </Header>

        <Content className={styles.content}>
          <Title level={4}>Mis envíos</Title>

          <Space className={styles.actions} wrap>
            <RangePicker />
            <Button type="primary">Buscar</Button>
            <Button icon={<DownloadOutlined />}>Descargar órdenes</Button>
          </Space>

          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            className={styles.table}
          />
        </Content>
      </Layout>
    </Layout>
  )
    
}

export default Orders;
