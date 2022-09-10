import * as React from 'react'
import Publish from './publish'
import DateTime from 'components/common/date'
import Slide from 'components/common/slide'
import markdownToHTML from 'plugins/markdown'
import { filterAddress, filterBrowser, filterOS } from 'utils/filter'

interface CommentItemProps {
  comment: CommentWithChildren
  isChildren?: boolean
}

const CommentItem: React.FC<CommentItemProps> = ({ comment, isChildren }) => {

  const [visible, setVisible] = React.useState(false)

  const isAdminAuthor = (comment: CommentWithChildren) => {
    return comment.name === process.env.NEXT_PUBLIC_ADMIN_USERNAME
  }

  return (
    <div className={`bg-bg-200 rounded-sm ${isChildren ? 'mb-0 border-t border-dashed border-border' : 'mb-3'}`}>
      <div className={`relative ${isChildren ? 'pl-[68px] pr-0' : 'pl-20 pr-3'}`}>
        <div className={`w-full flex bg-bg-200 py-3`}>
          <div className={`hidden sm:block rounded-sm absolute w-14 h-14 translate-y-3 border-4 border-bg-100 flex-shrink-0 ${isChildren ? 'left-0' : 'left-3'}`}>
            <img
              className="rounded-sm w-full h-full"
              src={comment.avatar}
              alt={comment.name}
            />
          </div>
          <div className="rounded-sm flex-1 flex flex-col">
            <div className="flex items-center">
              <span className="text-font-100 text-base flex items-center">
                <span>{comment.name}</span>
                {isAdminAuthor(comment) && <span className="bg-blue text-xs text-white px-[4px] rounded-[2px] ml-1">博主</span>}
              </span>
              <span className="mx-3 text-xs flex items-center">
                <i
                  className="iconfont"
                  dangerouslySetInnerHTML={{ __html: filterOS(comment.os).icon }}
                />
                {filterOS(comment.os).name}
              </span>
              <span className="text-xs flex items-center">
                <i
                  className="iconfont"
                  dangerouslySetInnerHTML={{ __html: filterBrowser(comment.browser).icon }}
                />
                {filterBrowser(comment.browser).name}
              </span>
            </div>
            <div
              className="markdown-body my-1"
              dangerouslySetInnerHTML={{ __html: markdownToHTML(comment.content) }}>
            </div>
            <div className="text-xs flex">
              <DateTime date={comment.createdAt} />
              <span className="mx-3">{filterAddress(comment.address)}</span>
              <button className="flex items-center" onClick={() => setVisible(!visible)}>
                <i className="iconfont">&#xe63c;</i>
                <span className="ml-1">回复</span>
              </button>
            </div>
          </div>
        </div>
        <Slide
          visible={visible}
          options={{
            from: { opacity: 0, height: 0 },
            enter: { opacity: 1, height: 177 },
            leave: { opacity: 0, height: 0 },
          }}
        >
          <div className={`bg-bg-200 pb-2`}>
            <Publish visible={visible} isReply />
          </div>
        </Slide>
        {comment.children &&
          comment.children.length > 0 &&
          comment.children.map((item) => (
            <CommentItem
              key={item.id}
              comment={item}
              isChildren
            />
          ))}
      </div>
    </div>
  )
}

export default CommentItem