'use client'

import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Upload, Typography } from 'antd'
import { UserOutlined, MailOutlined, PictureOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function EditProfilePage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [user, setUser] = useState(null)
  const [form] = Form.useForm()

  useEffect(() => {
    if (!userId) {
      enqueueSnackbar('You must be logged in to edit your profile.', {
        variant: 'error',
      })
      router.push('/home')
      return
    }

    const fetchUser = async () => {
      try {
        const userData = await Api.User.findOne(userId)
        setUser(userData)
        form.setFieldsValue(userData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch user data.', { variant: 'error' })
      }
    }

    fetchUser()
  }, [userId, form, router])

  const handleUpdateProfile = async values => {
    try {
      const updatedUser = await Api.User.updateOne(userId, values)
      setUser(updatedUser)
      enqueueSnackbar('Profile updated successfully!', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to update profile.', { variant: 'error' })
    }
  }

  const handleUpload = async options => {
    const { file } = options
    const url = await Api.Upload.upload(file)
    form.setFieldsValue({ pictureUrl: url })
    enqueueSnackbar('Picture uploaded successfully!', { variant: 'success' })
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Edit Profile</Title>
      <Text>Edit your profile information below.</Text>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleUpdateProfile}
        initialValues={user}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" type="email" />
        </Form.Item>
        <Form.Item name="pictureUrl" label="Profile Picture">
          <Upload customRequest={handleUpload} maxCount={1}>
            <Button icon={<PictureOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update Profile
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}
