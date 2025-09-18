import React, { useState } from 'react';
import { Button, Card, Form, Input } from 'antd';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import userService from '../../api/userService';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const resp = await userService.login(values);
      const api = resp?.data;
      console.log('Login API response:', api); // Debug log
      
      // Backend success shape: { message: 'success', code, data: { token, user, ... } }
      // Backend error shape: { message: 'failure', code, data: { message: 'error msg', ... } }
      const topLevelMessage = api?.message;
      const token = api?.data?.token;
      const successMessage = api?.data?.message;
      const errorMessage = api?.data?.message;
      
      if (resp?.status === 200 && topLevelMessage === 'success' && token) {
        localStorage.setItem('authtoken', token);
        toast.success(successMessage || 'Login successful');
        navigate('/admin/contacts', { replace: true });
      } else {
        console.warn('Login API response indicates failure:', api);
        const errMsg = errorMessage || 'Invalid email or password';
        toast.error(errMsg);
      }
    } catch (err) {
      console.error('Login failed:', err);
      const errMsg = err?.response?.data?.data?.message || err?.response?.data?.message || err?.message || 'Login failed';
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = () => {
    toast.error('Please enter email and password');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Card title="Admin Login" style={{ width: 360 }}>
        <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input placeholder="Enter email" />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true }]}>
            <Input.Password placeholder="Enter password" />
          </Form.Item>
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
            <Button type="primary" htmlType="submit" loading={loading} block>Login</Button>
          </motion.div>
        </Form>
      </Card>
      </motion.div>
    </div>
  );
};

export default AdminLogin;


