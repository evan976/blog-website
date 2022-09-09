import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Card from 'components/common/card'
import LineSkeleton from 'components/common/skeleton/line'
import useRequest from 'hooks/useRequest'
import fetch from 'service/fetch'

const fetchTags = () => fetch.get<Array<Tag>>('/tags')

const Tag: React.FC = () => {

  const [tagList, setTagList] = useState<Array<Tag>>([])

  const [fetchTagList, loading] = useRequest(fetchTags, 150, true)

  useEffect(() => {
    fetchTagList()
      .then(data => {
        setTagList(data)
      })
  }, [fetchTagList])

  return (
    <Card title="文章标签" icon="&#xe701;" className="mt-3 sticky top-[382px]">
      <ul className="max-h-80 flex flex-wrap overflow-y-scroll">
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <li className="h-5 w-full mb-3" key={index}>
              <LineSkeleton />
            </li>
          ))
        ) : (
          tagList?.map(tag => (
            <Link href={`/tag/${tag.slug}`} key={tag.id}>
              <a>
                <li
                  className={`inline-block m-1 cursor-pointer transition-all duration-300 py-[2px] px-2 rounded-sm text-white opacity-80 hover:opacity-100`}
                  style={{ background: tag.color }}
                >
                  <i className="iconfont align-middle">&#xe701;</i>
                  <span className="ml-[2px] text-sm">{tag.name}({tag.postCount})</span>
                </li>
              </a>
            </Link>
          ))
        )}
      </ul>
    </Card>
  )
}

export default Tag
