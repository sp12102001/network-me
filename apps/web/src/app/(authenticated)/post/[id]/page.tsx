'use client'

import { useEffect, useState } from 'react'
import {
  Typography,
  Spin,
  Card,
  Comment as AntComment,
  Avatar,
  List,
  Input,
  Button,
} from 'antd'
import { UserOutlined, SendOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ViewPostPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const { enqueueSnackbar } = useSnackbar()
  const [postData, setPostData] = useState<Model.PostData | null>(null)
  const [comments, setComments] = useState<Model.Comment[]>([])
  const [loading, setLoading] = useState(true)
  const [commentContent, setCommentContent] = useState('')

  useEffect(() => {
    if (!params.id) {
      enqueueSnackbar('Post ID is missing', { variant: 'error' })
      router.push('/feed')
      return
    }

    const fetchPostData = async () => {
      try {
        const postDataFound = await Api.PostData.findOne(params.id, {
          includes: ['user', 'comments.user'],
        })
        setPostData(postDataFound)
        setComments(postDataFound.comments || [])
      } catch (error) {
        enqueueSnackbar('Failed to fetch post data', { variant: 'error' })
        router.push('/feed')
      } finally {
        setLoading(false)
      }
    }

    fetchPostData()
  }, [params.id, router])

  const handleAddComment = async () => {
    if (!commentContent.trim()) {
      enqueueSnackbar('Comment cannot be empty', { variant: 'error' })
      return
    }

    try {
      const newComment = await Api.Comment.createOneByPostId(postData!.id, {
        content: commentContent,
        userId: authentication.user!.id,
      })
      setComments([...comments, newComment])
      setCommentContent('')
      enqueueSnackbar('Comment added successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to add comment', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Post Details</Title>
      {loading ? (
        <Spin size="large" />
      ) : postData ? (
        <>
          <Card
            title={postData.user?.name || 'Unknown User'}
            extra={
              <Text>{dayjs(postData.dateCreated).format('DD MMM YYYY')}</Text>
            }
            style={{ marginBottom: 20 }}
          >
            <Text>{postData.content}</Text>
            {postData.imageUrl && (
              <img
                src={postData.imageUrl}
                alt="Post"
                style={{ maxWidth: '100%', marginTop: 10 }}
              />
            )}
          </Card>
          <Title level={4}>Comments</Title>
          <List
            dataSource={comments}
            renderItem={comment => (
              <AntComment
                author={comment.user?.name || 'Anonymous'}
                avatar={
                  <Avatar
                    icon={<UserOutlined />}
                    src={comment.user?.pictureUrl}
                  />
                }
                content={comment.content}
                datetime={dayjs(comment.dateCreated).format('DD MMM YYYY')}
              />
            )}
          />
          <Input.TextArea
            rows={4}
            value={commentContent}
            onChange={e => setCommentContent(e.target.value)}
          />
          <Button
            type="primary"
            onClick={handleAddComment}
            icon={<SendOutlined />}
            style={{ marginTop: 10 }}
          >
            Add Comment
          </Button>
        </>
      ) : (
        <Text>Post not found</Text>
      )}
    </PageLayout>
  )
}
