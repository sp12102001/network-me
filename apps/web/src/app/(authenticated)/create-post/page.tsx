'use client'

import { useState } from 'react'
import { Button, Form, Input, Upload, Typography } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CreatePostPage() {
  const [content, setContent] = useState('')
  const [fileList, setFileList] = useState([])
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id

  const handleUpload = async options => {
    const { file } = options
    const url = await Api.Upload.upload(file)
    setFileList(fileList => [...fileList, { url: url, status: 'done' }])
  }

  const handleSubmit = async () => {
    if (!content.trim() && fileList.length === 0) {
      enqueueSnackbar('Please enter content or upload an image.', {
        variant: 'error',
      })
      return
    }

    const values = {
      content: content,
      imageUrl: fileList.length > 0 ? fileList[0].url : undefined,
      userId: userId,
    }

    try {
      await Api.PostData.createOneByUserId(userId, values)
      enqueueSnackbar('Post created successfully!', { variant: 'success' })
      router.push('/feed')
    } catch (error) {
      enqueueSnackbar('Failed to create post.', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Create a New Post</Title>
      <Paragraph>Share something interesting with your network.</Paragraph>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="What's on your mind?">
          <Input.TextArea
            rows={4}
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Upload Image">
          <Upload
            listType="picture-card"
            fileList={fileList}
            beforeUpload={() => false}
            customRequest={handleUpload}
            maxCount={1}
          >
            {fileList.length < 1 && (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Post
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}
