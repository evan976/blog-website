import * as React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useRequest } from 'ahooks'
import { fetchArticleList } from 'api'
import { useRouter } from 'next/router'
import useSearch from 'hooks/useSearch'

const config: Record<number, string> = {
  1: '壹',
  2: '贰',
  3: '叁',
  4: '肆',
  5: '伍',
}

const SearchDialog: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const router = useRouter()
  const { value, setValue, onChange, onSearch } = useSearch()
  const { data } = useRequest(
    fetchArticleList,
    {
      defaultParams: [{ page_size: 5 }],
      cacheKey: 'articleList',
    },
  )

  React.useEffect(() => {
    if (open)
      setValue('')
  }, [open])

  const handleClick = (articleId: string) => {
    router.push(`/article/${articleId}`)
    onClose()
  }

  return (
    <>
      <Transition appear show={open} as={React.Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={onClose}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black dark:bg-opacity-40 bg-opacity-30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-md bg-bg-100 p-6 text-left align-middle shadow-xl transition-all">
                  <form onSubmit={e => onSearch(e, () => onClose())}>
                    <input
                      type="text"
                      className='w-full rounded-md bg-gray-50 dark:bg-bg-300 p-3 indent-2 text-lg transition-colors focus:bg-gray-100 dark:focus:bg-bg-200 focus:outline-none'
                      value={value}
                      placeholder="探索与寻知"
                      onChange={onChange}
                    />
                  </form>
                  <h1 className='mt-4 text-font-100 w-full px-2'>最新文章</h1>
                  <ul className="mt-4">
                    {data?.data?.map((article, index) => (
                      <li
                        key={article.article_id}
                        className="flex items-center hover:bg-gray-100 dark:hover:bg-bg-300 rounded-md p-2 cursor-pointer transition-all duration-150"
                        onClick={() => handleClick(article.article_id)}
                      >
                        <span className={'w-12 h-12 flex shrink-0 items-center justify-center rounded-md bg-gray-50 dark:bg-bg-300 font-semibold text-base text-red'}>
                          {config[index + 1]}
                        </span>
                        <h2 className='ml-3'>{article.title}</h2>
                      </li>
                    ))}
                  </ul>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
    </Transition>
    </>
  )
}

export default SearchDialog
