'use client'

import { useEffect, useState } from 'react'
import { Typography, List, Avatar, Button, Space } from 'antd'
import { UserOutlined, MailOutlined, LinkOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function UserConnectionsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [connections, setConnections] = useState([])

  useEffect(() => {
    if (!userId) {
      enqueueSnackbar('User not authenticated', { variant: 'error' })
      router.push('/home')
      return
    }

    const fetchConnections = async () => {
      try {
        const user = await Api.User.findOne(userId, {
          includes: ['connectionsAsUserId1', 'connectionsAsUserId1.userId2'],
        })
        setConnections(user.connectionsAsUserId1 || [])
      } catch (error) {
        enqueueSnackbar('Failed to fetch connections', { variant: 'error' })
      }
    }

    fetchConnections()
  }, [userId, router])

  const handleViewProfile = connectionId => {
    router.push(`/connection-profile/${connectionId}`)
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>My Connections</Title>
      <Text type="secondary">
        Manage your professional network and explore new connections.
      </Text>
      <List
        itemLayout="horizontal"
        dataSource={connections}
        renderItem={item => (
          <List.Item
            actions={[
              <Button
                type="link"
                icon={<LinkOutlined />}
                onClick={() => handleViewProfile(item.userId2Id)}
              >
                View Profile
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  src={item.userId2?.pictureUrl || undefined}
                  icon={<UserOutlined />}
                />
              }
              title={item.userId2?.name || 'Unknown User'}
              description={
                <a href={`mailto:${item.userId2?.email}`}>
                  <MailOutlined /> {item.userId2?.email}
                </a>
              }
            />
          </List.Item>
        )}
      />
    </PageLayout>
  )
}
