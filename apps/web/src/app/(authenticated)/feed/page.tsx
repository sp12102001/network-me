'use client'

import React from 'react'
import { useEffect, useState } from 'react'
import { Typography, Card, Avatar, List, Spin, Space } from 'antd'
import { MessageOutlined, LikeOutlined, UserOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function PostFeedPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!userId) {
      enqueueSnackbar('User not found, please login.', { variant: 'error' })
      router.push('/home')
      return
    }

    const fetchPosts = async () => {
      setLoading(true)
      try {
        const postData = await Api.PostData.findManyByUserId(userId, {
          includes: ['user', 'comments'],
        })
        setPosts(postData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch posts.', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [userId, router])

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Network Feed</Title>
      <Text type="secondary">
        Explore the latest posts from your connections.
      </Text>
      {loading ? (
        <Spin size="large" />
      ) : (
        <List
          itemLayout="vertical"
          size="large"
          dataSource={posts}
          renderItem={post => (
            <List.Item
              key={post.id}
              actions={[
                <IconText
                  icon={LikeOutlined}
                  text="156"
                  key="list-vertical-like-o"
                />,
                <IconText
                  icon={MessageOutlined}
                  text="2"
                  key="list-vertical-message"
                />,
              ]}
              extra={
                post.imageUrl ? (
                  <img width={272} alt="logo" src={post.imageUrl} />
                ) : null
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={post.user?.pictureUrl || UserOutlined} />}
                title={
                  <a onClick={() => router.push(`/post/${post.id}`)}>
                    {post.user?.name}
                  </a>
                }
                description={dayjs(post.dateCreated).format('MMMM D, YYYY')}
              />
              {post.content}
            </List.Item>
          )}
        />
      )}
    </PageLayout>
  )
}

function IconText({ icon, text, key }) {
  return (
    <Space key={key}>
      {React.createElement(icon)}
      {text}
    </Space>
  )
}
