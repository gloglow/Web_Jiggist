import {createNavigation} from 'next-intl/navigation';

export const {Link, redirect, usePathname, useRouter} =
  createNavigation({
    locales: ['ko', 'en', 'ja']
  });