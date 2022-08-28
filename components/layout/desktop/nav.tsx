import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { menus } from './menu'

const Nav = () => {


  const router = useRouter()

  return (
    <div className='order-1 flex-shrink-0 w-[160px] h-auto mr-3'>
      <nav className='flex flex-col justify-between'>
        {menus.map(menu => (
          <Link href={menu.path} key={menu.key}>
            <a
              className={classNames('h-[42px] flex items-center px-4 mb-3 hover:bg-background-primary hover:text-filter rounded overflow-hidden will-change-auto transition-all duration-200', {
                'bg-background-primary text-filter': router.pathname === menu.path
              })}
              target={menu.link ? '_blank' : '_self'}
            >
              <i className='iconfont' dangerouslySetInnerHTML={{ __html: menu.icon }}></i>
              <span className='ml-1'>{menu.name}</span>
            </a>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Nav