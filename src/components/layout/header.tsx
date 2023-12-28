'use client'

import React from 'react'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { ThemeSwitcher } from '@/components/theme-switcher'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <Link className="text-2xl font-bold" href="/">
        Abe.dev
      </Link>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/posts" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                所有文章
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/categories" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                標籤分類
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ThemeSwitcher />
    </header>
  )
}
