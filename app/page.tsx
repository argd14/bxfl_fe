'use client'
import { Form, Input, Button, Typography } from 'antd'
import Link from 'next/link'
import styles from './login/login.module.css'
import { useRouter } from 'next/navigation'

const { Title, Text } = Typography
export default function Home() {
  
  const router = useRouter()
 const handleRegister = () => {
      router.push('./register')
    }
  const onFinish = (values: any) => {
    console.log('Received values:', values)
  }
  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <div className={styles.formWrapper}>
          <Title level={3}>Bienvenido</Title>
          <Text>Por favor ingresa tus credenciales</Text>

          <Form layout="vertical" onFinish={onFinish} className={styles.form}>
            <Form.Item
              label="Correo electrónico"
              name="email"
              rules={[{ required: true, message: 'Por favor ingresa tu correo' }]}
            >
              <Input placeholder="Digita tu correo" />
            </Form.Item>

            <Form.Item
              label="Contraseña"
              name="password"
              rules={[{ required: true, message: 'Por favor ingresa tu contraseña' }]}
            >
              <Input.Password placeholder="Digita el NIT del comercio" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Iniciar sesión
              </Button>
            </Form.Item>
          </Form>

          <Text type="secondary" className={styles.registerText} >
            ¿Necesitas una cuenta? <Link onClick={handleRegister} href="/register">Regístrate aquí</Link>
          </Text>
        </div>
      </div>

      <div className={styles.blankSection}></div>
    </div>
  );
}
