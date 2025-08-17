'use client'

import { Layout, Menu, Table, Button, DatePicker, Typography, Space  } from 'antd'
import {
  FileSearchOutlined,
  PlusOutlined,
  DownloadOutlined,
} from '@ant-design/icons'
import styles from './orders.module.css'
import { NavbarLogo } from '@/components/navbar-logo'
import { useRouter } from 'next/navigation';

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
    orden: '1120928',
    nombre: 'Andres',
    apellidos: 'Garcia',
    departamento: 'San Salvador',
    municipio: 'San Salvador',
    paquetes: 4,
  },
]

const Orders = () => {
  const router = useRouter();

  const goToCreateOrder = () => {
    router.push('/orders/create-order');
  };
     return (
    <Layout className={styles.layout}>
      <Sider breakpoint="lg" collapsedWidth="0" className={styles.sider}>
        <NavbarLogo/>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['2']}>
          <Header style={{ fontSize: '16px', fontWeight: 'bold', backgroundColor: 'transparent' }} >Menu</Header>
          <Menu.Item key="1" icon={<PlusOutlined />} style={{ color: '#2E49CE' }} onClick={goToCreateOrder}>
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
