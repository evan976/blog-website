export enum MenuKey {
  Home,
  Code,
  Lift,
  Github,
  Comment,
  Abount,
}

export interface MenuItem {
  key: MenuKey
  path: string
  name: string
  icon: string
  link?: boolean
  hidden?: boolean
}

export const menus: Array<MenuItem> = [
  {
    key: MenuKey.Home,
    path: '/',
    icon: '&#xe600;',
    name: '开卷有益',
  },
  {
    key: MenuKey.Code,
    path: '/category/code',
    icon: '&#xe747;',
    name: '黄金屋',
  },
  {
    key: MenuKey.Lift,
    icon: '&#xe653;',
    path: '/category/life',
    name: '颜如玉',
  },
  {
    key: MenuKey.Github,
    path: 'https://github.com/wujihua118',
    icon: '&#xe601;',
    name: 'Github',
    link: true,
    hidden: true,
  },
  {
    key: MenuKey.Comment,
    path: '/comment',
    icon: '&#xe6aa;',
    name: '广开言路',
  },
  {
    key: MenuKey.Abount,
    path: '/about',
    icon: '&#xe61d;',
    name: '关于',
  },
]
