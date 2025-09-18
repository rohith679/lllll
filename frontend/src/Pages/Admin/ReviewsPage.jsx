import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Input, Space, Popconfirm, Rate, Checkbox, message } from 'antd';
import { motion } from 'framer-motion';
import { DownloadOutlined, EyeOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import userService from '../../api/userService';

const ReviewsPage = () => {
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
      const response = await userService.listReviews();
      console.log('Reviews API response:', response);
      const reviews = response?.data?.result?.reviews || response?.data?.data?.reviews || response?.data?.reviews || [];
      console.log('Reviews data:', reviews);
      setData(reviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleExport = () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/user/review/export`;
    window.open(url, '_blank');
  };

  const handleView = (record) => setViewItem(record);

  const handleEdit = (record) => {
    setEditItem(record);
    form.setFieldsValue({ id: record._id, name: record.name, email: record.email, organization: record.organization, rating: record.rating, category: record.category, review: record.review });
  };

  const handleDelete = async (record) => {
    try {
      setLoading(true);
      await userService.deleteReview({ id: record._id });
      message.success('Review deleted');
      fetchData();
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (record) => {
    try {
      setLoading(true);
      await userService.updateReview({ id: record._id, agree: true });
      message.success('Review approved');
      fetchData();
    } finally {
      setLoading(false);
    }
  };

  const handleDeny = async (record) => {
    try {
      setLoading(true);
      await userService.updateReview({ id: record._id, agree: false });
      message.success('Review denied');
      fetchData();
    } finally {
      setLoading(false);
    }
  };

  const onFinish = async (values) => {
    try {
      setLoading(true);
      await userService.updateReview(values);
      message.success('Review updated');
      setEditItem(null);
      fetchData();
    } finally {
      setLoading(false);
    }
  };

  const onCreate = async (values) => {
    try {
      setLoading(true);
      await userService.createReview({
        name: values.name,
        email: values.email,
        organization: values.organization,
        rating: Number(values.rating) || undefined,
        category: values.category,
        review: values.review,
        // approval is controlled by admin; server defaults to false
      });
      message.success('Review created');
      setIsCreateOpen(false);
      createForm.resetFields();
      fetchData();
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Email', dataIndex: 'email' },
    { title: 'Organization', dataIndex: 'organization' },
    { title: 'Rating', dataIndex: 'rating', render: (r) => <Rate disabled defaultValue={Number(r) || 0} /> },
    { title: 'Category', dataIndex: 'category' },
    { title: 'Approved', dataIndex: 'agree', render: (v) => v ? 'Yes' : 'No' },
    {
      title: 'Actions',
      render: (_, record) => (
        <Space>
          <Button onClick={() => handleApprove(record)} disabled={record.agree === true}>Approve</Button>
          <Button onClick={() => handleDeny(record)} disabled={record.agree === false}>Deny</Button>
          <Button icon={<EyeOutlined />} onClick={() => handleView(record)} />
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Popconfirm title="Delete review?" onConfirm={() => handleDelete(record)}>
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
          <Button icon={<PlusOutlined />} onClick={() => setIsCreateOpen(true)}>Create Review</Button>
        </motion.button>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
        <Table rowKey="_id" loading={loading} dataSource={data} columns={columns} pagination />
      </motion.div>

      <Modal open={!!viewItem} onCancel={() => setViewItem(null)} footer={null} title="View Review" centered destroyOnClose>
        {viewItem && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
            <p><b>Name:</b> {viewItem.name}</p>
            <p><b>Email:</b> {viewItem.email}</p>
            <p><b>Organization:</b> {viewItem.organization}</p>
            <p><b>Rating:</b> <Rate disabled defaultValue={Number(viewItem.rating) || 0} /></p>
            <p><b>Category:</b> {viewItem.category}</p>
            <p><b>Review:</b> {viewItem.review}</p>
          </motion.div>
        )}
      </Modal>

      <Modal open={!!editItem} onCancel={() => setEditItem(null)} onOk={() => form.submit()} title="Edit Review" centered destroyOnClose>
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item name="id" hidden><Input /></Form.Item>
          <Form.Item name="name" label="Name"><Input /></Form.Item>
          <Form.Item name="email" label="Email"><Input /></Form.Item>
          <Form.Item name="organization" label="Organization"><Input /></Form.Item>
          <Form.Item name="rating" label="Rating"><Input /></Form.Item>
          <Form.Item name="category" label="Category"><Input /></Form.Item>
          <Form.Item name="review" label="Review"><Input.TextArea rows={3} /></Form.Item>
          <Form.Item name="agree" valuePropName="checked" label="Approved"><Checkbox /></Form.Item>
        </Form>
      </Modal>

      <Modal open={isCreateOpen} onCancel={() => setIsCreateOpen(false)} onOk={() => createForm.submit()} title="Create Review" centered destroyOnClose>
        <Form layout="vertical" form={createForm} onFinish={onCreate}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item name="organization" label="Organization"><Input /></Form.Item>
          <Form.Item name="rating" label="Rating"><Input /></Form.Item>
          <Form.Item name="category" label="Category"><Input /></Form.Item>
          <Form.Item name="review" label="Review"><Input.TextArea rows={3} /></Form.Item>
          {/* Approval is handled by admin. */}
        </Form>
      </Modal>
    </motion.div>
  );
};

export default ReviewsPage;


