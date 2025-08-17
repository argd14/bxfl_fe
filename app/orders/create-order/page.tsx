'use client'

import {
  Layout,
  Menu,
  Form,
  Input,
  DatePicker,
  Button,
  Typography,
  Row,
  Col,
} from 'antd'
import {
  FileSearchOutlined,
  PlusOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons'
import styles from './create-order.module.css'

const { Header, Sider, Content } = Layout
const { Title, Text } = Typography


const CreateOrder = () => {

      const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log('Datos del formulario:', values)
  }
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
          <div className={styles.username}>{'{Tunombre}'}</div>
        </Header>

        <Content className={styles.content}>
          <Title level={4}>Crear orden</Title>
          <Text className={styles.subtitle}>
            Dale una ventaja competitiva a tu negocio con entregas el <strong>mismo día</strong> (Área Metropolitana) y al día <strong>siguiente</strong> a nivel nacional.
          </Text>

          <div className={styles.card}>
            <Title level={5}>Completa los datos</Title>

            <Form
              layout="vertical"
              form={form}
              onFinish={onFinish}
              className={styles.form}
            >
              <Form.Item
                label="Dirección de recolección"
                name="direccionRecoleccion"
                rules={[{ required: true }]}
              >
                <Input defaultValue="Colonia Las Magnolias, calle militar 1, San Salvador" />
              </Form.Item>

              <Form.Item
                label="Fecha programada"
                name="fechaProgramada"
                rules={[{ required: true }]}
              >
                <DatePicker style={{ width: '100%' }} defaultValue={null} />
              </Form.Item>

              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item label="Nombres" name="nombres" rules={[{ required: true }]}>
                    <Input defaultValue="Gabriela Reneé" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label="Apellidos" name="apellidos" rules={[{ required: true }]}>
                    <Input defaultValue="Días López" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item label="Correo electrónico" name="correo" rules={[{ required: true, type: 'email' }]}>
                    <Input defaultValue="gabbydiaz@gmail.com" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label="Teléfono" name="telefono" rules={[{ required: true }]}>
                    <Input defaultValue="503 7777 7777" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                label="Dirección del destinatario"
                name="direccionDestinatario"
                rules={[{ required: true }]}
              >
                <Input defaultValue="Final 49 Av. Sur y Bulevar Los Próceres, Smartcenter, Bodega #8, San Salvador" />
              </Form.Item>

              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item label="Departamento" name="departamento" rules={[{ required: true }]}>
                    <Input defaultValue="San Salvador" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label="Municipio" name="municipio" rules={[{ required: true }]}>
                    <Input defaultValue="San Salvador" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item label="Punto de referencia" name="referencia">
                <Input defaultValue="Cerca de redondel Árbol de la Paz" />
              </Form.Item>

              <Form.Item label="Indicaciones" name="indicaciones">
                <Input defaultValue="Llamar antes de entregar" />
              </Form.Item>

              <div className={styles.buttonContainer}>
                <Button type="primary" htmlType="submit" icon={<ArrowRightOutlined />}>
                  Siguiente
                </Button>
              </div>
            </Form>
          </div>
        </Content>
      </Layout>
    </Layout>
     );
}
export default CreateOrder;