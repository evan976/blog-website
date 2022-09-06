import React from 'react'
import Card from 'components/common/card'

const Article: React.FC = () => {
  return (
    <Card title="热门文章" icon="&#xe753;" className="mt-3">
      <ul className="w-full h-full">
        {[0, 1, 2, 3, 4].map((item, index) => (
          <li key={item} className="h-6 flex justify-start items-center">
            <span
              className={`leading-4 h-4 w-4 mr-2 text-[12px] rounded-[1px] flex justify-center items-center bg-bg-400 shrink-0 ${
                index + 1 === 1 ? 'text-white !bg-blue' : undefined
              } ${index + 1 === 2 ? 'text-white !bg-green' : undefined} ${
                index + 1 === 3 ? 'text-white !bg-red' : undefined
              }`}
            >
              {index + 1}
            </span>
            <a
              href="/"
              className="truncate text-sm text-font-200 text-ellipsis overflow-hidden transition-all duration-200 hover:text-blue"
            >
              文章标题文章标题文章标题文章标题
            </a>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default Article
