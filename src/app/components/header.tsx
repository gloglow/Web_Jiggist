'use client'
import { Link } from '@/../navigation';
import { IconLinkBtn } from "./common/IconLinkBtn";
import { useAuth } from '@/providers/AuthProvider';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import LanguageSelectBtn from './common/LanguageSelectBtn';
import ImageItem from './common/ImageItem';

const category = ['liquor', 'ingredient', 'tool', 'accessory'];

const Header = () => {
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const imagePath = "../../"

  const commonT = useTranslations("common");

  if (loading) {
    return null;
  }

  const menu = user
    ? [
      { icon: "shopping_cart", href: "/cart" },
      { icon: "favorite", href: "/favorite" },
      { icon: "account_circle", href: "/mypage" },
    ]
    : [
      { icon: "account_circle", href: "/login" },
    ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-dark bg-background-dark/95 backdrop-blur-md px-6 lg:px-20 py-5">
      <div className="max-w-360 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <ImageItem
              name='logo'
              width={150}
              height={50}
            />
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            {category.map((item) => (
              <Link key={item} className="text-[11px] font-bold hover:text-accent transition-colors uppercase tracking-[0.2em]" href={`/products/${item}`}>{item}</Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6">
            <LanguageSelectBtn />
            {menu.map((item) => (
              <IconLinkBtn
                key={item.icon}
                href={item.href}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;