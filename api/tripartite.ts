import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN_URL

export const fetchWeiboList = async () => {
  const response = await axios.get(`${BASE_URL}/weibo`, { timeout: 8000 })

  if (response.status === 200 && response.data.statuses)
    return response.data.statuses
  else
    throw response.data
}

export const fetchGithubContributions = async () => {
  const response = await axios.get('https://skyline.github.com/wujihua118/2022.json', {
    timeout: 8000,
  })

  if (response.status === 200 && response.data)
    return response.data
  else
    throw response.data
}
