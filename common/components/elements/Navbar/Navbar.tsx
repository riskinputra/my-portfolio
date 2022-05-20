import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router"

import styles from './Navbar.module.scss'

const Navbar = () => {
  const router = useRouter()
  const menus = [
    { 
      path: 'about',
      label: 'About'
     },
     { 
      path: 'experience',
      label: 'Experience'
     },
     { 
      path: 'work',
      label: 'Work'
     }
    //  { 
    //   path: 'contact',
    //   label: 'Contact'
    //  }
  ]

  return (
    <header data-testid='navbar' className={styles['header-container']}>
      <nav className={styles['header-nav']}>
        <div className={styles['nav-logo']}>
          <Link href="/">
            <Image data-testid='navbar-logo' src="/assets/images/logo.svg" alt="logo" height={40} width={40} />
          </Link>
        </div>

        <div className={styles['nav-menu']}>
          <ol data-testid='navbar-menus' aria-labelledby='menus-heading' className={styles['nav-menu-list']}>
            { menus.map((menu, index) => (
              <li key={index}>
                <a onClick={() => router.push(`/#${menu.path}`)}>{menu.label}</a>
              </li>
            )) }
          </ol>
        </div>
      </nav>
    </header>
  )
}

export default Navbar