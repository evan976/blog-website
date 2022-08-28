export enum MenuKey {
  Home,
  Code,
  Lift,
  Github,
  Comment,
  Abount
}

export interface MenuItem {
  key: MenuKey
  path: string
  name: string
  icon: string
  link?: boolean
}

export const menus: Array<MenuItem> = [
  {
    key: MenuKey.Home,
    path: '/',
    icon: '&#xe600;',
    name: '开卷有益'
  },
  {
    key: MenuKey.Code,
    path: '/category/code',
    icon: '&#xe7fc;',
    name: '代码'
  },
  {
    key: MenuKey.Lift,
    icon: '&#xe62b;',
    path: '/category/life',
    name: '生活'
  },
  {
    key: MenuKey.Github,
    path: 'https://github.com/wujihua118',
    icon: '&#xe601;',
    name: 'Github',
    link: true
  },
  {
    key: MenuKey.Comment,
    path: '/comment',
    icon: '&#xe6aa;',
    name: '留言'
  },
  {
    key: MenuKey.Abount,
    path: '/about',
    icon: '&#xe61d;',
    name: '关于'
  }
]