import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRouter } from 'next/router'
import { Logo } from '@/components/Logo'
import {
  MobileNavigation,
  useIsInsideMobileNavigation,
} from '@/components/MobileNavigation'
import { useMobileNavigationStore } from '@/components/MobileNavigation'
import { ModeToggle } from '@/components/ModeToggle'
import { getNavItems } from '@/components/Navigation'
import {
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'

function TopLevelNavItem({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

export const Header = forwardRef(function Header({ className }, ref) {
  let router = useRouter()
  let { isOpen: mobileNavIsOpen } = useMobileNavigationStore()
  let isInsideMobileNavigation = useIsInsideMobileNavigation()

  let { scrollY } = useScroll()
  let bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9])
  let bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8])

  const navItems = getNavItems()

  return (
    <motion.div
      ref={ref}
      className={clsx(
        className,
        'fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80',
        !isInsideMobileNavigation &&
          'backdrop-blur-sm dark:backdrop-blur lg:left-72 xl:left-80',
        isInsideMobileNavigation
          ? 'bg-white dark:bg-zinc-900'
          : 'bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]'
      )}
      style={{
        '--bg-opacity-light': bgOpacityLight,
        '--bg-opacity-dark': bgOpacityDark,
      }}
    >
      <div
        className={clsx(
          'absolute inset-x-0 top-full h-px transition',
          (isInsideMobileNavigation || !mobileNavIsOpen) &&
            'bg-zinc-900/7.5 dark:bg-white/7.5'
        )}
      />
      <div className="flex items-center gap-5 lg:hidden justify-right">
        <Link href="/" aria-label="Home">
          <Logo className="h-6" />
        </Link>
      </div>
      <div className="flex gap-5">
        <nav className="block">
          <ul role="list" className="flex items-center gap-8 h-full hidden lg:flex">
            <TopLevelNavItem href="https://top.gg">Website</TopLevelNavItem>
            <TopLevelNavItem href="https://discord.gg/dbl">Support</TopLevelNavItem>
          </ul>
        </nav>
        <div className="hidden md:block md:w-px md:bg-zinc-900/10 md:dark:bg-white/15 items-center" />
        <div className="flex gap-4 justify-right mr-3">
          <ModeToggle />
          <select
            className="flex items-center px-4 py-1 justify-center rounded-md text-black dark:text-white transition dark:bg-zinc-500/25 hover:bg-zinc-300/25 dark:hover:bg-white/25 block lg:hidden"
            aria-label="Toggle dark mode"
            onChange={(e) => {
              router.push(e.target.value)
              e.target.value = 'Select a section'
            }}
          >
            <option selected hidden key="default">Select a section</option>
            {navItems.map((item, index) => (
              <optgroup label={item.title} key={index}>
                {item.links.map((subItem, subIndex) => (
                  <option value={subItem.href} key={subIndex}>
                    {subItem.title}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      </div>
    </motion.div>
  )
})
