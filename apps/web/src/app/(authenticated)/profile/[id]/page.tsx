'use client'

import { useEffect, useState } from 'react'
import { Typography, Avatar, Card, List, Space, Spin } from 'antd'
import { UserOutlined, MailOutlined, GlobalOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
interface User {
  id: string
  email: string
  name?: string
  pictureUrl?: string
  dateCreated: string
  posts?: PostData[]
  connectionsAsUserId1?: Connection[]
  connectionsAsUserId2?: Connection[]
}
interface PostData {
  id: string
  content?: string
  dateCreated: string
}
interface Connection {
  id: string
  userId1?: User
  userId2?: User
  dateCreated: string
}
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function UserProfilePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const { enqueueSnackbar } = useSnackbar()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await Api.User.findOne(params.id, {
          includes: ['posts', 'connectionsAsUserId1', 'connectionsAsUserId2'],
        })
        setUser(userData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch user data', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchUser()
    }
  }, [params.id])

  if (loading) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <Spin size="large" />
      </div>
    )
  }

  if (!user) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <Title level={4}>User not found</Title>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '800px', margin: 'auto' }}>
      <Title level={2}>User Profile</Title>
      <Card
        style={{ marginBottom: 24 }}
        actions={[
          <MailOutlined
            key="email"
            onClick={() => (window.location.href = `mailto:${user.email}`)}
          />,
          <GlobalOutlined
            key="goToPosts"
            onClick={() => router.push(`/feed`)}
          />,
        ]}
      >
        <Card.Meta
          avatar={
            <Avatar
              src={user.pictureUrl || undefined}
              icon={<UserOutlined />}
            />
          }
          title={user.name}
          description={`Joined: ${dayjs(user.dateCreated).format('DD MMM YYYY')}`}
        />
      </Card>

      <Title level={4}>Posts</Title>
      <List
        itemLayout="horizontal"
        dataSource={user.posts}
        renderItem={post => (
          <List.Item
            actions={[
              <a key="view" onClick={() => router.push(`/post/${post.id}`)}>
                View
              </a>,
            ]}
          >
            <List.Item.Meta
              title={post.content}
              description={`Posted on ${dayjs(post.dateCreated).format('DD MMM YYYY')}`}
            />
          </List.Item>
        )}
      />

      <Title level={4}>Connections</Title>
      <List
        itemLayout="horizontal"
        dataSource={[
          ...(user.connectionsAsUserId1 || []),
          ...(user.connectionsAsUserId2 || []),
        ]}
        renderItem={connection => (
          <List.Item
            actions={[
              <a
                key="view"
                onClick={() =>
                  router.push(`/connection-profile/${connection.id}`)
                }
              >
                View Profile
              </a>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  src={
                    connection.userId2?.pictureUrl ||
                    connection.userId1?.pictureUrl ||
                    undefined
                  }
                  icon={<UserOutlined />}
                />
              }
              title={connection.userId2?.name || connection.userId1?.name}
              description={`Connected since ${dayjs(connection.dateCreated).format('DD MMM YYYY')}`}
            />
          </List.Item>
        )}
      />
    </div>
  )
}
