import * as React from 'react'

interface PublishProps {
  visible?: boolean
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>
  isReply?: boolean
}

const Publish: React.FC<PublishProps> = ({ visible, isReply = false }) => {

  const [innerVisible, setInnerVisible] = React.useState(visible)

  return (
    <div>
      {!innerVisible ? (
        <div className="w-full h-14 flex justify-start items-center">
          <div className={`hidden sm:block rounded-sm w-14 h-14 border-4 border-bg-200 flex-shrink-0`}>
            <img
              className="rounded-sm w-full h-full"
              src="/garavatar.png"
              alt="avatar"
            />
          </div>
          <div
            className={`w-full ml-3 h-14 bg-bg-200 rounded-sm flex justify-start items-center cursor-text px-6 hover:bg-bg-300 duration-150`}
            onClick={() => setInnerVisible(true)}
          >
            畅所欲言
          </div>
        </div>
      ) : (
        <form className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className={`${isReply ? 'bg-bg-300 ' : 'bg-bg-200'} rounded-sm flex justify-between items-center px-3 h-7`}>
              <input
                className="outline-none w-full h-full border-none bg-transparent placeholder:text-xs"
                type="text"
                placeholder="昵称 *"
                required
              />
            </div>
            <div className={`${isReply ? 'bg-bg-300 ' : 'bg-bg-200'} rounded-sm flex justify-between items-center px-3 h-7`}>
              <input
                className="outline-none w-full h-full border-none bg-transparent placeholder:text-xs"
                type="text"
                placeholder="邮箱 *"
                required
              />
            </div>
            <div className={`${isReply ? 'bg-bg-300 ' : 'bg-bg-200'} rounded-sm flex justify-between items-center px-3 h-7`}>
              <input
                className="outline-none w-full h-full border-none bg-transparent placeholder:text-xs"
                type="text"
                placeholder="网址"
              />
            </div>
          </div>
          <div className={`${isReply ? 'bg-bg-300 ' : 'bg-bg-200'} rounded-sm w-full mt-3`}>
            <textarea
              rows={4}
              className="w-full outline-none px-3 py-2 bg-transparent placeholder:text-xs"
              placeholder="说点什么吧"
            ></textarea>
            <div className="flex justify-between items-center h-7 bg-bg-300 rounded-b-sm">
              <div>
                <button className="bg-bg-400 w-12 h-7 rounded-bl-sm">
                  <i className="iconfont">&#xec04;</i>
                </button>
                <button className="w-7 h-7 hover:bg-bg-400">
                  <i className="iconfont">&#xe7fc;</i>
                </button>
                <button className="w-7 h-7 hover:bg-bg-400">
                  <i className="iconfont">&#xe63d;</i>
                </button>
              </div>
              <button className="min-w-[80px] px-3 h-full bg-bg-400 rounded-br-sm">
                发布
                <i className="iconfont">&#xe705;</i>
              </button>
            </div>
          </div>
        </form>
      )}

    </div>
  )
}

export default Publish
