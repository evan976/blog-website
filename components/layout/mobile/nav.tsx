import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { menus } from '../menu'

const BottomBar: React.FC = () => {

  const router = useRouter()

  return (
    <div className="shadow-sm border-t border-border block sm:hidden w-full h-16 bg-bg-100 fixed bottom-0 left-0">
      <ul className="w-full h-full grid grid-cols-5">
        {menus.map(menu => (
          !menu.hidden && <li key={menu.key} className="flex flex-col justify-center items-center">
            <Link href={menu.path}>
              <a className="flex flex-col justify-center items-center text-font-200">
                <i className={`iconfont !text-lg ${menu.path === router.asPath ? 'text-blue' : undefined}`} dangerouslySetInnerHTML={{ __html: menu.icon }} />
                <span className={`${menu.path === router.asPath ? 'text-blue' : undefined}`}>{menu.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BottomBar