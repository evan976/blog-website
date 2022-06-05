import * as React from 'react'
import useReactive from './useReactive'
import * as mainApi from '../api'

export default function useGlobalData() {
  const global = useReactive<GlobalContext>({
    categories: [],
    setting: {},
    recommendArticles: [],
    comments: []
  })

  const getGlobalData = async ()  => {
    const [setting, categories, recommendArticles, comments] = await Promise.all([
      mainApi.settingService.find(),
      mainApi.categoryService.findAll({ page: 1, pageSize: 999 }),
      mainApi.articleService.findAll({ page: 1, pageSize: 10 }),
      mainApi.commentService.findAll({ page: 1, pageSize: 10, status: 1 })
    ])
    global.setting = setting.data
    global.categories = categories.data?.data as ICategory[]
    global.recommendArticles = recommendArticles.data?.data as IArticle[]
    global.comments = comments.data?.data as IComment[]
  }

  React.useEffect(() => {
    getGlobalData()
  }, [])

  return global
}