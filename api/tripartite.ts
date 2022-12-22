import axios from 'axios'
import { TRIPARTITE_LINK } from 'config/app.config'

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_WEB_ACCESS_TOKEN

export const fetchWeiboList = async () => {
  const response = await axios.get(`https://api.weibo.com/2/statuses/user_timeline.json?access_token=${ACCESS_TOKEN}`, { timeout: 8000 })

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
