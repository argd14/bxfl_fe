'use client'
import { Form, Input, Button, Typography } from 'antd'
import Link from 'next/link'
import styles from './login/login.module.css'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useAuthStore } from './store/loginStore'

const { Title, Text } = Typography
export default function Home() {

  const router = useRouter()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { request: auth } = useAuthStore();

  const handleSubmit = () => {
    auth({
      email: email,
      password: password,
    });
  };
  const handleRegister = () => {
    router.push('./register')
  }

  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <div className={styles.formWrapper}>
          <Title level={3}>Bienvenido</Title>
          <Text>Por favor ingresa tus credenciales</Text>

          <Form layout="vertical" className={styles.form}>
            <Form.Item
              label="Correo electrónico"
              name="email"
              rules={[{ required: true, message: 'Por favor ingresa tu correo' }]}
            >
              <Input onChange={(e) => setEmail(e.target.value)} value={email} style={{ width: 250 }} placeholder={'Por favor ingresa tu correo'} />
            </Form.Item>

            <Form.Item
              label="Contraseña"
              name="password"
              rules={[{ required: true, message: 'Por favor ingresa tu contraseña' }]}
            >
              <Input.Password onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Por favor ingresa tu contraseña" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" onClick={handleSubmit}>
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
