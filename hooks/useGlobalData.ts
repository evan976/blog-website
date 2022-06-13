import * as React from 'react'
import useReactive from './useReactive'
import * as mainApi from '../api'

export default function useGlobalData() {
  const global = useReactive<GlobalContext>({
    categories: [],
    setting: {} as ISetting
  })


  const fetchGlobalData = async () => {
    const [setting, categories] = await Promise.all([
      mainApi.settingService.find(),
      mainApi.categoryService.findAll({  page: 1, pageSize: 100 })
    ])
    global.setting = setting.data
    global.categories = categories.data.data
  }

  React.useEffect(() => {
    fetchGlobalData()
  }, [])

  return global
}