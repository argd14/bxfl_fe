'use client'

import { Form, Input, Button, DatePicker, Select, Typography, Row, Col } from 'antd'
import styles from './register.module.css'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'; 
const { Title, Text } = Typography
const { Option } = Select


const Register = () => {
    const router = useRouter()

    const onFinish = (values: any) => {
        console.log('Form values:', values)
    }
    
    
    const handleBack = () => {
        router.back()
    }
    return (
        <div className={styles.container}>
            <div className={styles.formSection}>
                <div className={styles.formWrapper}>
                    <div className={styles.header}>
                        <ArrowLeftOutlined onClick={handleBack} className={styles.backIcon} />
                        <Title level={4}>Cuéntanos de ti</Title>
                    </div>
                    <Text>Completa la información de registro</Text>

                    <Form layout="vertical" onFinish={onFinish} className={styles.form}>
                        <Row gutter={16}>
                            <Col xs={24} md={12}>
                                <Form.Item label="Nombre" name="nombre" rules={[{ required: false }]}>
                                    <Input placeholder="Digita tu nombre" />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item label="Apellido" name="apellido" rules={[{ required: false }]}>
                                    <Input placeholder="Digita tu apellido" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col xs={24} md={12}>
                                <Form.Item label="Sexo" name="sexo" rules={[{ required: false }]}>
                                    <Select placeholder="Seleccionar">
                                        <Option value="masculino">Masculino</Option>
                                        <Option value="femenino">Femenino</Option>
                                        <Option value="otro">Otro</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item label="Fecha de nacimiento" name="fechaNacimiento" rules={[{ required: false }]}>
                                    <DatePicker style={{ width: '100%' }} placeholder="Seleccionar" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col xs={24} md={12}>
                                <Form.Item label="Correo electrónico" name="correo" rules={[{ required: false, type: 'email' }]}>
                                    <Input placeholder="Digitar correo" />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item label="Número de whatsapp" name="whatsapp" rules={[{ required: false }]}>
                                    <Input addonBefore="+503" placeholder="Número de teléfono" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col xs={24} md={12}>
                                <Form.Item label="Contraseña" name="password" rules={[{ required: false }]}>
                                    <Input.Password placeholder="Digitar contraseña" />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item label="Repetir contraseña" name="confirmPassword" rules={[{ required: false }]}>
                                    <Input.Password placeholder="Digitar contraseña" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Siguiente
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>

            <div className={styles.blankSection}></div>
        </div>
    )
}

export default Register