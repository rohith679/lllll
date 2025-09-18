import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Input, Space, Popconfirm, message } from 'antd';
import { motion } from 'framer-motion';
import { DownloadOutlined, EyeOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import userService from '../../api/userService';

const ServicesPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [viewItem, setViewItem] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const [form] = Form.useForm();
  const [createForm] = Form.useForm();
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await userService.listQuickServices();
      console.log('Services API response:', response);
      const services = response?.data?.result?.requests || response?.data?.data?.requests || response?.data?.requests || [];
      console.log('Services data:', services);
      setData(services);
    } catch (error) {
      console.error('Error fetching services:', error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleExport = () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/user/quick-service/export`;
    window.open(url, '_blank');
  };

  const handleView = (record) => setViewItem(record);
  const handleEdit = (record) => { setEditItem(record); form.setFieldsValue({ id: record._id, name: record.name, phone: record.phone, serviceType: record.serviceType, message: record.message }); };
  const handleDelete = async (record) => {
    try {
      setLoading(true);
      await userService.deleteQuickService({ id: record._id });
      message.success('Request deleted');
      fetchData();
    } finally { setLoading(false); }
  };
  const onFinish = async (values) => {
    try {
      setLoading(true);
      await userService.updateQuickService(values);
      message.success('Request updated');
      setEditItem(null);
      fetchData();
    } finally { setLoading(false); }
  };

  const onCreate = async (values) => {
    try {
      setLoading(true);
      await userService.createQuickService(values);
      message.success('Request created');
      setIsCreateOpen(false);
      createForm.resetFields();
      fetchData();
    } finally { setLoading(false); }
  };

  const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Phone', dataIndex: 'phone' },
    { title: 'Service Type', dataIndex: 'serviceType' },
    { title: 'Message', dataIndex: 'message' },
    {
      title: 'Actions',
      render: (_, record) => (
        <Space>
          <Button icon={<EyeOutlined />} onClick={() => handleView(record)} />
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Popconfirm title="Delete request?" onConfirm={() => handleDelete(record)}>
            <Button danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <motion.div style={{ padding: 24 }} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      <motion.div style={{ marginBottom: 16, display: 'flex', gap: 8 }} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
        <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          <Button type="primary" icon={<DownloadOutlined />} onClick={handleExport}>Download Excel</Button>
        </motion.button>
        <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          <Button icon={<PlusOutlined />} onClick={() => setIsCreateOpen(true)}>Create Service</Button>
        </motion.button>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
        <Table rowKey="_id" loading={loading} dataSource={data} columns={columns} pagination />
      </motion.div>

      <Modal open={!!viewItem} onCancel={() => setViewItem(null)} footer={null} title="View Request" centered destroyOnClose>
        {viewItem && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
            <p><b>Name:</b> {viewItem.name}</p>
            <p><b>Phone:</b> {viewItem.phone}</p>
            <p><b>Service Type:</b> {viewItem.serviceType}</p>
            <p><b>Message:</b> {viewItem.message}</p>
          </motion.div>
        )}
      </Modal>

      <Modal open={!!editItem} onCancel={() => setEditItem(null)} onOk={() => form.submit()} title="Edit Request" centered destroyOnClose confirmLoading={loading}>
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item name="id" hidden><Input /></Form.Item>
          <Form.Item name="name" label="Name"><Input /></Form.Item>
          <Form.Item name="phone" label="Phone"><Input /></Form.Item>
          <Form.Item name="serviceType" label="Service Type"><Input /></Form.Item>
          <Form.Item name="message" label="Message"><Input.TextArea rows={3} /></Form.Item>
        </Form>
      </Modal>

      <Modal open={isCreateOpen} onCancel={() => setIsCreateOpen(false)} onOk={() => createForm.submit()} title="Create Service" centered destroyOnClose confirmLoading={loading}>
        <Form layout="vertical" form={createForm} onFinish={onCreate}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item name="phone" label="Phone" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item name="serviceType" label="Service Type" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item name="message" label="Message"><Input.TextArea rows={3} /></Form.Item>
        </Form>
      </Modal>
    </motion.div>
  );
};

export default ServicesPage;


