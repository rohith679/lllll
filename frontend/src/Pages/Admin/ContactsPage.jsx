import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Input, Space, Popconfirm, message } from 'antd';
import { motion } from 'framer-motion';
import { DownloadOutlined, EyeOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import userService from '../../api/userService';

const ContactsPage = () => {
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
      const response = await userService.listContacts();
      console.log('Contacts API response:', response);
      const contacts = response?.data?.result?.contacts || response?.data?.data?.contacts || response?.data?.contacts || [];
      console.log('Contacts data:', contacts);
      setData(contacts);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleExport = () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/user/contact/export`;
    window.open(url, '_blank');
  };

  const handleView = async (record) => {
    setViewItem(record);
  };

  const handleEdit = (record) => {
    setEditItem(record);
    form.setFieldsValue({ id: record._id, name: record.name, email: record.email, phone: record.phone, message: record.message });
  };

  const handleDelete = async (record) => {
    try {
      setLoading(true);
      await userService.deleteContact({ id: record._id });
      message.success('Contact deleted');
      fetchData();
    } finally {
      setLoading(false);
    }
  };

  const onFinish = async (values) => {
    try {
      setLoading(true);
      await userService.updateContact(values);
      message.success('Contact updated');
      setEditItem(null);
      fetchData();
    } finally {
      setLoading(false);
    }
  };

  const onCreate = async (values) => {
    await userService.createContact(values);
    setIsCreateOpen(false);
    createForm.resetFields();
    fetchData();
  };

  const columns = [
    { 
      title: 'Name', 
      dataIndex: 'name',
      render: (text) => (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          {text}
        </motion.span>
      )
    },
    { 
      title: 'Email', 
      dataIndex: 'email',
      render: (text) => (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          {text}
        </motion.span>
      )
    },
    { 
      title: 'Phone', 
      dataIndex: 'phone',
      render: (text) => (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          {text}
        </motion.span>
      )
    },
    {
      title: 'Actions',
      render: (_, record, index) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          <Space>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button icon={<EyeOutlined />} onClick={() => handleView(record)} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Popconfirm title="Delete contact?" onConfirm={() => handleDelete(record)}>
                <Button danger icon={<DeleteOutlined />} />
              </Popconfirm>
            </motion.div>
          </Space>
        </motion.div>
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
          <Button icon={<PlusOutlined />} onClick={() => setIsCreateOpen(true)}>Create Contact</Button>
        </motion.button>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
        <Table rowKey="_id" loading={loading} dataSource={data} columns={columns} pagination />
      </motion.div>

      <Modal open={!!viewItem} onCancel={() => setViewItem(null)} footer={null} title="View Contact" centered destroyOnClose>
        {viewItem && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <b>Name:</b> {viewItem.name}
            </motion.p>
            <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <b>Email:</b> {viewItem.email}
            </motion.p>
            <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <b>Phone:</b> {viewItem.phone}
            </motion.p>
            <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <b>Message:</b> {viewItem.message}
            </motion.p>
          </motion.div>
        )}
      </Modal>

      <Modal open={!!editItem} onCancel={() => setEditItem(null)} onOk={() => form.submit()} title="Edit Contact" centered destroyOnClose>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Form layout="vertical" form={form} onFinish={onFinish}>
            <Form.Item name="id" hidden>
              <Input />
            </Form.Item>
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <Form.Item name="name" label="Name"><Input /></Form.Item>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <Form.Item name="email" label="Email"><Input /></Form.Item>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <Form.Item name="phone" label="Phone"><Input /></Form.Item>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <Form.Item name="message" label="Message"><Input.TextArea rows={3} /></Form.Item>
            </motion.div>
          </Form>
        </motion.div>
      </Modal>

      <Modal open={isCreateOpen} onCancel={() => setIsCreateOpen(false)} onOk={() => createForm.submit()} title="Create Contact" centered destroyOnClose confirmLoading={loading}>
        <Form layout="vertical" form={createForm} onFinish={onCreate}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item name="phone" label="Phone"><Input /></Form.Item>
          <Form.Item name="message" label="Message"><Input.TextArea rows={3} /></Form.Item>
        </Form>
      </Modal>
    </motion.div>
  );
};

export default ContactsPage;


