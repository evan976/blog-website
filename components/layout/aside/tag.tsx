import Link from 'next/link'
import * as React from 'react'
import Card from 'components/common/card'
import LineSkeleton from 'components/common/skeleton/line'
import { Tag as ITag } from 'types'

const Tag: React.FC<{ tags: Array<ITag>, loading: boolean }> = ({ loading, tags }) => {

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
          tags?.map(tag => (
            <Link href={`/tag/${tag.slug}`} key={tag.id}>
              <a>
                <li
                  className={`inline-block m-1 cursor-pointer transition-all duration-300 py-[2px] px-2 rounded-sm text-white`}
                  style={{ background: tag.color }}
                >
                  <span className="ml-[2px] text-sm">{tag.name}({tag.article_count})</span>
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
