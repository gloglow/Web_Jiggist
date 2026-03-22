import { locales } from "@/types/locale"
import { usePathname, useRouter } from "next/navigation"

export default function LanguageSelectBtn() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split("/")[1];

  const handleChangeLocale = (locale: string) => {
    const segments = pathname.split("/");

    segments[1] = locale;

    const newPath = segments.join("/");
    router.push(newPath);
  }

  return (
    <select
      onChange={(e) => handleChangeLocale(e.target.value)}
      value={currentLocale}
    >
      <option value="en">EN</option>
      <option value="ko">KO</option>
      <option value="ja">JP</option>
    </select>
  )
}