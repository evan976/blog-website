import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { tagService } from '../../api'
import useAsyncLoading from '../../hooks/useAsyncLoading'
import Card from '../Card'
import { TagFill } from '../Icons/TagFill'
import TagItem from './TagItem'

const TagList: React.FC = () => {
  const router = useRouter()
  const [tagList, setTagList] = useState<ITag[]>([])
  const [fetchTagList, loading] = useAsyncLoading(tagService.findAll, 150, true)

  React.useEffect(() => {
    fetchTagList()
      .then(res => {
        setTagList(res.data)
      })
  }, [])

  return (
    <Card
      title='标签列表'
      icon={<TagFill />}
    >
      {loading ? <div>loading...</div> : (
        <ul className='tag-list'>
          {
            tagList.map(tag => (
              <TagItem
                key={tag.id}
                name={tag.name}
                color={tag.color}
                articleCount={tag.postCount}
                onClick={() => router.push('/tag/[slug]', `/tag/${tag.slug}`)}
              />
            ))
          }
        </ul>
      )}
    </Card>
  )
}

export default TagList