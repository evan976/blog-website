import axios from 'axios'
import { TRIPARTITE_LINK } from 'config/app.config'

const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN_URL

export const fetchWeiboList = async () => {
  const response = await axios.get(`${BASE_URL}/weibo`, { timeout: 8000 })

  if (response.status === 200 && response.data.statuses)
    return response.data.statuses
  else
    throw response.data
}

export const fetchGithubContributions = async () => {
  const response = await axios.get(TRIPARTITE_LINK.github_contributions, {
    timeout: 8000,
  })

  if (response.status === 200 && response.data)
    return response.data
  else
    throw response.data
}
