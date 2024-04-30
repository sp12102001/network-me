'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Card, Avatar, List, Space } from 'antd'
import { MessageOutlined, LikeOutlined, UserOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userId) {
      enqueueSnackbar('User not authenticated', { variant: 'error' })
      router.push('/')
      return
    }

    const fetchData = async () => {
      try {
        const userData = await Api.User.findOne(userId, {
          includes: ['posts', 'posts.comments', 'posts.user'],
        })
        setUser(userData)
        setPosts(userData.posts || [])
      } catch (error) {
        enqueueSnackbar('Failed to fetch user data', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [userId, router])

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  )

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Welcome to Your Network</Title>
      <Text>
        This is your main hub for the latest updates and posts from your
        connections.
      </Text>
      {loading ? (
        <Text>Loading...</Text>
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
                  text={post.comments?.length || 0}
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
                    {post.user?.name || 'Unknown User'}
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
