export interface RouteLink {
  path: string
  label: string
  icon?: string
}

export const ROUTE_LINKS: Readonly<RouteLink[]> = [
  {
    path: '/',
    label: '首页',
    icon: 'home'
  },
  {
    path: '/comment',
    label: '留言',
    icon: 'comment'
  },
  {
    path: '/about',
    label: '关于',
    icon: 'info'
  }
]