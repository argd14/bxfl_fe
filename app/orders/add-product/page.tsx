'use client'

import {
  Layout,
  Menu,
  Typography,
  Form,
  Input,
  Button,
  Row,
  Col,
  Space,
  Divider,
  Table,
} from 'antd'
import {
  PlusOutlined,
  FileSearchOutlined,
  SendOutlined,
  ArrowLeftOutlined,
} from '@ant-design/icons'
import styles from './add-product.module.css'
import { useState } from 'react'

const { Header, Sider, Content } = Layout
const { Title, Text } = Typography


const AddProduct = () => {

      const [form] = Form.useForm()
  const [productos, setProductos] = useState([
    {
      key: '1',
      largo: '15',
      alto: '15',
      ancho: '15',
      peso: '3 libras',
      contenido: 'iPhone 14 pro Max',
    },
  ])

      const onAdd = (values: any) => {
    const nuevo = {
      key: `${Date.now()}`,
      largo: values.largo,
      alto: values.alto,
      ancho: values.ancho,
      peso: values.peso,
      contenido: values.contenido,
    }
    setProductos([...productos, nuevo])
    form.resetFields()
  }

  const columns = [
    { title: 'Peso en libras', dataIndex: 'peso', key: 'peso' },
    { title: 'Contenido', dataIndex: 'contenido', key: 'contenido' },
    { title: 'Largo', dataIndex: 'largo', key: 'largo' },
    { title: 'Alto', dataIndex: 'alto', key: 'alto' },
    { title: 'Ancho', dataIndex: 'ancho', key: 'ancho' },
  ]
    return (  
            <Layout className={styles.layout}>
      <Sider breakpoint="lg" collapsedWidth="0" className={styles.sider}>
        <div className={styles.logo}>📦 boxful</div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
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
          <div className={styles.username}>Tunombre</div>
        </Header>

        <Content className={styles.content}>
          <Title level={4}>Crear orden</Title>
          <Text className={styles.subtitle}>
            Dale una ventaja competitiva a tu negocio con entregas el <strong>mismo día</strong> (Área Metropolitana) y al día <strong>siguiente</strong> a nivel nacional.
          </Text>

          <div className={styles.card}>
            <Title level={5}>Agrega tus productos</Title>

            <Form form={form} layout="vertical" onFinish={onAdd}>
              <Row gutter={16}>
                <Col xs={8}>
                  <Form.Item label="Largo" name="largo" rules={[{ required: true }]}>
                    <Input suffix="cm" />
                  </Form.Item>
                </Col>
                <Col xs={8}>
                  <Form.Item label="Alto" name="alto" rules={[{ required: true }]}>
                    <Input suffix="cm" />
                  </Form.Item>
                </Col>
                <Col xs={8}>
                  <Form.Item label="Ancho" name="ancho" rules={[{ required: true }]}>
                    <Input suffix="cm" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={12}>
                  <Form.Item label="Peso" name="peso" rules={[{ required: true }]}>
                    <Input placeholder="Ej. 3 libras" />
                  </Form.Item>
                </Col>
                <Col xs={12}>
                  <Form.Item label="Contenido" name="contenido" rules={[{ required: true }]}>
                    <Input placeholder="Ej. iPhone 14 pro Max" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item>
                <Button type="default" htmlType="submit" icon={<PlusOutlined />}>
                  Agregar
                </Button>
              </Form.Item>
            </Form>

            <Divider />

            <Table
              columns={columns}
              dataSource={productos}
              pagination={false}
              className={styles.table}
              scroll={{ x: 'max-content' }}
            />

            <div className={styles.actions}>
              <Button icon={<ArrowLeftOutlined />}>Regresar</Button>
              <Button type="primary" icon={<SendOutlined />}>
                Enviar
              </Button>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
    );
}
 
export default AddProduct;