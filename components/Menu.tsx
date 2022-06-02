import * as React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { ROUTE_LINKS } from '../constants'

const Menu: React.FC = () => {

  const router = useRouter()

  return (
    <ul className='menu'>
      {
        ROUTE_LINKS.map(route => (
          <li key={route.label} className={classNames('item', {
            'active': router.asPath === route.path
          })}>
            <Link href={route.path} passHref>{route.label}</Link>
          </li>
        ))
      }
    </ul>
  )
}

export default Menu
