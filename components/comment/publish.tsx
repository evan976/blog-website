import * as React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { addComment } from 'api'
import Lazyload from 'components/common/lazyload'
import useReactive from 'hooks/useReactive'
import { IComment } from 'types'

interface PublishProps {
  visible?: boolean
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>
  isReply?: boolean
  comment?: IComment
  reply?: IComment
  articleId?: number
}

type FormValue = {
  name: string
  email: string
  site: string
  content: string
}

const Publish: React.FC<PublishProps> = ({
  visible,
  isReply = false,
  comment,
  reply,
  articleId
}) => {

  const [innerVisible, setInnerVisible] = React.useState(visible)

  const formValue = useReactive<FormValue>({
    name: '',
    email: '',
    site: '',
    content: ''
  })

  const handleAddComment: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const data = {
      name: formValue.name,
      email: formValue.email,
      site: formValue.site,
      content: formValue.content
    }

    if (articleId) {
      Object.assign(data, { article_id: articleId })
    }

    if (comment && (comment.parent_id || comment.id)) {
      Object.assign(data, { parent_id: comment.parent_id ?? comment.id })
    }

    if (comment && comment.article_id) {
      Object.assign(data, { article_id: comment.article_id })
    }

    if (reply) {
      Object.assign(data, {
        reply_user_name: reply.name,
        reply_user_email: reply.email,
        reply_user_site: reply.site
      })
    }

    addComment(data).then(() => {
      toast.success(`${isReply ? '回复' : '评论'}成功, 等待管理员审核`, { type: 'success' })
      formValue.name = ''
      formValue.email = ''
      formValue.site = ''
      formValue.content = ''
    })
  }

  return (
    <div>
      {!innerVisible ? (
        <div className="w-full h-14 flex justify-start items-center">
          <div className={`hidden sm:block rounded-sm w-14 h-14 border-4 border-bg-200 flex-shrink-0`}>
            <Lazyload
              round={2}
              src="/images/garavatar.png"
              alt="avatar"
            />
          </div>
          <div
            className={`w-full sm:ml-3 h-14 bg-bg-200 rounded-sm flex justify-start items-center cursor-text px-6 hover:bg-bg-300 duration-150`}
            onClick={() => setInnerVisible(true)}
          >
            畅所欲言
          </div>
        </div>
      ) : (
        <form className="w-full" onSubmit={handleAddComment}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className={`${isReply ? 'bg-bg-300 ' : 'bg-bg-200'} rounded-sm flex justify-between items-center px-3 h-7`}>
              <input
                className="outline-none w-full h-full border-none bg-transparent placeholder:text-xs"
                type="text"
                placeholder="昵称 *"
                required
                value={formValue.name}
                onChange={(e) => {
                  formValue.name = e.target.value
                }}
              />
            </div>
            <div className={`${isReply ? 'bg-bg-300 ' : 'bg-bg-200'} rounded-sm flex justify-between items-center px-3 h-7`}>
              <input
                className="outline-none w-full h-full border-none bg-transparent placeholder:text-xs"
                type="email"
                placeholder="邮箱 *"
                required
                value={formValue.email}
                onChange={(e) => {
                  formValue.email = e.target.value
                }}
              />
            </div>
            <div className={`${isReply ? 'bg-bg-300 ' : 'bg-bg-200'} rounded-sm flex justify-between items-center px-3 h-7`}>
              <input
                className="outline-none w-full h-full border-none bg-transparent placeholder:text-xs"
                type="url"
                placeholder="网址"
                value={formValue.site}
                onChange={(e) => {
                  formValue.site = e.target.value
                }}
              />
            </div>
          </div>
          <div className={`${isReply ? 'bg-bg-300 ' : 'bg-bg-200'} rounded-sm w-full mt-3`}>
            <textarea
              rows={4}
              className="w-full outline-none px-3 py-2 bg-transparent placeholder:text-xs"
              placeholder={comment?.name ? `@${comment?.name}: ` : '说点什么吧'}
              value={formValue.content}
              required
              onChange={(e) => {
                formValue.content = e.target.value
              }}
            />
            <div className="flex justify-between items-center h-7 bg-bg-300 rounded-b-sm">
              <div>
                <a href="https://daringfireball.net/projects/markdown/">
                  <button className="bg-bg-400 w-12 h-7 rounded-bl-sm">
                    <i className="iconfont">&#xec04;</i>
                  </button>
                </a>
                <button
                  type="button"
                  className="w-7 h-7 hover:bg-bg-400"
                  onClick={() => {
                    formValue.content = '```js\n\n```'
                  }}
                >
                  <i className="iconfont">&#xe747;</i>
                </button>
              </div>
              <button
                className="min-w-[80px] px-3 h-full bg-bg-400 rounded-br-sm"
                type="submit"
              >
                发布
                <i className="iconfont">&#xe705;</i>
              </button>
            </div>
          </div>
        </form>
      )}
      <ToastContainer
        autoClose={3000}
        hideProgressBar={true}
        theme="colored"
      />
    </div>
  )
}

export default Publish
