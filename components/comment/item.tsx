import * as React from 'react'
import Publish from './publish'
import DateTime from 'components/common/date'
import Slide from 'components/common/slide'
import markdownToHTML from 'plugins/markdown'
import { IComment } from 'types'
import { filterAddress, filterBrowser, filterOS } from 'utils/filter'

interface CommentItemProps {
  comment: IComment
  reply?: IComment
  isChildren?: boolean
}

const CommentItem: React.FC<CommentItemProps> = ({ comment, isChildren, reply }) => {

  const [visible, setVisible] = React.useState(false)

  const isAdminAuthor = (comment: IComment) => {
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
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="flex items-center">
                  <span className="text-sm">
                    <a className="text-font-100" href={comment.site}>{comment.name}</a>
                    {isAdminAuthor(comment) && <span className="bg-blue text-xs text-white px-[4px] rounded-[2px] ml-1">博主</span>}
                  </span>
                  {comment.reply_user_name && (
                    <>
                      <span className="text-font-300 text-sm mx-1">回复</span>
                      <span className="text-sm">
                        <a className="text-font-100" href={comment.reply_user_site}>
                          {comment.reply_user_name}
                        </a>
                      </span>
                    </>
                  )}
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
              <span className="text-xs text-font-300">#{comment.id}</span>
            </div>
            <div
              className="markdown-body my-1"
              dangerouslySetInnerHTML={{ __html: markdownToHTML(comment.content) }}>
            </div>
            <div className="text-xs flex">
              <DateTime date={comment.created_at * 1000} />
              <span className="mx-3">{filterAddress(comment.address)}</span>
              <button className="flex items-center hover:text-font-100 duration-200" onClick={() => setVisible(!visible)}>
                <i
                  className="iconfont"
                  dangerouslySetInnerHTML={{ __html: visible ? '&#xe685;' : '&#xe63c;' }}
                />
                <span className="ml-1">{visible ? '取消回复' : '回复'}</span>
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
            <Publish
              visible={visible}
              isReply
              comment={comment}
              reply={comment}
            />
          </div>
        </Slide>
        {comment.replys &&
          comment.replys.length > 0 &&
          comment.replys.map((item) => (
            <CommentItem
              key={item.id}
              comment={item}
              reply={item}
              isChildren
            />
          ))}
      </div>
    </div>
  )
}

export default CommentItem