'use client'

import { useEffect, useState } from 'react'
import { Input, Button, List, Avatar, Typography, Spin } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function SearchResultsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [keyword, setKeyword] = useState('')
  const [loading, setLoading] = useState(false)
  const [searchResults, setSearchResults] = useState<Model.Search[]>([])

  useEffect(() => {
    if (userId) {
      fetchSearchResults()
    }
  }, [userId])

  const fetchSearchResults = async () => {
    setLoading(true)
    try {
      const results = await Api.Search.findManyByUserId(userId, {
        includes: ['user'],
      })
      setSearchResults(results)
      setLoading(false)
    } catch (error) {
      enqueueSnackbar('Failed to fetch search results', { variant: 'error' })
      setLoading(false)
    }
  }

  const handleSearch = async () => {
    setLoading(true)
    try {
      const results = await Api.Search.createOneByUserId(userId, { keyword })
      setSearchResults(prev => [results, ...prev])
      enqueueSnackbar('Search added successfully', { variant: 'success' })
      setLoading(false)
    } catch (error) {
      enqueueSnackbar('Failed to add search', { variant: 'error' })
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Search Results</Title>
      <Text type="secondary">Enter a keyword to find related searches.</Text>
      <Input
        placeholder="Enter search keyword"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        suffix={
          <Button
            icon={<SearchOutlined />}
            onClick={handleSearch}
            disabled={!keyword.trim()}
          >
            Search
          </Button>
        }
      />
      {loading ? (
        <Spin size="large" />
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={searchResults}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.user?.pictureUrl || undefined} />}
                title={
                  <a onClick={() => router.push(`/profile/${item.userId}`)}>
                    {item.user?.name}
                  </a>
                }
                description={`Searched on ${dayjs(item.dateCreated).format('MMMM D, YYYY')}`}
              />
            </List.Item>
          )}
        />
      )}
    </PageLayout>
  )
}
