'use client'

import { useEffect, useState } from 'react'
import { Card, Avatar, List, Typography, Grid } from 'antd'
import { UserOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { useBreakpoint } = Grid
interface User {
  id: string
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
  user?: User
  dateCreated: string
}
interface Connection {
  userId1Id?: string
  userId1?: User
  userId2Id?: string
  userId2?: User
}
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ViewConnectionProfilePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [user, setUser] = useState<User | null>(null)
  const screens = useBreakpoint()

  useEffect(() => {
    if (!params.id) {
      enqueueSnackbar('No user ID provided', { variant: 'error' })
      router.push('/home')
    } else {
      Api.User.findOne(params.id, {
        includes: [
          'posts',
          'connectionsAsUserId1.userId2',
          'connectionsAsUserId2.userId1',
        ],
      })
        .then((data: User) => setUser(data))
        .catch(() => {
          enqueueSnackbar('Failed to fetch user data', { variant: 'error' })
        })
    }
  }, [params.id])

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Connection Profile</Title>
      <Text type="secondary">Detailed profile view of your connection.</Text>
      {user ? (
        <Card
          style={{ marginTop: 24 }}
          actions={[
            <UserOutlined
              key="edit"
              onClick={() => router.push(`/edit-profile`)}
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
            description={`Joined: ${dayjs(user.dateCreated).format('YYYY-MM-DD')}`}
          />
          <List
            itemLayout="horizontal"
            dataSource={user.posts}
            renderItem={post => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={post.user?.pictureUrl || undefined}
                      icon={<UserOutlined />}
                    />
                  }
                  title={
                    <a onClick={() => router.push(`/post/${post.id}`)}>
                      {post.content}
                    </a>
                  }
                  description={`Posted on: ${dayjs(post.dateCreated).format('YYYY-MM-DD')}`}
                />
              </List.Item>
            )}
          />
          <Title level={4}>Mutual Connections</Title>
          <List
            grid={{ gutter: 16, column: screens.xs ? 1 : 2 }}
            dataSource={[
              ...(user.connectionsAsUserId1 || []),
              ...(user.connectionsAsUserId2 || []),
            ]}
            renderItem={connection => (
              <List.Item>
                <Card
                  hoverable
                  onClick={() =>
                    router.push(
                      `/connection-profile/${connection.userId2Id || connection.userId1Id}`,
                    )
                  }
                >
                  <Card.Meta
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
                  />
                </Card>
              </List.Item>
            )}
          />
        </Card>
      ) : (
        <Text>Loading...</Text>
      )}
    </PageLayout>
  )
}
